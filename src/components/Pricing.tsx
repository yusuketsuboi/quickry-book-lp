"use client";

import { Check, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const plans = [
  {
    name: "Free",
    description: "まずは無料で始める",
    monthly: "0",
    monthlyNote: "初期費用・月額ともに0円",
    storeShare: "25%",
    highlight: false,
    badge: null,
  },
  {
    name: "Standard",
    description: "トレードが増えてきた店舗に",
    monthly: "4,980",
    monthlyNote: "月額（税抜）",
    storeShare: "27.5%",
    highlight: true,
    badge: "RECOMMENDED",
  },
  {
    name: "Pro",
    description: "還元額を最大化したい店舗に",
    monthly: "14,980",
    monthlyNote: "月額（税抜）",
    storeShare: "30%",
    highlight: false,
    badge: null,
  },
];

const commonFeatures = [
  "予約管理",
  "顧客管理",
  "リマインド通知",
  "トレードマーケット",
  "キャンセル料回収代行",
  "かかりつけ機能",
  "スタッフ管理",
  "売上レポート",
];

export default function Pricing() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="PRICING" title="シンプルな料金体系" />
        </div>

        <p className="animate-on-scroll mx-auto mt-4 max-w-[640px] text-center text-sm leading-[1.8] text-text-secondary">
          使える機能は全プラン共通。違いは<span className="font-bold text-primary">月額</span>と<span className="font-bold text-primary">店舗への還元率</span>。
          <br className="hidden lg:block" />
          トレードが増えてきたら上位プランに切り替えるほどお得になります。
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`animate-on-scroll relative overflow-hidden rounded-3xl bg-white shadow-sm ${
                plan.highlight
                  ? "ring-2 ring-primary lg:scale-105"
                  : "border border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute left-0 right-0 top-0 bg-primary py-2 text-center text-xs font-bold tracking-wider text-white">
                  {plan.badge}
                </div>
              )}

              <div className={`px-8 ${plan.badge ? "pt-14" : "pt-8"} pb-8`}>
                {/* Plan name */}
                <p className="font-[family-name:var(--font-accent)] text-2xl font-extrabold text-text-primary">
                  {plan.name}
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  {plan.description}
                </p>

                {/* Monthly price */}
                <div className="mt-6 text-center">
                  <p className="flex items-baseline justify-center gap-1">
                    {plan.monthly !== "0" && (
                      <span className="text-sm text-text-muted">¥</span>
                    )}
                    <span className="font-[family-name:var(--font-accent)] text-5xl font-extrabold text-primary">
                      {plan.monthly}
                    </span>
                    {plan.monthly === "0" ? (
                      <span className="text-base text-text-secondary">円</span>
                    ) : (
                      <span className="text-sm text-text-muted">/月</span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    {plan.monthlyNote}
                  </p>
                </div>

                {/* Store share */}
                <div className="mt-6 rounded-2xl bg-amber-50 p-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp
                      size={16}
                      strokeWidth={2.2}
                      className="text-amber-600"
                    />
                    <p className="text-xs font-semibold text-amber-900">
                      トレード成立時の店舗への還元率
                    </p>
                  </div>
                  <p className="mt-2 font-[family-name:var(--font-accent)] text-3xl font-extrabold text-amber-700">
                    {plan.storeShare}
                  </p>
                  <p className="mt-1 text-[11px] text-amber-800/70">
                    トレード価格に対する店舗還元率
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#cta-section"
                  onClick={() =>
                    window.dataLayer?.push({
                      event: "cta_click",
                      cta_location: `pricing_${plan.name.toLowerCase()}`,
                    })
                  }
                  className={`mt-6 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors duration-300 ${
                    plan.highlight
                      ? "bg-accent text-white hover:bg-accent-dark"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  初期パートナーに申し込む（無料）
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Common features */}
        <div className="animate-on-scroll mt-10 rounded-3xl bg-white p-6 shadow-sm lg:p-8">
          <p className="text-center text-xs font-semibold tracking-wider text-text-muted">
            全プラン共通で使える機能
          </p>
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-4">
            {commonFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 text-primary"
                />
                <span className="text-sm text-text-primary">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="animate-on-scroll mx-auto mt-6 max-w-[700px] text-center text-xs leading-relaxed text-text-muted">
          ※ 通常の予約管理は完全無料でお使いいただけます<br />
          ※ プランは月次で変更可能。上位プランほどトレード手数料が低く、店舗還元率が上がります<br />
          ※ 初期パートナー店舗は手数料優遇あり（要相談）
        </p>
      </div>
    </section>
  );
}
