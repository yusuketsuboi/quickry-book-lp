"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    // GTM event: CTA click (floating)
    window.dataLayer?.push({
      event: "cta_click",
      cta_location: "floating",
    });

    const formSection = document.getElementById("cta-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-100 border-t border-border bg-white/95 backdrop-blur-[12px] transition-transform duration-300 ease-in-out lg:left-auto lg:right-8 lg:bottom-8 lg:border-t-0 lg:rounded-2xl ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ boxShadow: "0 -4px 16px rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-center justify-center px-5 py-3">
        <button
          onClick={scrollToForm}
          className="w-full max-w-[400px] cursor-pointer rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg active:translate-y-0 lg:max-w-[320px]"
        >
          無料で話を聞いてみる
        </button>
      </div>
    </div>
  );
}
