const honneItems = [
  {
    title: "ホットペッパーから、抜け出せない",
    body: "掲載費の負担は決して小さくない。それでも、解約したら集客が止まるかもしれない――その不安があるから、踏み切れない。続けるのも苦しいのに、やめる決断はもっと重い。多くのオーナーが、この板挟みの中にいます。",
  },
  {
    title: "キャンセル料を、お客様に言えない",
    body: "ルールとして決めてはいる。けれど、いざその場になると言い出せない。長く通ってくださるお客様との関係を、お金のことで気まずくしたくない。結果として、キャンセル料はほとんど回収できていない。そう打ち明けてくださるオーナーは少なくありません。",
  },
  {
    title: "「予約困難店」に見せたいのに、空席が出る",
    body: "人気のあるお店に見せたい。予約の取りにくい一軒でありたい。その思いとは裏腹に、当日のキャンセルで席はぽつりと空く。理想と現実の差が、いちばん見えにくいところで広がっていきます。",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-bg-gray">
      <div className="mx-auto max-w-[860px] px-5 py-20 lg:px-0 lg:py-32">
        <div className="animate-on-scroll text-center">
          <p className="font-[family-name:var(--font-accent)] text-xs font-semibold uppercase tracking-[2px] text-primary">
            THREE HONEST VOICES
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-[1.4] text-text-primary lg:text-[34px]">
            予約制サービスのオーナー、
            <br className="lg:hidden" />
            こんな悩みはありませんか？
          </h2>
        </div>

        {/* Lead */}
        <p className="animate-on-scroll mx-auto mt-8 max-w-[680px] text-center text-sm leading-[2] text-text-secondary lg:text-base">
          予約制のお店を続けていると、口には出しにくいけれど、ずっと心の片隅に残っている。そんな悩みがあります。店舗オーナーの皆様からよくいただく声を、三つに整理しました。
        </p>

        {/* Three honne */}
        <div className="mt-14 space-y-6 lg:space-y-8">
          {honneItems.map((item, i) => (
            <div
              key={i}
              className={`animate-on-scroll stagger-${i + 1} rounded-3xl bg-white p-7 shadow-sm lg:p-10`}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-[family-name:var(--font-accent)] text-2xl font-extrabold text-primary/30 lg:text-3xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-[1.5] text-text-primary lg:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[2] text-text-secondary lg:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition line */}
        <p className="animate-on-scroll mt-14 text-center text-base leading-[1.9] text-text-primary lg:text-lg">
          ここから、ある美容室オーナー・田中さんの一日を見ていきます。
        </p>
      </div>
    </section>
  );
}
