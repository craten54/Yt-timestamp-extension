"use client";

import React from "react";

type ComparisonRow = {
  feature: string;
  ours: string;
  saas: string;
  manual: string;
  highlight: boolean;
};

export default function Comparison() {
  const comparisonData: ComparisonRow[] = [
    {
      feature: "Cost & Subscription",
      ours: "100% Free (Bring Your Own Key)",
      saas: "$9 – $29/month subscription",
      manual: "Free",
      highlight: true,
    },
    {
      feature: "Privacy & Data Security",
      ours: "Keys/transcripts stored 100% locally",
      saas: "Transcripts processed & saved on SaaS servers",
      manual: "Private (manual execution)",
      highlight: true,
    },
    {
      feature: "Speed",
      ours: "Instant (<10 seconds background processing)",
      saas: "Queued (depends on cloud queues & server loads)",
      manual: "Hours of listening & writing",
      highlight: false,
    },
    {
      feature: "API Control & Models",
      ours: "Direct control over Gemini APIs",
      saas: "Locked to provider's chosen model",
      manual: "Not applicable",
      highlight: false,
    },
    {
      feature: "Reliability & Downtime",
      ours: "Serverless (never down, runs on Google directly)",
      saas: "Frequent downtime / API request limitations",
      manual: "Not applicable",
      highlight: false,
    },
    {
      feature: "Output Customization",
      ours: "Formats instantly for YouTube Chapters description",
      saas: "Often requires copy-pasting & formatting cleanup",
      manual: "Custom but tedious",
      highlight: false,
    },
  ];

  return (
    <section id="comparison" className="py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="eyebrow-text">Comparative Grid</span>
          <h2 className="text-3xl font-bold sm:text-5xl text-movie-title text-slate-900 dark:text-white">
            How We Compare
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-base sm:text-lg">
            Unlike commercial SaaS solutions that lock you into monthly subscriptions, our extension runs entirely inside your browser using your direct connection to Google Gemini.
          </p>
        </div>

        {/* Table Wrapper with glass card and glowing border details */}
        <div className="overflow-x-auto rounded-2xl glow-border shadow-xl bg-white dark:bg-slate-900/40 glass-card">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50/50 dark:bg-slate-950/70 text-slate-700 dark:text-slate-350 border-b border-slate-200/80 dark:border-slate-800/80 font-bold">
              <tr>
                <th className="p-5 font-serif text-base">Feature</th>
                <th className="p-5 font-serif text-base text-red-650 dark:text-red-400 font-bold bg-red-50/20 dark:bg-red-950/10">YT VOD Timestamp (Ours)</th>
                <th className="p-5 font-serif text-base">Commercial AI Extensions</th>
                <th className="p-5 font-serif text-base">Manual Timing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-850/80 text-slate-600 dark:text-slate-350">
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/40 dark:hover:bg-slate-900/20 transition-colors"
                >
                  <td className="p-5 font-bold text-slate-900 dark:text-white font-serif">
                    {row.feature}
                  </td>
                  <td className="p-5 bg-red-50/10 dark:bg-red-950/5 font-semibold text-slate-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 font-extrabold text-base">✓</span>
                      {row.ours}
                    </div>
                  </td>
                  <td className="p-5 text-slate-500 dark:text-slate-450">
                    {row.saas}
                  </td>
                  <td className="p-5 text-slate-500 dark:text-slate-450">
                    {row.manual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-red-50/30 dark:bg-red-950/5 border border-red-100/40 dark:border-red-900/20 text-center max-w-2xl mx-auto backdrop-blur-md shadow-sm">
          <p className="text-xs text-red-800 dark:text-red-300 leading-normal">
            💡 <strong>Why BYOK?</strong> Google AI Studio offers a free tier for developers with very generous rate limits. Using your own API Key means you bypass middleman markup and enjoy fully private usage.
          </p>
        </div>
      </div>
    </section>
  );
}
