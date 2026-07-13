/**
 * YT VOD Timestamp Generator - Background Script Service Worker
 * Handles YouTube transcript extraction, coordinates calls to Google Gemini API,
 * and passes finalized chapter timestamps back to the Popup script.
 */

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "GENERATE_TIMESTAMP") {
        runTimestampPipeline(request.url, request.apiKey, sendResponse);
        return true; // Keeps the message channel open for asynchronous responses
    }
});

/**
 * Orchestrates the full process: Extraction -> Gemini Analysis -> Success/Failure Callback.
 */
async function runTimestampPipeline(videoUrl, apiKey, sendResponse) {
    try {
        const videoId = extractVideoId(videoUrl);
        if (!videoId) {
            throw new Error("Gagal mengenali Video ID dari URL YouTube.");
        }

        const rawTranscript = await fetchYoutubeTranscript(videoId);
        if (!rawTranscript) {
            throw new Error("Transkrip tidak ditemukan untuk video ini. Pastikan video memiliki subtitle.");
        }

        const formattedChapters = await generateAiChapters(rawTranscript, apiKey);
        
        sendResponse({
            success: true,
            data: formattedChapters,
            videoId: videoId
        });
    } catch (error) {
        sendResponse({
            success: false,
            error: error.message || "Terjadi kesalahan internal."
        });
    }
}

/**
 * Extracts the video ID from youtube.com watch or live URLs.
 */
function extractVideoId(urlStr) {
    try {
        const url = new URL(urlStr);
        if (url.pathname.includes("/live/")) {
            return url.pathname.split("/live/")[1].split("?")[0];
        }
        return url.searchParams.get("v");
    } catch (e) {
        return null;
    }
}

/**
 * Fetches and parses internal YouTube subtitles page to retrieve transcripts client-side.
 */
async function fetchYoutubeTranscript(videoId) {
    const pageResponse = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
    const htmlText = await pageResponse.text();

    const initialPlayerMatch = htmlText.match(/ytInitialPlayerResponse\s*=\s*({.+?})\s*;/);
    if (!initialPlayerMatch) {
        throw new Error("Gagal membaca inisialisasi player YouTube.");
    }

    const playerJson = JSON.parse(initialPlayerMatch[1]);
    const tracklist = playerJson.captions?.playerCaptionsTracklistRenderer;
    if (!tracklist || !tracklist.captionTracks || tracklist.captionTracks.length === 0) {
        throw new Error("Video ini tidak memiliki subtitle/transkrip publik.");
    }

    // Select the first English track or fallback to first available
    const tracks = tracklist.captionTracks;
    const selectedTrack = tracks.find(t => t.languageCode === 'en' || t.languageCode === 'id') || tracks[0];

    // Fetch the raw XML transcript and clean it into plain readable sentences
    const transcriptResponse = await fetch(`${selectedTrack.baseUrl}&fmt=json3`);
    const transcriptJson = await transcriptResponse.json();

    return parseTranscriptJson(transcriptJson);
}

/**
 * Parses json3-formatted caption JSON into a single concatenated text string.
 */
function parseTranscriptJson(json) {
    if (!json || !json.events) return "";

    return json.events
        .map(event => {
            if (!event.segs) return "";
            const segmentText = event.segs.map(s => s.utf8).join(" ");
            const timeInSeconds = Math.floor(event.tStartMs / 1000);
            return `[${formatTime(timeInSeconds)}] ${segmentText}`;
        })
        .filter(text => text.trim().length > 0)
        .join("\n");
}

/**
 * Helper to convert seconds into HH:MM:SS / MM:SS format.
 */
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formattedMins = String(mins).padStart(2, '0');
    const formattedSecs = String(secs).padStart(2, '0');

    if (hrs > 0) {
        return `${String(hrs).padStart(2, '0')}:${formattedMins}:${formattedSecs}`;
    }
    return `${formattedMins}:${formattedSecs}`;
}

/**
 * Sends the structured transcript to Google Gemini API for chapter generation.
 */
async function generateAiChapters(transcriptText, apiKey) {
    const prompt = `Anda adalah asisten AI pembuat bab/chapter video YouTube profesional.
Tugas Anda adalah membaca transkrip video berikut yang dilengkapi dengan penanda waktu [MM:SS] atau [HH:MM:SS] dan membuat bab video terstruktur.

Aturan Pembuatan Bab:
1. Mulai bab pertama tepat pada penanda waktu 00:00 (atau 00:00:00).
2. Tulis bab dalam bahasa Indonesia atau Inggris (menyesuaikan bahasa transkrip).
3. Buat judul bab singkat, padat, informatif, dan menarik bagi penonton.
4. Setiap baris harus mengikuti format penanda waktu YouTube: "PENANDA_WAKTU - Judul Bab".
Contoh:
00:00 - Introduction
04:12 - Setup API Key
12:35 - Pengujian Integrasi

Transkrip Video:
${transcriptText}

Output Bab Video saja tanpa penjelasan tambahan:`;

    const apiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ]
    };

    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        const errorJson = await response.json().catch(() => ({}));
        const errorMessage = errorJson.error?.message || `HTTP status ${response.status}`;
        throw new Error(`Google API Error: ${errorMessage}`);
    }

    const responseJson = await response.json();
    const generatedText = responseJson.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
        throw new Error("Model Gemini tidak mengembalikan output teks.");
    }

    return generatedText.trim();
}
