"use client";

import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function Features() {
  const features: Feature[] = [
    {
      title: "One-Click Transcripts",
      description: "Directly fetch and download formatted YouTube video transcripts as TXT files without leaving the tab.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: "AI Chapter Structuring",
      description: "Gemini analyzes transcripts to group sections logically and generate accurate chapters with custom time-markers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.473L21 9l-3.283-3.283m-7.904 10.187l1.797-8.983L21 9M9.813 15.904L4.812 17.06l-2.072-2.072 1.156-5.001 5.917-4.187m0 0L9.813 15.904M9.813 15.904l-5.001-1.156M9.813 15.904L13.1 7.2M3.75 3.75l16.5 16.5" />
        </svg>
      ),
    },
    {
      title: "Bring Your Own Key (BYOK)",
      description: "Zero middleware fees. Use your personal Google AI Gemini key directly, paying only for what you consume (often 100% free).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.02 5.912L9 19.5H6.25v-2.75l.078-.078a3 3 0 01.322-.294l3.14-3.14A6 6 0 0115.75 5.25z" />
        </svg>
      ),
    },
    {
      title: "Privacy First",
      description: "Your transcripts and Gemini keys are saved in Chrome storage local. They never transit through external servers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: "Background Processing",
      description: "Works non-intrusively in under 10 seconds per VOD, letting you browse other tabs while the content generates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Ready-to-Paste Format",
      description: "Outputs timestamps in the exact YouTube description style, allowing you to instantly insert chapters in video editing workflows.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 border-y border-slate-100 dark:border-slate-900/50 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="eyebrow-text">Optimized Engine</span>
          <h2 className="text-3xl font-bold sm:text-5xl text-movie-title text-slate-900 dark:text-white">
            Designed for Creators and Power Users
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Eliminate hours of manual timeline tagging. Get clean timestamps and full transcripts in the fastest, most cost-effective way possible.
          </p>
        </div>

        {/* Features Grid with Framer-like glow boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-card glow-border hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 border border-red-100/50 dark:border-red-900/20 group-hover:scale-110 transition-transform mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 font-serif group-hover:text-red-550 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
