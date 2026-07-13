/**
 * YT VOD Timestamp Generator - Popup Controller
 * Manages API storage, UI interactions, validation rules, and message triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
    initializePopup();
});

function initializePopup() {
    const apiKeyInput = document.getElementById('apiKeyInput');
    const saveKeyBtn = document.getElementById('saveKeyBtn');
    const generateBtn = document.getElementById('generateBtn');

    loadSavedApiKey(apiKeyInput);

    saveKeyBtn.addEventListener('click', () => {
        handleSaveKey(apiKeyInput.value);
    });

    generateBtn.addEventListener('click', () => {
        handleGenerateAction(apiKeyInput.value.trim(), generateBtn);
    });
}

/**
 * Loads the saved Gemini API key from local Chrome storage.
 */
function loadSavedApiKey(inputElement) {
    chrome.storage.local.get(['geminiApiKey'], (result) => {
        if (result.geminiApiKey) {
            inputElement.value = result.geminiApiKey;
        }
    });
}

/**
 * Validates and saves the API key to local storage.
 */
function handleSaveKey(keyValue) {
    const cleanKey = keyValue.trim();
    if (!cleanKey) {
        showStatus('⚠️ Key tidak boleh kosong.', 'text-yellow-400');
        return;
    }

    chrome.storage.local.set({ geminiApiKey: cleanKey }, () => {
        showStatus('✅ API Key berhasil disimpan!', 'text-green-400');
    });
}

/**
 * Orchestrates verification and begins the timestamp generation process.
 */
async function handleGenerateAction(apiKey, generateBtn) {
    if (!apiKey) {
        showStatus('⚠️ Harap masukkan & simpan API Key dulu!', 'text-yellow-400');
        return;
    }

    const activeTab = await getActiveTab();
    if (!isValidYouTubeWatchUrl(activeTab.url)) {
        showStatus('❌ Buka halaman video/VOD YouTube terlebih dahulu.', 'text-red-400');
        return;
    }

    toggleButtonLoadingState(generateBtn, true);
    showStatus('⏳ Sedang memproses... Mohon tunggu (jangan tutup popup).', 'text-yellow-400');

    requestTimestampGeneration(activeTab.url, apiKey, (response) => {
        toggleButtonLoadingState(generateBtn, false);
        processWorkerResponse(response);
    });
}

/**
 * Obtains the active tab object in the current window.
 */
async function getActiveTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab;
}

/**
 * Verifies if the URL matches a YouTube video page structure.
 */
function isValidYouTubeWatchUrl(url) {
    return url && (url.includes("youtube.com/watch") || url.includes("youtube.com/live"));
}

/**
 * Sends a runtime message to background.js requesting chapter generation.
 */
function requestTimestampGeneration(tabUrl, apiKey, callback) {
    chrome.runtime.sendMessage({
        action: "GENERATE_TIMESTAMP",
        url: tabUrl,
        apiKey: apiKey
    }, callback);
}

/**
 * Toggles disabled/enabled classes on buttons during background network activities.
 */
function toggleButtonLoadingState(buttonElement, isLoading) {
    buttonElement.disabled = isLoading;
    if (isLoading) {
        buttonElement.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        buttonElement.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

/**
 * Dispatches outputs or raises error alerts depending on worker response codes.
 */
function processWorkerResponse(response) {
    if (response && response.success) {
        showStatus('✅ Selesai! Mengunduh file...', 'text-green-400');
        triggerFileDownload(response.data, response.videoId);
    } else {
        const errorText = response ? response.error : 'Terjadi kesalahan sistem.';
        showStatus(`❌ Gagal: ${errorText}`, 'text-red-400');
    }
}

/**
 * Updates popup status bar elements with corresponding messages and text styling.
 */
function showStatus(text, colorClass) {
    const statusContainer = document.getElementById('statusContainer');
    const statusMsg = document.getElementById('statusMsg');

    statusContainer.classList.remove('hidden');
    statusMsg.className = `text-xs font-semibold ${colorClass}`;
    statusMsg.textContent = text;
}

/**
 * Creates a download blob locally to trigger automatic saving of transcript TXT files.
 */
function triggerFileDownload(content, videoId) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `VOD_Timestamp_${videoId}.txt`;

    document.body.appendChild(anchor);
    anchor.click();

    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
}