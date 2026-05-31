"use client";

import { useEffect } from "react";

// 案B スクロール・リビール（モックの .rv → .in 付与ロジックを移植）。
// prefers-reduced-motion: reduce のときは即 .in を付与（CSS側でも transition 無効化済）。
export default function ScrollAnimator() {
  useEffect(() => {
    const targets = document.querySelectorAll(".rv");

    // モーション抑制設定なら即表示してobserverを張らない
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
