"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-8 transition-colors duration-300">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-500 dark:to-orange-400">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
            Last Updated: July 14, 2026
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-400 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction</h2>
            <p>
              We value your privacy. The <strong>YT VOD Timestamp Generator</strong> Chrome Extension is designed as an open-source, serverless tool. This Privacy Policy details how we handle user keys, transcripts, and settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Data Collection & Processing</h2>
            <p>
              Our extension operates entirely client-side.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>No Developer Servers:</strong> We do not host any remote databases, analytics platforms, or API proxies. Your information is never sent to us or any developer endpoints.
              </li>
              <li>
                <strong>Gemini API Key:</strong> Your Google Gemini API Key is stored locally in your browser&apos;s isolated secure cache via <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">chrome.storage.local</code>. It is sent directly to Google&apos;s official Gemini API endpoints to authorize and process text-summarization.
              </li>
              <li>
                <strong>Video Transcripts:</strong> Video transcript text is extracted on-the-fly when you run the extension and passed to the Gemini API. Once processed, a local <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">.txt</code> download is generated. No transcripts or browsing activities are saved permanently or tracked.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Third-Party Services</h2>
            <p>
              By using your personal Gemini API key, you interface directly with Google LLC. Your data interactions are subject to Google AI Studio Terms of Service and Google Developer API Policies. We are not responsible for how Google processes data under your account key.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Chrome Permissions</h2>
            <p>
              The extension requests minimal permissions to operate correctly:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">activeTab</code> &amp; <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">scripting</code>: Used to access the active tab and extract video metadata and captions directly.
              </li>
              <li>
                <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">downloads</code>: Used to save the final structured timestamps to your local Downloads folder.
              </li>
              <li>
                <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">storage</code>: Used to keep your API key saved in Chrome storage local.
              </li>
              <li>
                <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">host_permissions</code> (<code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">https://*.youtube.com/*</code>): Required to query video details and process transcripts directly on YouTube.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally to reflect extension modifications. Updates will be posted directly on this page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Contact</h2>
            <p>
              For security reviews, code audits, or questions, please open an issue in the official GitHub repository.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
