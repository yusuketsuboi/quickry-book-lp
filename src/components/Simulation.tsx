"use client";

import { useMemo, useState } from "react";
import SecHead from "@/components/SecHead";

// =========================================================
// 店舗取り分率（取引単価比）= 料率モデル確定値（2026-06-01 坪井CEO）。
// お客様還元率を「下限」にした場合の店舗の取り分（＝店舗が取れる最大）を表示する方針。
//   弊社手数料: フリー60 / スタンダード50 / プロ40% → 店舗裁量 40 / 50 / 60%。
//   お客様還元の下限: フリー50 / スタンダード40 / プロ30% → 店舗取り分 = 裁量×(1−下限) = .20 / .30 / .42。
// 実Stripe徴収と一致（景表法OK）。お客様還元率は店舗が設定でき、運営は変更しない（下部の注記参照）。
// 正本: プロダクト概要§5-6 / メモリ project_book_fee_model / 開発指示 20260601_指示_手数料還元率モデル確定_開発宛.md。
// この1オブジェクトだけ差し替えれば、月間報酬・年間・全表示が追従する。
const SHOP_RATE = { free: 0.2, standard: 0.3, pro: 0.42 } as const;

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
          ※お客様への還元設定を下限にした場合の店舗の取り分（Standardプランで取引単価の約30%）で試算しています。お客様への還元率は店舗側が設定でき（運営が変更するものではありません）、設定により店舗の取り分は変わります。実際の金額は取引価格・成立件数・お店の設定により異なります。
        </p>
        <p className="note sim-note rv">
          ※施術・サービス自体の売上（全額お店のもの）は含みません。通常予約の予約手数料は0円です。
        </p>
      </div>
    </section>
  );
}
