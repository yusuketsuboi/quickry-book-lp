"use client";

import { useMemo, useState } from "react";
import SecHead from "@/components/SecHead";

// =========================================================
// ★公開前ゲート1: 店舗取り分率（取引単価比）。
// 現状 = 確定モック値（坪井CEOがジャッジ済の見た目用）。
// 注意: プロダクト概要§6の実装値(Free.25 / Std.275 / Pro.30)とは前提が異なる。
//   （モックは「残額率Free50/Std55/Pro60% × 店舗share≒0.73」で.36/.40/.44を導出）
// 公開前に QuickryBook/docs/fee-structure.md / apps/web/src/lib/fees/constants.ts と突合し、
//   入江CTO + 白石CTO + 坪井CEO「店舗40%還元」解釈で最終確定する（LP公開=実証実験6/15 前に必ず通す）。
// 確定後は【この1オブジェクトだけ】差し替えれば、月間報酬・年間・全表示が追従する。
// ※注記文「店舗の取り分を取引単価の約40%（Standard）」も連動修正が必要（芝原/佐川CMO）。
const SHOP_RATE = { free: 0.36, standard: 0.4, pro: 0.44 } as const;

type Plan = keyof typeof SHOP_RATE;

// 単価スライダー（不等間隔のためindexで保持）:
//   200〜1000は100円刻み / 1500〜10000は500円刻み（モック忠実）。
const PRICES: number[] = (() => {
  const arr: number[] = [];
  for (let v = 200; v <= 1000; v += 100) arr.push(v);
  for (let v = 1500; v <= 10000; v += 500) arr.push(v);
  return arr;
})();

const PRICE_MAX_INDEX = PRICES.length - 1; // = 26

function yen(n: number): string {
  return Math.round(n).toLocaleString("ja-JP");
}

// 案B S7 Simulation（収益シミュレーター）。モックのバニラJSをReactへ移植。
export default function Simulation() {
  const [count, setCount] = useState(30); // 月の取引成立件数（実数 1..150）
  const [priceIndex, setPriceIndex] = useState(8); // PRICES[8] = 1000円
  const [plan, setPlan] = useState<Plan>("standard");

  const price = PRICES[priceIndex];
  const week = useMemo(() => Math.round((count * 7) / 30), [count]); // 月→週あたり目安（月30日想定）
  const monthly = useMemo(
    () => count * price * SHOP_RATE[plan], // 月の件数 × 単価 × 店舗取り分
    [count, price, plan]
  );
  const yearly = monthly * 12;

  return (
    <section className="sec sim" id="simulation">
      <div className="wrap">
        <SecHead no="07" sup="Simulation">
          もし、その枠が届いたら。
          <br />
          数字で見てみる。
        </SecHead>
        <p className="sec-lead rv">
          これまで空席になっていた予約枠が、必要な人に届いたとき。お店に生まれる報酬を、試算してみましょう。
        </p>
        <div className="sim-grid rv">
          <div className="sim-controls">
            <div className="ctrl">
              <div className="clab">
                <span className="ct">月に取引が成立する件数</span>
                <span className="cv">
                  {count}
                  <span className="u">
                    件（週あたり約{week}件）
                  </span>
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={150}
                step={1}
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value, 10))}
                aria-label="月の取引成立件数"
              />
            </div>
            <div className="ctrl">
              <div className="clab">
                <span className="ct">取引1件あたりの平均単価</span>
                <span className="cv">
                  <span className="u" style={{ marginRight: "1px" }}>
                    ¥
                  </span>
                  {yen(price)}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={PRICE_MAX_INDEX}
                step={1}
                value={priceIndex}
                onChange={(e) => setPriceIndex(parseInt(e.target.value, 10))}
                aria-label="取引1件あたりの平均単価"
              />
            </div>
            <div className="ctrl">
              <div className="clab">
                <span className="ct">プラン（任意）</span>
              </div>
              <div className="plan-pick">
                {(["free", "standard", "pro"] as Plan[]).map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={plan === p ? "on" : undefined}
                    onClick={() => setPlan(p)}
                  >
                    {p === "free" ? "Free" : p === "standard" ? "Standard" : "Pro"}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="sim-result">
            <div className="rlab">想定される月間の取引報酬</div>
            <div className="rval">
              <span className="yen">¥</span>
              {yen(monthly)}
            </div>
            <div className="rsub">
              年間では <b>¥{yen(yearly)}</b> の収益機会
            </div>
          </div>
        </div>
        <p className="note sim-note rv">
          ※店舗の取り分を取引単価の約40%（Standardプラン）として試算しています。プランやお店の設定により変わります。実際の金額は取引価格・成立件数・店舗の設定により異なります（個人差・店舗差があります）。最終的な料率はサービスの規定により確定します。
        </p>
        <p className="note sim-note rv">
          ※施術・サービス自体の売上（全額お店のもの）は含みません。通常予約の予約手数料は0円です。
        </p>
      </div>
    </section>
  );
}
