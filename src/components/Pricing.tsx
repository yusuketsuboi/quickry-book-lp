"use client";

import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const plans = [
  {
    name: "Free",
    description: "まずは無料で始める",
    monthly: "0",
    monthlyUnit: "円",
    highlight: true,
    badge: "RECOMMENDED",
  },
  {
    name: "Standard",
    description: "トレードが増えてきた店舗に",
    monthly: "4,980",
    monthlyUnit: "/月",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    description: "より本格的に活用したい店舗に",
    monthly: "14,980",
    monthlyUnit: "/月",
    highlight: false,
    badge: null,
  },
];

// 表の3行のみ（料率は出さない）
const rows = [
  { label: "月額", values: ["0円", "4,980円", "14,980円"], strong: true },
  { label: "初期費用", values: ["0円", "0円", "0円"], strong: false },
  { label: "通常予約・来店払い", values: ["0円", "0円", "0円"], strong: false },
];

const reasons = [
  {
    title: "持ち出しゼロ",
    body: "月額も初期費用もかからず、来店払いの通常予約は手数料0円。リスクなく始められます。",
  },
  {
    title: "既存システムと並行利用OK",
    body: "今お使いの予約システムをやめる必要はありません。気になる枠だけ任せられます。",
  },
  {
    title: "いつでも解約可（違約金なし）",
    body: "合わなければ、いつでもやめられます。違約金はありません。",
  },
];

export default function Pricing() {
  return (
    <section className="bg-bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-20 lg:px-0 lg:py-32">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="PRICING" title="料金プラン" />
        </div>

        {/* Plan cards (3 rows only) */}
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
                <p className="font-[family-name:var(--font-accent)] text-2xl font-extrabold text-text-primary">
                  {plan.name}
                </p>
                <p className="mt-1 text-sm text-text-muted">{plan.description}</p>

                <div className="mt-6 text-center">
                  <p className="flex items-baseline justify-center gap-1">
                    {plan.monthly !== "0" && (
                      <span className="text-sm text-text-muted">¥</span>
                    )}
                    <span className="font-[family-name:var(--font-accent)] text-5xl font-extrabold text-primary">
                      {plan.monthly}
                    </span>
                    <span className="text-base text-text-secondary">
                      {plan.monthlyUnit}
                    </span>
                  </p>
                </div>

                {/* 3 rows: 月額 / 初期費用 / 通常予約来店払い */}
                <div className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {rows.map((row, ri) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-text-muted">{row.label}</span>
                      <span
                        className={
                          row.strong
                            ? "font-bold text-text-primary"
                            : "font-semibold text-text-primary"
                        }
                      >
                        {row.values[plans.indexOf(plan)]}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#cta-section"
                  onClick={() =>
                    window.dataLayer?.push({
                      event: "cta_click",
                      cta_location: `pricing_${plan.name.toLowerCase()}`,
                    })
                  }
                  className={`mt-7 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors duration-300 ${
                    plan.highlight
                      ? "bg-accent text-white hover:bg-accent-dark"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  無料で話を聞いてみる
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 表直下の補足 + 注記 */}
        <p className="animate-on-scroll mx-auto mt-8 max-w-[700px] text-center text-sm leading-[1.8] text-text-secondary">
          Freeプランなら月額0円・初期費用0円。来店払いの通常予約は手数料0円です。
        </p>
        <div className="animate-on-scroll mx-auto mt-3 max-w-[700px] space-y-1 text-center text-xs leading-relaxed text-text-muted">
          <p>※4,980円・14,980円は税込価格です。</p>
          <p>
            ※事前決済プランの予約はキャンセルできません。出品（トレード）で別のお客様に枠を譲渡できます。
          </p>
        </div>

        {/* 店舗の費用について（定性） */}
        <div className="animate-on-scroll mx-auto mt-14 max-w-[760px] rounded-3xl bg-bg-gray p-8 lg:p-10">
          <h3 className="text-xl font-bold text-text-primary lg:text-2xl">
            店舗の費用について
          </h3>
          <p className="mt-5 text-sm leading-[1.9] text-text-secondary lg:text-base">
            Quickry Bookは成果報酬型です。お店の持ち出しはありません。
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "通常の予約管理（来店払い）── 手数料0円",
              "トレード・キャンセル料・割引で、お店が払うものはありません（持ち出しゼロ）",
              "新しく生まれた売上から、その一部を成果報酬としていただきます",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-[1.8] text-text-primary lg:text-base"
              >
                <Check
                  size={18}
                  strokeWidth={2.5}
                  className="mt-1 shrink-0 text-primary"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-[1.9] text-text-secondary lg:text-base">
            つまり、本来ゼロだったはずの売上が立ったときにだけ、費用が発生する仕組みです。
          </p>
          <p className="mt-4 text-xs text-text-muted">
            ※成果報酬の具体的な条件は、商談の際にお店ごとにご案内します。
          </p>
        </div>

        {/* Freeプランから始める3つの理由 */}
        <div className="animate-on-scroll mt-14">
          <h3 className="text-center text-xl font-bold text-text-primary lg:text-2xl">
            Freeプランから始める3つの理由
          </h3>
          <div className="mt-8 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm"
              >
                <span className="font-[family-name:var(--font-accent)] text-2xl font-extrabold text-primary/30">
                  0{i + 1}
                </span>
                <h4 className="mt-3 text-base font-bold text-text-primary lg:text-lg">
                  {reason.title}
                </h4>
                <p className="mt-2 text-sm leading-[1.8] text-text-secondary">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
