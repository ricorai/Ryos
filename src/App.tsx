/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
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
import WaterRipple from "./components/WaterRipple";
import Privacy from "./components/Privacy";

type Route = "home" | "privacy";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const getRouteFromLocation = (): Route => {
  const path = window.location.pathname;
  const localPath = basePath && path.startsWith(basePath) ? path.slice(basePath.length) || "/" : path;

  return localPath === "/privacy" ? "privacy" : "home";
};

export default function App() {
  const [route, setRoute] = useState<Route>(getRouteFromLocation);

  useEffect(() => {
    const handlePopState = () => setRoute(getRouteFromLocation());

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (route !== "home" || !window.location.hash) return;

    const sectionId = window.location.hash.slice(1);
    window.requestAnimationFrame(() => scrollToSection(sectionId));
  }, [route]);

  const navigateToPath = (path: "/" | "/privacy") => {
    const targetPath = `${basePath}${path === "/" ? "/" : path}`;

    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, "", targetPath);
    }

    setRoute(getRouteFromLocation());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
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

  // Simple functional smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    if (route !== "home") {
      window.history.pushState(null, "", `${basePath}/#${sectionId}`);
      setRoute("home");
      window.requestAnimationFrame(() => scrollToSection(sectionId));
      return;
    }

    scrollToSection(sectionId);
  };

  return (
    <div className="relative min-h-screen bg-brand-beige text-brand-slate selection:bg-brand-slate selection:text-brand-beige font-sans">
      <WaterRipple />
      <Cursor />

      <Navbar onScrollToSection={handleScrollToSection} onNavigateToPath={navigateToPath} />

      {route === "home" ? (
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
      ) : (
        <Privacy />
      )}

      <Footer onNavigateToPath={navigateToPath} />

    </div>
  );
}
