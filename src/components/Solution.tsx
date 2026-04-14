export default function Solution() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="text-center">
          <p className="animate-on-scroll text-xs tracking-[2px] text-white/70">
            SOLUTION
          </p>

          <h2 className="animate-on-scroll mt-2 text-2xl font-bold leading-[1.4] text-white lg:text-4xl">
            Quickry Bookは、
            <br />
            予約枠のトレードマーケットプレイスです。
          </h2>

          <p className="animate-on-scroll mt-6 text-base leading-[1.8] text-white/90 lg:text-lg">
            行けなくなったお客様の予約を、別のお客様がトレードで引き継ぎます。
          </p>
        </div>

        {/* Transformation visual */}
        <div className="animate-on-scroll mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-5 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl">
              😔
            </div>
            <div className="text-left">
              <p className="text-xs text-white/60">Before</p>
              <p className="text-base text-white/70 line-through">
                キャンセル = 損失
              </p>
            </div>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white shadow-lg">
            →
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-accent/20 px-6 py-5 ring-2 ring-accent/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/30 text-2xl">
              🎉
            </div>
            <div className="text-left">
              <p className="text-xs text-accent">After</p>
              <p className="text-base font-bold text-white">
                キャンセル = 収益機会
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
