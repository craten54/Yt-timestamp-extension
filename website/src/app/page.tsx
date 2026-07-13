"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ExtensionDemo from "@/components/ExtensionDemo";
import Comparison from "@/components/Comparison";
import SetupGuide from "@/components/SetupGuide";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ExtensionDemo />
        <Comparison />
        <SetupGuide />
      </main>
      <Footer />
    </>
  );
}
