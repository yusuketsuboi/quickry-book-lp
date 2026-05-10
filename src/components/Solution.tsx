import { CalendarX, Sparkles, ArrowRight, Settings, ShoppingBag } from "lucide-react";

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
            <br className="lg:hidden" />
            日本初の<span className="text-accent">予約枠マーケットプレイス</span>。
          </h2>

          <p className="animate-on-scroll mx-auto mt-6 max-w-[720px] text-base leading-[1.9] text-white/90 lg:text-lg">
            行けなくなったお客様の予約を、別のお客様がトレードで引き継ぐ。
            <br className="hidden lg:block" />
            予約枠そのものが流通する、まったく新しいカテゴリのサービスです。
          </p>
        </div>

        {/* Category contrast */}
        <div className="animate-on-scroll mt-10 grid gap-4 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {/* 既存：管理ツール */}
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm lg:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/60">
                <Settings size={20} strokeWidth={1.8} />
              </div>
              <p className="text-xs font-semibold tracking-wider text-white/60">
                既存の予約システム
              </p>
            </div>
            <p className="mt-4 text-xl font-bold text-white/80 lg:text-2xl">
              予約を<span className="line-through decoration-white/40">管理する</span>ツール
            </p>
            <p className="mt-3 text-sm leading-[1.8] text-white/60">
              予約を受け付け、管理するだけ。キャンセルが出たら、売上はゼロになる。
            </p>
          </div>

          {/* Quickry Book：マーケットプレイス */}
          <div className="relative rounded-3xl border border-accent/40 bg-accent/15 p-6 ring-2 ring-accent/30 backdrop-blur-sm lg:p-8">
            <div className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold tracking-wider text-white shadow-md">
              NEW CATEGORY
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/30 text-accent">
                <ShoppingBag size={20} strokeWidth={1.8} />
              </div>
              <p className="text-xs font-semibold tracking-wider text-accent">
                Quickry Book
              </p>
            </div>
            <p className="mt-4 text-xl font-bold text-white lg:text-2xl">
              予約枠が<span className="text-accent">流通する</span>マーケット
            </p>
            <p className="mt-3 text-sm leading-[1.8] text-white/80">
              予約枠そのものがお客様同士でトレードされる。キャンセル枠が別のお客様に渡り、売上に変わる。
            </p>
          </div>
        </div>

        {/* Before/After */}
        <div className="animate-on-scroll mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-5 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white/80">
              <CalendarX size={24} strokeWidth={1.8} />
            </div>
            <div className="text-left">
              <p className="text-xs text-white/60">Before</p>
              <p className="text-base text-white/70 line-through">
                キャンセル = 損失
              </p>
            </div>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-lg">
            <ArrowRight size={20} strokeWidth={2.4} />
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-accent/20 px-6 py-5 ring-2 ring-accent/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/30 text-accent">
              <Sparkles size={24} strokeWidth={1.8} />
            </div>
            <div className="text-left">
              <p className="text-xs text-accent">After</p>
              <p className="text-base font-bold text-white">
                キャンセル枠 = 新しい売上
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
