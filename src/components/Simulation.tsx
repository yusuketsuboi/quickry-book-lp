"use client";

import { useState } from "react";
import { TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

// プラン別の店舗還元率（残額 × 店舗50% = 全体の%）
const STORE_SHARE = {
  Free: 0.25, // (1 - 0.5) * 0.5
  Standard: 0.275, // (1 - 0.45) * 0.5
  Pro: 0.3, // (1 - 0.4) * 0.5
};

const MONTHLY_FEE = {
  Free: 0,
  Standard: 4980,
  Pro: 14980,
};

const presets = [
  { label: "月5件", trades: 5 },
  { label: "月10件", trades: 10 },
  { label: "月20件", trades: 20 },
  { label: "月50件", trades: 50 },
];

export default function Simulation() {
  const [trades, setTrades] = useState(10);
  const [avgPrice, setAvgPrice] = useState(5000);

  const calc = (plan: keyof typeof STORE_SHARE) => {
    const tradeRevenue = trades * avgPrice * STORE_SHARE[plan];
    const net = tradeRevenue - MONTHLY_FEE[plan];
    return { tradeRevenue, net };
  };

  const results = {
    Free: calc("Free"),
    Standard: calc("Standard"),
    Pro: calc("Pro"),
  };

  const formatYen = (n: number) =>
    `¥${Math.round(n).toLocaleString("ja-JP")}`;

  return (
    <section className="bg-bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading
            subLabel="SIMULATION"
            title="本来ゼロだった売上が、こう変わる"
          />
        </div>

        <p className="animate-on-scroll mx-auto mt-4 max-w-[700px] text-center text-sm leading-[1.8] text-text-secondary">
          キャンセルされた枠が別のお客様に渡った時に、売上の一部が店舗に還元されます。
          <br className="hidden lg:block" />
          キャンセルが多い店ほど、本来ゼロだった売上が増えます。
        </p>

        {/* Input card */}
        <div className="animate-on-scroll mx-auto mt-10 max-w-[720px] rounded-3xl bg-bg-gray p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Trades slider */}
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <label className="text-xs font-semibold tracking-wider text-text-muted">
                  月間のトレード成立件数
                </label>
                <span className="font-[family-name:var(--font-accent)] text-2xl font-bold text-primary">
                  {trades}
                  <span className="ml-1 text-xs text-text-muted">件/月</span>
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                step={1}
                value={trades}
                onChange={(e) => setTrades(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="mt-2 flex gap-2">
                {presets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => setTrades(p.trades)}
                    className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                      trades === p.trades
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-text-secondary hover:border-primary/40"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Avg price slider */}
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <label className="text-xs font-semibold tracking-wider text-text-muted">
                  平均トレード価格
                </label>
                <span className="font-[family-name:var(--font-accent)] text-2xl font-bold text-primary">
                  {formatYen(avgPrice)}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={20000}
                step={500}
                value={avgPrice}
                onChange={(e) => setAvgPrice(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="mt-2 flex gap-2">
                {[3000, 5000, 8000, 15000].map((p) => (
                  <button
                    key={p}
                    onClick={() => setAvgPrice(p)}
                    className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                      avgPrice === p
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-text-secondary hover:border-primary/40"
                    }`}
                  >
                    {formatYen(p)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="animate-on-scroll mt-8 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {(["Free", "Standard", "Pro"] as const).map((plan) => {
            const isBest =
              results[plan].net ===
              Math.max(
                results.Free.net,
                results.Standard.net,
                results.Pro.net
              );
            return (
              <div
                key={plan}
                className={`relative rounded-3xl bg-white p-6 shadow-sm lg:p-8 ${
                  isBest ? "ring-2 ring-accent" : "border border-border"
                }`}
              >
                {isBest && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-white shadow-md">
                    BEST VALUE
                  </div>
                )}
                <p className="font-[family-name:var(--font-accent)] text-xl font-bold text-text-primary">
                  {plan}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  {MONTHLY_FEE[plan] === 0
                    ? "月額0円"
                    : `月額 ${formatYen(MONTHLY_FEE[plan])}`}
                </p>

                <div className="mt-5 border-t border-border pt-5">
                  <p className="text-xs text-text-muted">店舗への還元額（月）</p>
                  <p className="mt-1 flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-accent)] text-4xl font-extrabold text-primary">
                      {formatYen(results[plan].tradeRevenue)}
                    </span>
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-2">
                  <TrendingUp
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 text-amber-600"
                  />
                  <div className="text-left">
                    <p className="text-[10px] text-text-muted">月額差し引き後</p>
                    <p className="text-sm font-bold text-amber-700">
                      {formatYen(results[plan].net)}の追加収益
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="animate-on-scroll mt-6 text-center text-xs text-text-muted">
          ※ これに加えて、来店されたお客様の施術・サービス売上は全額店舗のものです。
          <br className="hidden lg:block" />
          ※ 通常の予約管理は完全無料。Freeプランなら月額0円でご利用いただけます。
        </p>
      </div>
    </section>
  );
}
