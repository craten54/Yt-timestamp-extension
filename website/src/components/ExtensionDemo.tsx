"use client";

import React, { useState } from "react";

type MockVOD = {
  id: string;
  title: string;
  creator: string;
  duration: string;
  thumbnailColor: string;
  transcript: string;
  timestamps: string;
};

const MOCK_VIDEOS: MockVOD[] = [
  {
    id: "dQw4w9WgXcQ",
    title: "Building an Autonomous AI Coding Assistant from Scratch",
    creator: "TechCraft Academy",
    duration: "42:15",
    thumbnailColor: "from-blue-650 via-indigo-800 to-purple-900",
    transcript: "Welcome to this deep dive. Today we are coding an autonomous AI agent using LLMs. First, we outline the requirements at 0:00. Then we set up the developer sandbox environment at 4:15. At 15:30, we write our core loop, handling agentic reasoning and tool invocation. Finally, at 36:20 we test it live and conclude.",
    timestamps: `00:00 - Introduction & Project Roadmap\n04:15 - Setting up the Developer Sandbox\n15:30 - Core Loop: Agentic Reasoning & Tool Invocation\n36:20 - Live Sandbox Tests & Conclusion\n40:10 - Future Roadmap & Q&A`,
  },
  {
    id: "y6120QOlsfU",
    title: "Google I/O Keynote: The Future of Gemini and Agentic Workflows",
    creator: "Global Tech Conference",
    duration: "1:18:24",
    thumbnailColor: "from-red-550 via-rose-700 to-orange-700",
    transcript: "Welcome to the future. Let's talk about Gemini 2.5 and agentic models. Our opening keynote is at 0:00. At 12:10 we showcase real-time multi-modal applications. Moving on to 35:45, we present developer integrations and AI Studio tools. At 1:05:20, we announce global rollouts and pricing updates.",
    timestamps: `00:00 - Opening Keynote & Gemini 2.5 Model Reveal\n12:10 - Demo: Real-time Multi-modal Applications\n35:45 - Developer Ecosystem & Google AI Studio Tools\n01:05:20 - Global Rollouts, Production Pricing & Conclusion`,
  },
];

