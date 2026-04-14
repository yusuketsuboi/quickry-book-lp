import SectionHeading from "./SectionHeading";

const benefits = [
  {
    emoji: "💰",
    accent: "bg-amber-50",
    title: "キャンセル損失がゼロに",
    description:
      "空いた枠が別のお客様で埋まる。さらにトレード手数料の50%が店舗の収益に。",
  },
  {
    emoji: "👥",
    accent: "bg-blue-50",
    title: "新規顧客が自然に来る",
    description:
      "トレードで予約を受け取ったお客様は新規顧客。広告費ゼロで新しいお客様と出会えます。",
  },
  {
    emoji: "🆓",
    accent: "bg-green-50",
    title: "初期費用・月額費用ゼロ",
    description:
      "トレード成立時だけ手数料が発生する完全成果報酬型。リスクなしで始められます。",
  },
];

export default function Benefits() {
  return (
    <section className="bg-bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading
            subLabel="BENEFITS"
            title="店舗オーナーに選ばれる3つの理由"
          />
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${benefit.accent} text-3xl`}
              >
                {benefit.emoji}
              </div>

              <p className="mt-5 font-[family-name:var(--font-accent)] text-xs font-bold tracking-wider text-accent">
                MERIT 0{i + 1}
              </p>
              <h3 className="mt-2 text-xl font-bold text-text-primary">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-text-secondary">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
