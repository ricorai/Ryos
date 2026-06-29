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
import Cursor from "./components/Cursor";
import Marquee from "./components/Marquee";

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
      <Cursor />

      <Navbar onScrollToSection={handleScrollToSection} />

      <main className="relative">
        <Hero onScrollToSection={handleScrollToSection} />

        <Marquee />

        <Problem />

        <PipelineVisualizer />

        <Marquee reverse speed={40} />

        <InteractiveDemo />

        <HowItWorks onScrollToSection={handleScrollToSection} />

        <Downloads />

        <PhilosophyFuture />
      </main>

      <Footer />

    </div>
  );
}
