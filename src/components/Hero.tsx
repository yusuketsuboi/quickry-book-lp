"use client";

import Image from "next/image";
import { Calendar, ArrowLeftRight, User, CheckCircle2 } from "lucide-react";

const badges = ["日本初の予約枠トレード", "ものづくり補助金 採択", "特許出願中"];

const industries = [
  "美容室",
  "ネイルサロン",
  "クリニック・歯科",
  "飲食店",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle decorative blur */}
      <div className="pointer-events-none absolute right-0 top-0 w-1/2 opacity-20">
        <Image
          src="/blur.webp"
          alt=""
          width={640}
          height={640}
          className="h-auto w-full"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-[1080px] px-5 pt-20 pb-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-0 lg:pt-30 lg:pb-20">
        {/* Left column */}
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 text-xs font-semibold text-primary"
              >
                <CheckCircle2 size={14} strokeWidth={2.2} />
                {badge}
              </span>
            ))}
          </div>

          <h1 className="mb-4 text-[32px] font-extrabold leading-[1.2] text-text-primary lg:text-[56px]">
            予約枠で、稼ぐ。
          </h1>

          <p className="mb-6 text-base leading-[1.8] text-text-secondary lg:text-lg">
            キャンセルされる予約枠が、別のお客様に渡って売上に。
            <br />
            日本初の予約枠マーケットプレイス「Quickry Book」。
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="inline-block rounded-full border border-border bg-bg-gray px-3 py-1.5 text-xs font-medium text-text-secondary"
              >
                {industry}
              </span>
            ))}
          </div>

          <a
            id="hero-cta"
            href="#cta-section"
            onClick={() =>
              window.dataLayer?.push({
                event: "cta_click",
                cta_location: "hero",
              })
            }
            className="block w-full rounded-full bg-accent px-8 py-4 text-center text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg active:translate-y-0 lg:inline-block lg:w-auto lg:min-w-[280px]"
          >
            初期パートナーに申し込む（無料）
          </a>
        </div>

        {/* Right column - Abstract concept illustration */}
        <div className="mt-12 flex justify-center lg:mt-0">
          <div className="relative w-full max-w-[420px]">
            {/* Central calendar card */}
            <div className="relative z-20 mx-auto w-[240px] rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Calendar size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs text-text-muted">予約枠</p>
                  <p className="text-sm font-bold text-text-primary">
                    4/15（水）14:00
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { label: "カット", price: "¥5,500" },
                  { label: "カラー", price: "¥8,800" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between rounded-lg bg-bg-light px-3 py-2 text-xs"
                  >
                    <span className="text-text-secondary">{m.label}</span>
                    <span className="font-semibold text-text-primary">
                      {m.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg bg-accent/10 px-3 py-2 text-center">
                <p className="text-xs font-bold text-accent">TRADE OK</p>
              </div>
            </div>

            {/* Left floating user card */}
            <div className="absolute -left-4 top-8 z-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5 lg:-left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <User size={20} strokeWidth={1.8} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-text-muted">出品</p>
                <p className="text-xs font-bold text-text-primary">
                  お客様 A
                </p>
              </div>
            </div>

            {/* Right floating user card */}
            <div className="absolute -right-4 bottom-8 z-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-black/5 lg:-right-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <User size={20} strokeWidth={1.8} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-text-muted">購入</p>
                <p className="text-xs font-bold text-text-primary">
                  お客様 B
                </p>
              </div>
            </div>

            {/* Trade badge */}
            <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-[10px] font-bold text-white shadow-lg">
              <ArrowLeftRight size={12} strokeWidth={2.5} />
              TRADE
            </div>

            {/* Background decorative circles */}
            <div className="absolute -top-4 left-1/4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-4 right-1/4 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
