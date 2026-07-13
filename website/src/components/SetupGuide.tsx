"use client";

import React, { useState } from "react";

type Step = {
  num: string;
  title: string;
  shortDesc: string;
  details: React.ReactNode;
};

export default function SetupGuide() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      num: "01",
      title: "Install Extension",
      shortDesc: "Load the extension in Developer Mode",
      details: (
        <div className="space-y-3">
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Since this project is open-source, you can easily load it into Chrome directly from your local files:
          </p>
          <ol className="list-decimal pl-5 text-xs text-slate-600 dark:text-slate-400 space-y-2.5">
            <li>Download the source files from GitHub repository and extract the ZIP.</li>
            <li>Open Google Chrome and navigate to <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">chrome://extensions/</code>.</li>
            <li>In the top right corner, toggle the <strong>Developer mode</strong> switch to <strong>ON</strong>.</li>
            <li>Click the <strong>Load unpacked</strong> button in the top left.</li>
            <li>Select the folder containing the extension files (where <code className="font-mono text-[10px]">manifest.json</code> is located).</li>
          </ol>
        </div>
      ),
    },
    {
      num: "02",
      title: "Get Gemini API Key",
      shortDesc: "Acquire a free API key from Google AI Studio",
      details: (
        <div className="space-y-3">
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Your key connects the extension directly to Google&apos;s language models:
          </p>
          <ol className="list-decimal pl-5 text-xs text-slate-600 dark:text-slate-400 space-y-2.5">
            <li>Go to the <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-red-650 hover:text-red-500 font-bold underline transition-colors">Google AI Studio</a> console.</li>
            <li>Log in using your standard Google/Gmail account.</li>
            <li>Click the blue <strong>Get API Key</strong> button on the dashboard.</li>
            <li>Choose <strong>Create API Key</strong> and select your project directory or create a default key.</li>
            <li>Copy the API Key string (starts with <code className="font-mono text-[10px]">AIzaSy...</code>). Save it securely.</li>
          </ol>
        </div>
      ),
    },
    {
      num: "03",
      title: "Run on YouTube VODs",
      shortDesc: "Generate chapters and download text transcripts",
      details: (
        <div className="space-y-3">
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Now you are ready to automate chapter tags on any YouTube VOD:
          </p>
          <ol className="list-decimal pl-5 text-xs text-slate-600 dark:text-slate-400 space-y-2.5">
            <li>Navigate to any YouTube video page (e.g. <code className="font-mono text-[10px]">youtube.com/watch?v=...</code>).</li>
            <li>Click the <strong>VOD Timestamp</strong> puzzle-icon in the extension toolbar.</li>
            <li>Paste your Gemini API key into the text field and click <strong>Simpan Key</strong>.</li>
            <li>Click <strong>Generate & Download TXT</strong>.</li>
            <li>Wait under 10 seconds. Your browser will download the formatted transcript file automatically!</li>
          </ol>
        </div>
      ),
    },
  ];

  return (
    <section id="guide" className="py-24 bg-slate-50/50 dark:bg-slate-950/20 border-y border-slate-100 dark:border-slate-900/50 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="eyebrow-text">Setup Tutorial</span>
          <h2 className="text-3xl font-bold sm:text-5xl text-movie-title text-slate-900 dark:text-white">
            Simple 3-Step Setup Guide
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-base sm:text-lg">
            Follow these easy steps to get the extension running in your browser in less than five minutes.
          </p>
        </div>

        {/* Dynamic Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Step Selector Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  activeStep === idx
                    ? "bg-white dark:bg-slate-900 border-red-500 shadow-xl scale-[1.02] glass-card"
                    : "bg-transparent border-slate-200 dark:border-slate-800/80 hover:bg-white/40 dark:hover:bg-slate-900/10"
                }`}
              >
                {/* Background Huge Number for Cinematic Touch */}
                <div className={`absolute right-4 top-2 font-serif text-7xl font-black select-none pointer-events-none transition-all duration-300 ${
                  activeStep === idx 
                    ? "text-red-500/10 dark:text-red-500/5 scale-110" 
                    : "text-slate-100 dark:text-slate-850 opacity-40 group-hover:opacity-60"
                }`}>
                  {step.num}
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <span className={`text-xs font-mono font-bold px-2 py-1 rounded-lg ${
                    activeStep === idx
                      ? "bg-red-500 text-white"
                      : "bg-slate-100 text-slate-500 dark:bg-slate-850 dark:text-slate-450"
                  }`}>
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-serif">{step.title}</h3>
                    <p className="text-[10px] text-slate-500 dark:text-slate-500 mt-1 font-semibold uppercase tracking-wider">{step.shortDesc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Details Content Display */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl min-h-[300px] flex flex-col justify-between glass-card glow-border">
            <div>
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-5 mb-5">
                <span className="text-[10px] font-mono font-extrabold text-red-500 tracking-widest uppercase">Step {steps[activeStep].num} Details</span>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white font-serif">{steps[activeStep].title}</h3>
              </div>
              {steps[activeStep].details}
            </div>
            
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-5 mt-8">
              <span className="text-[10px] text-slate-450 dark:text-slate-550 font-medium">Need help? Read the repository README.md.</span>
              <div className="flex gap-2.5">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-350 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none hover:bg-slate-50 dark:hover:bg-slate-850 transition cursor-pointer"
                >
                  Back
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="px-4 py-2 rounded-xl bg-red-650 hover:bg-red-700 disabled:bg-slate-200 dark:disabled:bg-slate-800/60 text-white disabled:text-slate-400 dark:disabled:text-slate-550 text-xs font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none transition cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
