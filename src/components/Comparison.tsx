import SectionHeading from "./SectionHeading";

/**
 * LP限定 類型比較セクション（S10とS11の間）
 * 原稿 v4.2 LP版構成に準拠。競合社名・ロゴ・スクショ禁止。全て「〜の傾向があります」化。
 */
const types = [
  {
    label: "① 集客プラットフォーム型",
    body: "集客力に強みがある一方、掲載費が継続的に発生する傾向があります。新規のお客様との接点づくりを外部に任せたいお店に向いている傾向があります。",
    range: "月額レンジ: 数万円〜（プラン・地域・店舗規模により異なる傾向があります）",
    feature: "特徴: 新規集客の窓口になりやすい傾向。",
    highlight: false,
  },
  {
    label: "② 予約システム単機能型",
    body: "予約管理に特化し、比較的低コストで導入できる傾向があります。集客やキャンセル枠の活用は、別の手段で補う必要がある傾向があります。",
    range: "月額レンジ: 無料〜数千円程度（提供形態により異なる傾向があります）",
    feature: "特徴: 予約の受付・管理がシンプルにできる傾向。",
    highlight: false,
  },
  {
    label: "③ Quickry Book",
    body: "通常予約はほぼ無料で使え、キャンセル枠を新しいお客様に届ける仕組みを備えています。集客と予約管理を、持ち出しを抑えながら両立したいお店に向いている傾向があります。",
    range: "月額レンジ: 0円〜（Freeプランの場合）",
    feature:
      "特徴: 通常予約はほぼ無料 ／ 予約枠トレード（特許出願中） ／ 店舗の持ち出しゼロ。",
    highlight: true,
  },
];

const differentiators = [
  "通常予約はほぼ無料",
  "予約枠トレード（特許出願中・特願2024-139465）",
  "店舗の持ち出しゼロ",
];

export default function Comparison() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[1080px] px-5 py-20 lg:px-0 lg:py-32">
        <div className="animate-on-scroll">
          <SectionHeading
            subLabel="COMPARISON"
            title="3つの選択肢から、自分に合うものを選ぶ"
          />
        </div>

        <p className="animate-on-scroll mx-auto mt-6 max-w-[680px] text-center text-sm leading-[1.9] text-text-secondary lg:text-base">
          予約まわりの仕組みには、大きく分けて三つの考え方があります。どれが良い・悪いではなく、お店の課題に合うものを選ぶための整理です。
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {types.map((type, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} rounded-3xl p-7 lg:p-8 ${
                type.highlight
                  ? "bg-white shadow-md ring-2 ring-primary"
                  : "border border-border bg-white shadow-sm"
              }`}
            >
              <h3
                className={`text-base font-bold leading-[1.5] lg:text-lg ${
                  type.highlight ? "text-primary" : "text-text-primary"
                }`}
              >
                {type.label}
              </h3>
              <p className="mt-4 text-sm leading-[1.9] text-text-secondary">
                {type.body}
              </p>
              <div className="mt-5 space-y-2 border-t border-border pt-4">
                <p className="text-xs leading-[1.7] text-text-muted">
                  {type.range}
                </p>
                <p className="text-xs leading-[1.7] text-text-secondary">
                  {type.feature}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 差別化3点 */}
        <div className="animate-on-scroll mx-auto mt-12 max-w-[760px] rounded-3xl bg-primary p-8 text-center lg:p-10">
          <p className="text-base font-bold text-white lg:text-lg">
            Quickry Book が大切にしている3つのこと
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 lg:flex-row lg:justify-center lg:gap-4">
            {differentiators.map((d) => (
              <span
                key={d}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
