"use client";

import Image from "next/image";

const trustBadges = [
  "特許出願中（特願2024-139465）",
  "横浜市助成採択",
  "ものづくり補助金採択",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle decorative blur */}
      <div className="pointer-events-none absolute right-0 top-0 w-1/2 opacity-15">
        <Image
          src="/blur.webp"
          alt=""
          width={640}
          height={640}
          className="h-auto w-full"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-[860px] px-5 pt-24 pb-20 text-center lg:pt-36 lg:pb-28">
        {/* Issue line */}
        <p className="font-[family-name:var(--font-accent)] text-xs tracking-[3px] text-text-muted">
          2026.05 ISSUE
        </p>

        {/* Special feature logo */}
        <p className="mt-5 font-[family-name:var(--font-accent)] text-[11px] font-semibold tracking-[2px] text-primary lg:text-xs">
          SPECIAL FEATURE ― 予約枠の、新しい話
        </p>

        {/* Main catch */}
        <h1 className="mt-6 text-[34px] font-extrabold leading-[1.25] tracking-tight text-text-primary lg:text-[60px]">
          キャンセル枠が、
          <br className="lg:hidden" />
          明日の売上になる。
        </h1>

        {/* Sub copy */}
        <p className="mt-6 text-base leading-[1.9] text-text-secondary lg:text-xl">
          月額0円から始める、新しい予約管理。
        </p>

        {/* Tagline */}
        <p className="mt-3 text-sm tracking-[1px] text-text-muted lg:text-base">
          予約枠のマーケットプレイス。
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            id="hero-cta"
            href="#cta-section"
            onClick={() =>
              window.dataLayer?.push({
                event: "cta_click",
                cta_location: "hero",
              })
            }
            className="inline-block w-full rounded-full bg-accent px-10 py-4 text-center text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg active:translate-y-0 lg:w-auto lg:min-w-[300px]"
          >
            無料で話を聞いてみる
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-text-muted lg:text-sm">
          {trustBadges.map((badge, i) => (
            <span key={badge} className="flex items-center gap-x-5">
              {i > 0 && (
                <span className="hidden text-border lg:inline" aria-hidden="true">
                  /
                </span>
              )}
              <span>{badge}</span>
            </span>
          ))}
        </div>

        {/* Launch badge */}
        <div className="mt-6">
          <span className="inline-block rounded-full border border-border bg-bg-gray px-4 py-1.5 text-xs font-medium text-text-secondary">
            2026年5月　Phase A クローズドローンチ
          </span>
        </div>

        {/* Service material note (ステマ規制対応) */}
        <p className="mt-8 text-[11px] tracking-wider text-text-muted">
          Quickry株式会社 サービス資料
        </p>
      </div>
    </section>
  );
}
