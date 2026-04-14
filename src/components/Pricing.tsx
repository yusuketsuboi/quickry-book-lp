"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";

const plans = [
  {
    name: "Free",
    description: "まずは無料で始める",
    tradeFee: "50%",
    discountFee: "20%",
    cancelFee: "30%",
    paymentFee: "5%",
    highlight: false,
  },
  {
    name: "Standard",
    description: "成長する店舗におすすめ",
    tradeFee: "45%",
    discountFee: "15%",
    cancelFee: "25%",
    paymentFee: "4.5%",
    highlight: true,
  },
  {
    name: "Pro",
    description: "手数料を最小限に",
    tradeFee: "40%",
    discountFee: "10%",
    cancelFee: "20%",
    paymentFee: "4%",
    highlight: false,
  },
];

const commonFeatures = [
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

        <p className="mx-auto mt-4 max-w-[600px] text-center text-sm text-text-muted">
          全プラン初期費用・月額費用 <span className="font-bold text-primary">0円</span>。手数料は成果報酬のみ。
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`animate-on-scroll overflow-hidden rounded-3xl bg-white shadow-sm ${
                plan.highlight
                  ? "ring-2 ring-primary lg:scale-105"
                  : "border border-border"
              }`}
            >
              {/* Header */}
              <div
                className={`px-8 py-6 text-center ${
                  plan.highlight ? "bg-primary" : "bg-bg-gray"
                }`}
              >
                {plan.highlight && (
                  <p className="mb-1 text-xs font-semibold text-white/80">
                    RECOMMENDED
                  </p>
                )}
                <p
                  className={`font-[family-name:var(--font-accent)] text-2xl font-extrabold ${
                    plan.highlight ? "text-white" : "text-text-primary"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlight ? "text-white/80" : "text-text-muted"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="p-8">
                {/* Monthly price */}
                <div className="text-center">
                  <p className="text-sm text-text-muted">初期費用・月額</p>
                  <p className="mt-1">
                    <span className="font-[family-name:var(--font-accent)] text-4xl font-extrabold text-primary">
                      0
                    </span>
                    <span className="text-base text-text-secondary">円</span>
                  </p>
                </div>

                <div className="my-5 h-px bg-border" />

                {/* Fee table */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">トレード手数料</span>
                    <span className="font-[family-name:var(--font-accent)] font-bold text-text-primary">
                      {plan.tradeFee}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">割引利用手数料</span>
                    <span className="font-[family-name:var(--font-accent)] font-bold text-text-primary">
                      {plan.discountFee}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">キャンセル料回収</span>
                    <span className="font-[family-name:var(--font-accent)] font-bold text-text-primary">
                      {plan.cancelFee}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">事前決済手数料</span>
                    <span className="font-[family-name:var(--font-accent)] font-bold text-text-primary">
                      {plan.paymentFee}
                    </span>
                  </div>
                </div>

                <div className="my-5 h-px bg-border" />

                {/* Common features */}
                <div className="space-y-3">
                  {commonFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Image
                        src="/icon_check_blue.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-text-primary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 text-center">
                  <a
                    href="#cta-section"
                    onClick={() =>
                      window.dataLayer?.push({
                        event: "cta_click",
                        cta_location: `pricing_${plan.name.toLowerCase()}`,
                      })
                    }
                    className={`inline-block w-full rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                      plan.highlight
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    事前登録する（無料）
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mx-auto mt-8 max-w-[700px] text-center text-xs leading-relaxed text-text-muted">
          <p>※ Stripe決済手数料（3.6%）はプラットフォーム手数料に内包されています</p>
          <p>※ 通常予約機能は全プラン完全無料でお使いいただけます</p>
          <p>※ 初期パートナー店舗は手数料優遇あり（要相談）</p>
        </div>
      </div>
    </section>
  );
}
