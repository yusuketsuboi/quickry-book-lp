import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: 1,
    emoji: "📅",
    title: "お客様が予約を取る",
    description: "通常通りの予約フロー",
  },
  {
    number: 2,
    emoji: "📤",
    title: "行けなくなったら出品",
    description: "お客様がアプリから簡単出品",
  },
  {
    number: 3,
    emoji: "🤝",
    title: "別のお客様がトレード",
    description: "あなたの予約枠は埋まる",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="HOW IT WORKS" title="かんたん3ステップ" />
        </div>

        <div className="relative mt-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-center lg:gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-0">
              <div
                className={`animate-on-scroll stagger-${i + 1} w-full rounded-2xl bg-white p-8 text-center shadow-sm lg:w-[280px]`}
              >
                {/* Step number */}
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-[family-name:var(--font-accent)] text-base font-bold text-white">
                  {step.number}
                </div>

                {/* Emoji icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F8FF] text-3xl">
                  {step.emoji}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>

              {/* Arrow (between cards) */}
              {i < steps.length - 1 && (
                <div className="hidden text-2xl text-primary/40 lg:mt-6 lg:block lg:px-2">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="animate-on-scroll mt-8 text-center">
          <span className="inline-block rounded-full bg-primary-light px-5 py-3 text-sm text-text-muted">
            お店側の操作は不要。自動で埋まります。
          </span>
        </div>
      </div>
    </section>
  );
}
