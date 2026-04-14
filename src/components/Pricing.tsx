"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";

const features = [
  "予約管理機能",
  "顧客管理機能",
  "リマインド通知",
  "トレードマーケット",
  "売上レポート",
];

export default function Pricing() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="PRICING" title="シンプルな料金体系" />
        </div>

        <div className="animate-on-scroll mx-auto mt-12 max-w-[560px] overflow-hidden rounded-3xl bg-white shadow-sm">
          {/* Header */}
          <div className="bg-primary px-10 py-6 text-center">
            <p className="text-sm font-semibold text-white/80">
              Quickry Book
            </p>
            <p className="mt-1 text-lg font-bold text-white">
              完全成果報酬プラン
            </p>
          </div>

          <div className="p-10">
            {/* Free fees */}
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="rounded-2xl bg-[#F0F8FF] p-5 text-center">
                <p className="text-sm text-text-muted">初期費用</p>
                <p className="mt-1">
                  <span className="font-[family-name:var(--font-accent)] text-5xl font-extrabold text-primary">
                    0
                  </span>
                  <span className="text-base text-text-secondary">円</span>
                </p>
              </div>
              <div className="rounded-2xl bg-[#F0F8FF] p-5 text-center">
                <p className="text-sm text-text-muted">月額費用</p>
                <p className="mt-1">
                  <span className="font-[family-name:var(--font-accent)] text-5xl font-extrabold text-primary">
                    0
                  </span>
                  <span className="text-base text-text-secondary">円</span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-border" />

            {/* Commission */}
            <div className="text-center">
              <p className="text-sm text-text-muted">手数料</p>
              <p className="mt-2 text-text-primary">
                <span className="font-[family-name:var(--font-accent)] text-3xl font-extrabold">
                  トレード価格の40%
                </span>
              </p>
              <p className="mt-1 text-sm text-text-muted">
                トレード成立時のみ
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-border" />

            {/* Feature list */}
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Image
                    src="/icon_check_blue.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-text-primary">{feature}</span>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="mt-6 text-left text-xs leading-relaxed text-text-muted">
              <p>※ 通常の予約機能は完全無料でお使いいただけます</p>
              <p>※ 初期パートナー店舗は手数料優遇あり（要相談）</p>
            </div>

            {/* Secondary CTA */}
            <div className="mt-6 text-center">
              <a
                href="#cta-section"
                onClick={() =>
                  window.dataLayer?.push({
                    event: "cta_click",
                    cta_location: "pricing",
                  })
                }
                className="inline-block rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                詳しく聞いてみる
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
