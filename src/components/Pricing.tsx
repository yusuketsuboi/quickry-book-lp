import SecHead from "@/components/SecHead";
import CtaLink from "@/components/CtaLink";

// 案B S8 Pricing（3プラン罫線・featは墨反転）。料率%は表面に出さない（正本§14準拠）。
// 料金はFree 0円 / Standard 4,980円 / Pro 14,980円（税込・初期費用0円）。
export default function Pricing() {
  return (
    <section className="sec price" id="price">
      <div className="wrap">
        <SecHead no="08" sup="Pricing">
          料金は、シンプルに。
        </SecHead>
        <p className="sec-lead rv">
          初期費用は、すべてのプランで0円。まずはFreeプランから、気軽に始められます。
        </p>
        <div className="price-grid rv" style={{ marginTop: "44px" }}>
          <div className="plan">
            <div className="pname">Free</div>
            <div className="pdesc">まずは試してみたいお店に。</div>
            <div className="pprice">
              <span className="num">0</span>
              <span className="per">円／月</span>
            </div>
            <ul>
              <li>通常予約の管理（予約手数料0円・来店払い）</li>
              <li>予約枠の取引（トレード・オファー）</li>
              <li>空き枠の割引販売</li>
              <li>メニュー・スタッフ管理</li>
              <li>基本の分析機能</li>
            </ul>
            <CtaLink href="#contact" ctaLocation="pricing_free" className="pcta">
              無料で始める
            </CtaLink>
          </div>
          <div className="plan feat">
            <div className="ptag">人気プラン</div>
            <div className="pname">Standard</div>
            <div className="pdesc">取引を本格的に活用したいお店に。</div>
            <div className="pprice">
              <span className="yen">¥</span>
              <span className="num">4,980</span>
              <span className="per">／月</span>
            </div>
            <ul>
              <li>Freeのすべての機能</li>
              <li>取引時の手数料を優遇</li>
              <li>かかりつけ・お気に入り機能</li>
              <li>詳細な分析レポート</li>
              <li>優先サポート</li>
            </ul>
            <CtaLink
              href="#contact"
              ctaLocation="pricing_standard"
              className="pcta"
            >
              Standardを選ぶ
            </CtaLink>
          </div>
          <div className="plan">
            <div className="pname">Pro</div>
            <div className="pdesc">複数店舗・大規模運用に。</div>
            <div className="pprice">
              <span className="yen">¥</span>
              <span className="num">14,980</span>
              <span className="per">／月</span>
            </div>
            <ul>
              <li>Standardのすべての機能</li>
              <li>取引時の手数料をさらに優遇</li>
              <li>複数店舗の一括管理</li>
              <li>API連携</li>
              <li>専任サポート</li>
            </ul>
            <CtaLink href="#contact" ctaLocation="pricing_pro" className="pcta">
              Proを選ぶ
            </CtaLink>
          </div>
        </div>
        <div className="price-philo rv">
          <span className="ppl">料金の考え方</span>
          <p>
            通常の予約管理は、Freeプランなら完全無料。費用がかかるのは、予約枠が別のお客様に渡って、本来なかった売上が生まれたときだけです。お店の持ち出しはありません。
          </p>
        </div>
        <p className="note rv">
          ※すべてのプランで初期費用0円。月額費用は税込表示です。
        </p>
      </div>
    </section>
  );
}
