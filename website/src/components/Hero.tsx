"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36 transition-colors duration-300">
      
      {/* Cinematic Animated Radial Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        {/* Glow Left Upper - Soft red drift */}
        <div className="absolute top-[-10%] left-[-20%] w-[60%] aspect-square rounded-full ambient-glow-1 blur-[120px] animate-drift" />
        {/* Glow Right Lower - Soft amber drift */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] aspect-square rounded-full ambient-glow-2 blur-[120px] animate-drift" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: High-impact cinematic typography */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Spotlight Eyebrow tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-slate-200/40 dark:border-slate-800/30">
              <span className="w-1.5 h-1.5 rounded-full bg-red-650 dark:bg-red-550 animate-pulse" />
              <span className="eyebrow-text">100% Client-Side AI Engine</span>
            </div>
            
            {/* Theatrical Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-movie-title leading-[1.05] text-slate-900 dark:text-white">
              Watch. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-500 dark:to-rose-450">
                Generate.
              </span> <br />
              Chapters instantly.
            </h1>
            
            {/* Dramatic Paragraph */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-650 dark:text-slate-400 font-sans leading-relaxed">
              Unlock structural video chapters and clean text transcripts straight from your browser. Bring your own Gemini API key for private, local execution with no server middleman, no fees, and absolute speed.
            </p>

            {/* Buttons with Cinematic Shadows */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#guide"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-600/20 hover:shadow-red-600/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Add to Chrome — Free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-xl border border-slate-250 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 hover:bg-white/70 dark:hover:bg-slate-900/60 text-slate-800 dark:text-slate-205 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer backdrop-blur-md"
              >
                Try Live Simulator
              </a>
            </div>

            {/* Micro details / stats */}
            <div className="pt-10 border-t border-slate-200/50 dark:border-slate-900/50 grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-white">Local-First</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-500 font-semibold tracking-wider uppercase mt-1">Data Safety</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-white">&lt; 10s</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-500 font-semibold tracking-wider uppercase mt-1">Generation</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-slate-900 dark:text-white">BYOK</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-500 font-semibold tracking-wider uppercase mt-1">Direct API</p>
              </div>
            </div>
          </div>

          {/* Right Column: Floating spotlight mockup */}
          <div className="lg:col-span-5 flex justify-center animate-float">
            <div className="relative w-full max-w-sm rounded-2xl glow-border bg-white dark:bg-slate-950/80 shadow-2xl p-6 overflow-hidden transition-all duration-300">
              
              {/* Chrome Toolbar Mock */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-900/60 mb-5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] text-slate-450 dark:text-slate-650 font-mono tracking-widest uppercase">youtube.com</span>
                <span className="w-4 h-4 text-slate-350 dark:text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.936 6.936 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
                  </svg>
                </span>
              </div>

              {/* Extension UI Elements Mockup */}
              <div className="space-y-5">
                <div className="text-center">
                  <h3 className="text-base font-bold text-red-500 font-serif">VOD Timestamp</h3>
                  <p className="text-[10px] text-slate-450 dark:text-slate-550 uppercase tracking-widest">AI Chapter Generator</p>
                </div>

                {/* API key section */}
                <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">Gemini API Key:</label>
                    <span className="text-[9px] text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-950/30 px-2 py-0.5 rounded border border-green-200/30 dark:border-green-900/20">Saved</span>
                  </div>
                  <input
                    type="password"
                    disabled
                    value="••••••••••••••••••••••••••••"
                    className="w-full text-xs p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-250 dark:border-slate-800 text-slate-400 focus:outline-none"
                  />
                </div>

                {/* Main Action Button */}
                <button
                  disabled
                  className="w-full bg-red-650 text-white font-bold py-3 rounded-xl text-xs flex justify-center items-center shadow-lg shadow-red-650/15"
                >
                  Generate & Download TXT
                </button>

                {/* Output indicator */}
                <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 p-4 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-slate-450 dark:text-slate-550 font-mono">
                    <span>Output File:</span>
                    <span>TXT</span>
                  </div>
                  <div className="border border-dashed border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-lg p-3 font-mono text-[9px] text-slate-650 dark:text-slate-400 leading-normal space-y-1.5">
                    <div>00:00 - Introduction</div>
                    <div>04:12 - Setting up Gemini API</div>
                    <div>12:35 - Testing the Script Worker</div>
                    <div>19:04 - Q&A and Outro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
