import { CalendarCheck, Send, Repeat } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: 1,
    Icon: CalendarCheck,
    title: "通常の予約管理として使う",
    description:
      "まずは、いつもの予約管理ツールとして。月額0円から始められ、来店払いの通常予約は手数料0円です。",
    forStore: "今までのやり方を変えず、コストの持ち出しなしで導入できます。",
  },
  {
    number: 2,
    Icon: Send,
    title: "行きたいお客様がオファーを送る",
    label: "オファー型・メイン",
    description:
      "「この日に行きたい」というお客様が、アプリで枠にオファーを送ります。満席や希望日でも、行きたい気持ちが届く仕組みです。",
    forStore: "広告費をかけずに、来店意欲の高い新しいお客様との出会いが生まれます。",
  },
  {
    number: 3,
    Icon: Repeat,
    title: "行けない枠は別のお客様に引き継ぎ",
    label: "補助",
    description:
      "予定が合わなくなった枠は、別のお客様へ引き継がれます。店舗側の操作は不要で、自動で再配分されます。",
    forStore: "空いてしまうはずだった枠が、新しい来店につながります。",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-20 lg:px-0 lg:py-32">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="HOW IT WORKS" title="3ステップで動く仕組み" />
        </div>

        <div className="mx-auto mt-14 max-w-[760px]">
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
                    <div className="flex-1 rounded-2xl bg-bg-gray p-5 lg:p-7">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-[family-name:var(--font-accent)] text-[11px] font-bold tracking-wider text-primary lg:text-xs">
                          STEP {step.number}
                        </p>
                        {step.label && (
                          <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold text-accent">
                            {step.label}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1.5 text-lg font-bold text-text-primary lg:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.9] text-text-secondary lg:text-base">
                        {step.description}
                      </p>
                      <div className="mt-4 rounded-xl bg-white px-4 py-3">
                        <p className="text-xs leading-[1.7] text-text-secondary lg:text-sm">
                          <span className="font-bold text-primary">店舗にとって:</span>{" "}
                          {step.forStore}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
