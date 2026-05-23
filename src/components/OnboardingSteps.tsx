import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

/**
 * S11 Founding Customer 20社限定特典 + 導入フロー
 * 原稿 v4.2 LP版構成に準拠。料率の数字は出さない。「永久バッジ」表現禁止。
 * 残り社数・更新日はテンプレート（月次でCPO/高野CSO更新）。
 */
const benefits = [
  {
    title: "特別な条件",
    body: "早期にご参加いただく店舗だけの特別な条件をご用意します。",
  },
  {
    title: "Founding Customerバッジ",
    body: "店舗ページに表示します（※サービス継続中・契約継続を条件）。",
  },
  {
    title: "専任サポート",
    body: "立ち上げから運用まで、担当者が伴走します。",
  },
  {
    title: "要望優先",
    body: "機能改善のご要望を優先的に検討します。",
  },
  {
    title: "ロゴ掲載",
    body: "ご同意いただいた店舗を、当社サイト等でご紹介します。",
  },
  {
    title: "事例化還元",
    body: "導入事例としてご協力いただいた場合の還元をご用意します。",
  },
];

const flow = [
  { title: "問い合わせ", body: "まずは気軽にご相談ください。" },
  { title: "契約", body: "内容にご納得いただいたうえで契約します。" },
  { title: "設定", body: "担当者が初期設定をサポートします。" },
  { title: "利用開始", body: "通常の予約管理から、無理なく始められます。" },
];

export default function OnboardingSteps() {
  return (
    <section className="bg-bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-20 lg:px-0 lg:py-32">
        <div className="animate-on-scroll text-center">
          {/* Founding Customer badge */}
          <span className="inline-block rounded-full bg-accent/10 px-5 py-2 text-sm font-bold text-accent">
            β版 Founding Customer 20社限定（残り○社／更新日: ○月○日）
          </span>
        </div>

        <div className="animate-on-scroll mt-6">
          <SectionHeading
            subLabel="FOUNDING CUSTOMER"
            title="最初の20社を、お迎えします"
          />
        </div>

        <p className="animate-on-scroll mx-auto mt-6 max-w-[680px] text-center text-sm leading-[1.9] text-text-secondary lg:text-base">
          サービスを一緒に育ててくださる最初の20社を、Founding
          Customerとしてお迎えします。早期にご参加いただくお店だけの特典をご用意しました。
        </p>

        {/* 特典6項目 */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Check size={16} strokeWidth={2.5} />
              </span>
              <div>
                <p className="text-base font-bold text-text-primary">
                  {i + 1}. {b.title}
                </p>
                <p className="mt-1.5 text-sm leading-[1.8] text-text-secondary">
                  {b.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 導入フロー4ステップ */}
        <div className="animate-on-scroll mt-16">
          <h3 className="text-center text-xl font-bold text-text-primary lg:text-2xl">
            導入フロー
          </h3>
          <div className="mx-auto mt-10 max-w-[640px]">
            {flow.map((step, i) => (
              <div key={step.title} className="relative flex gap-4 lg:gap-6">
                <div className="relative flex flex-col items-center">
                  <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-[family-name:var(--font-accent)] text-base font-bold text-white">
                    {i + 1}
                  </div>
                  {i < flow.length - 1 && (
                    <div className="absolute top-10 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-primary/20" />
                  )}
                </div>
                <div className={i < flow.length - 1 ? "pb-8" : "pb-0"}>
                  <h4 className="text-base font-bold text-text-primary lg:text-lg">
                    STEP {i + 1}　{step.title}
                  </h4>
                  <p className="mt-1 text-sm leading-[1.8] text-text-secondary">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
