import Image from "next/image";
import SectionHeading from "./SectionHeading";

const painItems = [
  "当日キャンセル・ノーショーで毎月 数万円の損失が出ている",
  "キャンセル料を請求したいが、関係悪化が怖くて言えない",
  "キャンセル待ちリストを作っても、反応率が低い",
  "ホットペッパーの掲載費が高すぎるが、やめると集客が減る",
];

const stats = [
  { value: "2,000億円", label: "ノーショー被害額（飲食・美容業界）", prefix: "年間" },
  { value: "1.6兆円", label: "ドタキャン含む被害総額", prefix: "年間" },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/pain_bg.webp"
          alt=""
          fill
          className="object-cover opacity-5"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="PAIN POINT" title="こんなお悩みありませんか？" />
        </div>

        {/* Pain checklist */}
        <div className="mt-12 flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-5">
          {painItems.map((item, i) => (
            <div
              key={i}
              className={`animate-slide-in stagger-${i + 1} rounded-2xl bg-white p-6 shadow-sm`}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-50 text-sm font-bold text-error">
                  !
                </span>
                <span className="text-base leading-[1.8] text-text-primary lg:text-lg">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="animate-on-scroll flex-1 rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <p className="font-[family-name:var(--font-accent)] text-4xl font-extrabold text-error">
                {stat.prefix}
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
