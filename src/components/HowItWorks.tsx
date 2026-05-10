import { CalendarCheck, Upload, HandCoins } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: 1,
    Icon: CalendarCheck,
    title: "お客様が予約を取る",
    description: "通常通りの予約フロー。普段の予約管理と何も変わりません。",
  },
  {
    number: 2,
    Icon: Upload,
    title: "行けなくなったら、予約枠を出品",
    description: "お客様がアプリから1タップで出品。あなたに連絡する必要はありません。",
  },
  {
    number: 3,
    Icon: HandCoins,
    title: "別のお客様がトレードで購入",
    description: "別のお客様が予約枠を引き継ぎ、あなたのお店に来店。売上ゼロになるはずだった枠から収益が発生します。",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="HOW IT WORKS" title="かんたん3ステップ" />
        </div>

        {/* Timeline layout */}
        <div className="mx-auto mt-14 max-w-[720px]">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-primary/15 lg:left-[31px]" />

            <div className="space-y-10">
              {steps.map((step, i) => {
                const { Icon } = step;
                return (
                  <div
                    key={step.number}
                    className={`animate-on-scroll stagger-${i + 1} relative flex gap-5 lg:gap-8`}
                  >
                    {/* Step indicator */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md lg:h-16 lg:w-16">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent font-[family-name:var(--font-accent)] text-[11px] font-bold text-white shadow-sm lg:h-7 lg:w-7 lg:text-xs">
                        {step.number}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 rounded-2xl bg-white p-5 shadow-sm lg:p-6">
                      <p className="font-[family-name:var(--font-accent)] text-[11px] font-bold tracking-wider text-primary lg:text-xs">
                        STEP {step.number}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-text-primary lg:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.8] text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="animate-on-scroll mt-10 text-center">
          <span className="inline-block rounded-full bg-primary-light px-5 py-3 text-sm text-text-muted">
            お店側の操作は不要。トレードが成立すれば店舗の売上に。
          </span>
        </div>
      </div>
    </section>
  );
}
