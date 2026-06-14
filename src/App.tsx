/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import PipelineVisualizer from "./components/PipelineVisualizer";
import InteractiveDemo from "./components/InteractiveDemo";
import HowItWorks from "./components/HowItWorks";
import Downloads from "./components/Downloads";
import PhilosophyFuture from "./components/PhilosophyFuture";
import Footer from "./components/Footer";

export default function App() {
  // Simple functional smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navbarOffset = 70; // rough height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-beige text-brand-slate selection:bg-brand-slate selection:text-brand-beige font-sans">
      
      {/* Top Fixed Header component */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* Main Structural scroll content blocks */}
      <main className="relative">
        {/* 1. Hero Block */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* 2. Failure diagnostics details */}
        <Problem />

        {/* 3. Operational pipeline system illustration */}
        <PipelineVisualizer />

        {/* 4. Memorable Mind experiment demo */}
        <InteractiveDemo />

        {/* 5. Instruction workflow integration */}
        <HowItWorks onScrollToSection={handleScrollToSection} />

        {/* 6. Active code previews sandbox */}
        <Downloads />

        {/* 7. Realistic horizon timelines */}
        <PhilosophyFuture />
      </main>

      {/* Static Footer */}
      <Footer />

    </div>
  );
}
