import { TrendingUp, UserPlus, CircleDollarSign } from "lucide-react";
import SectionHeading from "./SectionHeading";

const benefits = [
  {
    Icon: TrendingUp,
    accent: "from-amber-50 to-amber-100",
    iconBg: "bg-amber-100 text-amber-700",
    title: "キャンセル枠が売上に変わる",
    description:
      "空いた枠を別のお客様がトレードで引き継ぎ、本来ゼロだった売上が店舗収益に。さらに来店されたお客様の施術売上は全額店舗のものです。",
    points: [
      "トレード成立時に店舗へ還元",
      "施術売上は100%店舗のもの",
      "キャンセル損失の回復",
    ],
  },
  {
    Icon: UserPlus,
    accent: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-100 text-blue-700",
    title: "予約が取れなかった人が新規顧客に",
    description:
      "トレードで予約を受け取ったお客様は、あなたのお店に初めて来る新規顧客。広告費ゼロで、今まで接点のなかったお客様と出会えます。",
    points: [
      "広告費ゼロで新規獲得",
      "リピートにつながる可能性",
      "掲載媒体に頼らない集客",
    ],
  },
  {
    Icon: CircleDollarSign,
    accent: "from-green-50 to-green-100",
    iconBg: "bg-green-100 text-green-700",
    title: "初期費用・月額ゼロから始められる",
    description:
      "Freeプランなら初期費用・月額費用ともにゼロ。トレード成立時だけ手数料が発生する完全成果報酬型。導入リスクなしで始められます。",
    points: [
      "初期費用 0円",
      "Freeプランは月額 0円",
      "持ち出しゼロの成果報酬型",
    ],
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

        <div className="mt-14 space-y-10 lg:space-y-16">
          {benefits.map((benefit, i) => {
            const { Icon } = benefit;
            const isReverse = i % 2 === 1;
            return (
              <div
                key={i}
                className={`animate-on-scroll stagger-${i + 1} flex flex-col items-center gap-6 lg:gap-12 ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Visual block */}
                <div
                  className={`relative flex aspect-square w-full max-w-[320px] items-center justify-center rounded-3xl bg-gradient-to-br ${benefit.accent} lg:w-[360px]`}
                >
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-3xl ${benefit.iconBg} shadow-lg lg:h-32 lg:w-32`}
                  >
                    <Icon size={56} strokeWidth={1.6} />
                  </div>
                  <span className="absolute left-6 top-6 font-[family-name:var(--font-accent)] text-5xl font-extrabold text-white/50 lg:text-7xl">
                    0{i + 1}
                  </span>
                </div>

                {/* Text block */}
                <div className="flex-1">
                  <p className="font-[family-name:var(--font-accent)] text-xs font-bold tracking-wider text-accent">
                    MERIT 0{i + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-text-primary lg:text-3xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-[1.9] text-text-secondary lg:text-base">
                    {benefit.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {benefit.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-text-primary"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
