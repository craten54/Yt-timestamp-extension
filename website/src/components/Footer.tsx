"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                YT VOD Timestamp Generator
              </span>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
              &copy; {currentYear} Open Source Project. Under MIT License.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
            <a href="#features" className="hover:text-slate-800 dark:hover:text-white transition-colors">Features</a>
            <a href="#demo" className="hover:text-slate-800 dark:hover:text-white transition-colors">Simulator</a>
            <a href="#comparison" className="hover:text-slate-800 dark:hover:text-white transition-colors">Comparison</a>
            <a href="#guide" className="hover:text-slate-800 dark:hover:text-white transition-colors">Setup</a>
            <a href="/privacy" className="hover:text-slate-800 dark:hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

        {/* Disclaimer row */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 text-center text-[10px] text-slate-450 dark:text-slate-650 leading-relaxed max-w-4xl mx-auto">
          Disclaimer: This extension and landing page are independent open-source developments. They are not affiliated with, authorized, sponsored, endorsed, or in any way associated with Google LLC, YouTube, or parent company Alphabet Inc. &ldquo;YouTube&rdquo; and &ldquo;Gemini&rdquo; are trademarks of their respective owners.
        </div>
      </div>
    </footer>
  );
}