export default function ExtensionDemo() {
  const [selectedVideo, setSelectedVideo] = useState<MockVOD>(MOCK_VIDEOS[0]);
  const [apiKey, setApiKey] = useState("");
  const [isKeySaved, setIsKeySaved] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const [outputTimestamps, setOutputTimestamps] = useState<string | null>(null);
  const [progressStep, setProgressStep] = useState(0);

  const handleSaveKey = () => {
    if (apiKey.trim()) {
      setIsKeySaved(true);
      showStatus("✅ API Key berhasil disimpan!", "text-green-400");
    } else {
      showStatus("⚠️ Key tidak boleh kosong.", "text-yellow-400");
    }
  };

  const handleGenerate = () => {
    if (!apiKey.trim() && !isKeySaved) {
      showStatus("⚠️ Harap masukkan & simpan API Key dulu!", "text-yellow-400");
      return;
    }

    setIsProcessing(true);
    setOutputTimestamps(null);
    showStatus("⏳ Sedang memproses... Mohon tunggu (jangan tutup popup).", "text-yellow-400");
    
    // Simulate multi-step processing animation
    setProgressStep(1);
    
    setTimeout(() => {
      setProgressStep(2);
      setTimeout(() => {
        setProgressStep(3);
        setTimeout(() => {
          setIsProcessing(false);
          setOutputTimestamps(selectedVideo.timestamps);
          showStatus("✅ Selesai! Mengunduh file...", "text-green-400");
          triggerMockDownload(selectedVideo.timestamps, selectedVideo.id);
        }, 1200);
      }, 1000);
    }, 800);
  };

  const showStatus = (text: string, colorClass: string) => {
    setStatusMessage(text);
    setStatusColor(colorClass);
  };

  const triggerMockDownload = (content: string, videoId: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `VOD_Timestamp_${videoId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const autofillMockKey = () => {
    setApiKey("AIzaSyFakeKey_GeminiDemo77");
  };

  return (
    <section id="demo" className="py-24 bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="eyebrow-text">Interactive Showcase</span>
          <h2 className="text-3xl font-bold sm:text-5xl text-movie-title text-slate-900 dark:text-white">
            Experience the Core Pipeline
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-base sm:text-lg">
            Interact with the visual mockup below. Select a mock YouTube VOD, fill in a demo key, and experience the generation flow in real-time.
          </p>
        </div>

        {/* Demo Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Mock YouTube Interface */}
          <div className="lg:col-span-8 flex flex-col border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden glass-card">
            {/* Header / Address Bar */}
            <div className="flex items-center gap-2 px-4 py-3.5 bg-slate-100/60 dark:bg-slate-950/80 border-b border-slate-200/85 dark:border-slate-800/80">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 max-w-md mx-auto flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg py-1.5 px-4 text-xs border border-slate-200 dark:border-slate-800 text-slate-450 dark:text-slate-550 font-mono select-none">
                https://www.youtube.com/watch?v={selectedVideo.id}
              </div>
            </div>

            {/* YouTube Content Shell */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col gap-6">
              {/* Selector Tabs */}
              <div className="flex flex-wrap gap-2.5">
                {MOCK_VIDEOS.map((vid) => (
                  <button
                    key={vid.id}
                    onClick={() => {
                      setSelectedVideo(vid);
                      setOutputTimestamps(null);
                      setStatusMessage("");
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      selectedVideo.id === vid.id
                        ? "bg-red-650 text-white border-red-500 shadow-md shadow-red-500/10"
                        : "bg-slate-100/50 text-slate-500 border-slate-200 hover:bg-slate-100 dark:bg-slate-950/80 dark:text-slate-450 dark:border-slate-850 dark:hover:bg-slate-800"
                    }`}
                  >
                    VOD Demo: {vid.creator}
                  </button>
                ))}
              </div>

              {/* Video Player Mock */}
              <div className={`aspect-video w-full rounded-xl bg-gradient-to-br ${selectedVideo.thumbnailColor} relative overflow-hidden shadow-2xl flex flex-col items-center justify-center group border border-white/5`}>
                {/* Play Button Icon */}
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                
                {/* Player Overlay Panel */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-5 flex justify-between items-center text-white/95 backdrop-blur-[2px]">
                  <span className="text-sm font-bold tracking-wide drop-shadow">{selectedVideo.title}</span>
                  <span className="text-xs font-mono drop-shadow font-semibold bg-black/20 px-2 py-0.5 rounded">{selectedVideo.duration}</span>
                </div>
              </div>

              {/* Video Details */}
              <div className="space-y-3 border-b border-slate-150 dark:border-slate-800/80 pb-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug font-serif">
                  {selectedVideo.title}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-sm text-slate-650 dark:text-slate-400">
                    {selectedVideo.creator.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{selectedVideo.creator}</p>
                    <p className="text-[10px] text-slate-450 dark:text-slate-550">1.2M subscribers</p>
                  </div>
                </div>
              </div>

              {/* Transcript Preview */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-400 dark:text-slate-500 tracking-widest uppercase">Transcript Generated (Subtitles XML)</h4>
                <div className="p-4 bg-slate-50 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/60 rounded-xl font-mono text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 h-28 overflow-y-auto">
                  {selectedVideo.transcript}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Chrome Extension Mockup */}
          <div className="lg:col-span-4 flex flex-col items-center justify-start">
            <div className="w-full max-w-sm border border-slate-350 dark:border-slate-800 bg-zinc-900 text-white font-sans rounded-2xl shadow-2xl p-6 relative overflow-hidden glow-border">
              
              {/* Top Banner indicating chrome action */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-500 to-rose-600" />
              
              {/* Header */}
              <div className="text-center pb-5 border-b border-zinc-800/80">
                <h1 className="text-xl font-bold text-red-500 font-serif">VOD Timestamp</h1>
                <p className="text-[10px] text-zinc-400 tracking-wider uppercase font-semibold">AI Chapter Generator</p>
              </div>

              <div className="mt-5 flex flex-col gap-4.5">
                
                {/* Input API Key */}
                <div className="bg-zinc-850 p-4 rounded-xl border border-zinc-800 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-0.5">
                      <label className="block text-[11px] font-bold text-zinc-300">API Key Gemini:</label>
                      <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-[9px] text-red-400 hover:text-red-300 hover:underline">
                        Dapatkan Key Gratis
                      </a>
                    </div>
                    <button
                      onClick={autofillMockKey}
                      className="text-[9px] text-red-450 hover:text-red-300 font-bold tracking-wide transition-colors cursor-pointer bg-zinc-800 px-2 py-1 rounded"
                    >
                      Autofill Key
                    </button>
                  </div>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => {
                      setApiKey(e.target.value);
                      setIsKeySaved(false);
                    }}
                    placeholder="Paste API Key di sini..."
                    className="w-full p-2.5 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-red-500 text-xs font-mono text-white transition-all placeholder:text-zinc-550"
                  />
                  <button
                    onClick={handleSaveKey}
                    className="w-full bg-zinc-750 hover:bg-zinc-700 text-white py-2 rounded-lg text-xs font-bold transition shadow-sm cursor-pointer"
                  >
                    Simpan Key
                  </button>
                </div>

                {/* Main Action Button */}
                <button
                  onClick={handleGenerate}
                  disabled={isProcessing}
                  className={`w-full font-bold py-3.5 px-4 rounded-xl shadow-xl transition-all text-xs flex justify-center items-center gap-2.5 cursor-pointer ${
                    isProcessing
                      ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700/60"
                      : "bg-red-650 hover:bg-red-700 text-white hover:shadow-red-650/15"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-zinc-500 border-t-white animate-spin" />
                      <span>Generating Chapters...</span>
                    </>
                  ) : (
                    <span>Generate & Download TXT</span>
                  )}
                </button>

                {/* Status Message */}
                {statusMessage && (
                  <div className="text-center p-3 rounded-xl bg-zinc-850/80 border border-zinc-800">
                    <p className={`text-[11px] font-semibold leading-normal ${statusColor}`}>
                      {statusMessage}
                    </p>
                  </div>
                )}

                {/* Simulator Processing Steps */}
                {isProcessing && (
                  <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-850 text-[10px] font-mono text-zinc-450 space-y-2 animate-pulse">
                    <div className="flex items-center gap-2">
                      <span className={progressStep >= 1 ? "text-green-400" : "text-zinc-650"}>✓</span>
                      <span>[1/3] Fetching video transcripts...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={progressStep >= 2 ? "text-green-400" : "text-zinc-650"}>
                        {progressStep === 1 ? "⏳" : progressStep >= 2 ? "✓" : "◦"}
                      </span>
                      <span className={progressStep >= 2 ? "text-zinc-300" : "text-zinc-550"}>[2/3] Analyzing segments via Gemini...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={progressStep >= 3 ? "text-green-400" : "text-zinc-650"}>
                        {progressStep === 2 ? "⏳" : progressStep >= 3 ? "✓" : "◦"}
                      </span>
                      <span className={progressStep >= 3 ? "text-zinc-300" : "text-zinc-550"}>[3/3] Structuring output timestamps...</span>
                    </div>
                  </div>
                )}

                {/* Output File Visualizer */}
                {outputTimestamps && (
                  <div className="bg-zinc-850/50 border border-zinc-800 rounded-xl p-4 space-y-2.5 animate-fadeIn">
                    <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                      <span>VOD_Timestamp_{selectedVideo.id}.txt</span>
                      <span className="text-green-500 text-[9px] font-bold bg-green-950/30 px-1.5 py-0.5 rounded border border-green-900/30">Downloaded</span>
                    </div>
                    <pre className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg font-mono text-[9px] text-zinc-300 whitespace-pre-wrap leading-normal">
                      {outputTimestamps}
                    </pre>
                  </div>
                )}
              </div>
            </div>
            
            {/* Guide under mockup */}
            <p className="text-[11px] text-slate-450 dark:text-slate-550 text-center mt-4 max-w-xs leading-normal">
              Click <strong>Autofill Key</strong> then <strong>Simpan Key</strong>, and press <strong>Generate</strong> to download the mock chapters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
