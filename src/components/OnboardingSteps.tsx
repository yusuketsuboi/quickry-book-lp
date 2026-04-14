import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: 1,
    title: "お問い合わせ",
    description:
      "このページのフォームから、お気軽にご連絡ください。担当者が1営業日以内にご返信します。",
  },
  {
    number: 2,
    title: "オンライン説明（15分）",
    description:
      "Quickry Bookの仕組みをわかりやすくご説明します。ご不明点はなんでもお聞きください。",
    note: "無理な勧誘は一切いたしません",
    badge: "15分",
  },
  {
    number: 3,
    title: "アカウント設定",
    description:
      "メニューと営業時間を登録するだけ。専任スタッフがサポートしますので、ご安心ください。",
    badge: "最短10分",
  },
  {
    number: 4,
    title: "利用開始",
    description:
      "設定完了後、すぐにご利用いただけます。運用中のサポートも無料です。",
  },
];

export default function OnboardingSteps() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading
            subLabel="ONBOARDING"
            title="最短10分で始められます"
          />
        </div>

        <div className="mx-auto mt-12 max-w-[640px]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll stagger-${i + 1} relative flex gap-4 lg:gap-6`}
            >
              {/* Left: Number + Vertical line */}
              <div className="relative flex flex-col items-center">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-[family-name:var(--font-accent)] text-base font-bold text-white">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute top-10 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-primary/20" />
                )}
              </div>

              {/* Right: Text content */}
              <div className={i < steps.length - 1 ? "pb-8" : "pb-0"}>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-text-primary lg:text-lg">
                    {step.title}
                  </h3>
                  {step.badge && (
                    <span className="inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                      {step.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-[1.8] text-text-secondary">
                  {step.description}
                </p>
                {step.note && (
                  <div className="mt-2 inline-block rounded-xl bg-amber-50 px-4 py-2.5">
                    <p className="text-xs font-semibold text-amber-700">
                      {step.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
