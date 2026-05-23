const industries = [
  "美容室",
  "ネイル",
  "整体",
  "クリニック",
  "飲食",
  "その他予約制サービス",
];

export default function Solution() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-[860px] px-5 py-24 text-center lg:px-0 lg:py-36">
        <p className="animate-on-scroll font-[family-name:var(--font-accent)] text-xs tracking-[3px] text-white/70">
          CONCEPT
        </p>

        <h2 className="animate-on-scroll mt-6 text-2xl font-bold leading-[1.4] text-white lg:text-[44px]">
          Quickry Bookは、
          <br className="lg:hidden" />
          予約枠の<span className="text-accent">マーケットプレイス</span>
        </h2>

        <p className="animate-on-scroll mt-7 text-base leading-[1.9] text-white/90 lg:text-xl">
          予約枠を、本当に必要な人に届ける
        </p>

        {/* 業態タグ */}
        <div className="animate-on-scroll mt-12 flex flex-wrap items-center justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
            >
              {industry}
            </span>
          ))}
        </div>

        <p className="animate-on-scroll mt-5 text-xs text-white/60">
          かかりつけ・お気に入り対応
        </p>
      </div>
    </section>
  );
}
