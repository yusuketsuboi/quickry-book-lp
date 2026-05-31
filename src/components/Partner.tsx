import SecHead from "@/components/SecHead";
import CtaLink from "@/components/CtaLink";

// 案B S10 実証実験パートナー（旧OnboardingStepsを廃止し新規）。6/15実証実験に整合。
// 「永久」表現禁止・断定回避（お試し段階）。文言はコピー正本S10。
export default function Partner() {
  return (
    <section className="sec partner" id="partner">
      <div className="wrap">
        <SecHead no="10" sup="Pilot Program">
          最初のお店に、
          <br />
          なってみませんか。
        </SecHead>
        <p className="sec-lead rv">
          Quickry&nbsp;Bookは、2026年6月15日に実証実験をスタートします。実地でお試しいただきながら、一緒に仕組みを育ててくださるお店を募集しています。
        </p>
        {/* 【坪井CEO確認箇所①】社数表記＝パターンB（社数を出さない）を採用中。
            社数を出す（パターンA）場合はこの .ptxt 1行を差し替える。 */}
        <div className="pt-recruit rv" style={{ marginTop: "40px" }}>
          <span className="pulse" />
          <span className="ptxt">実証実験 参加店舗 募集中（先着・期間限定）</span>
        </div>
        <div className="pt-merits rv">
          <div className="pt-merit">
            <div className="pmn">01</div>
            <h3>いちばん早く、試せる</h3>
            <p>
              正式な提供に先がけて、実地でQuickry&nbsp;Bookを体験。お店の運用にどう活きるか、いち早く確かめられます。
            </p>
          </div>
          <div className="pt-merit">
            <div className="pmn">02</div>
            <h3>お店の声が、サービスに反映される</h3>
            <p>
              実証実験は、一緒につくるフェーズ。使ってみて感じたことが、これからのQuickry&nbsp;Bookに反映されていきます。
            </p>
          </div>
          <div className="pt-merit">
            <div className="pmn">03</div>
            <h3>導入の伴走サポート</h3>
            <p>
              初期設定から運用まで、担当がしっかり伴走します。はじめてでも、無理なく始められます。
            </p>
          </div>
        </div>
        <div className="pt-cta-row rv">
          <CtaLink href="#contact" ctaLocation="partner" className="btn">
            実証実験に参加する <span className="x">→</span>
          </CtaLink>
        </div>
        <p className="note rv">
          ※「永久無料」等の表現は用いません。特典・条件は実証実験期間中の限定です。
        </p>
        <p className="note rv">
          ※実証実験は、限定店舗によるお試し利用のフェーズです。正式な提供条件は、実証の結果を踏まえてご案内します。
        </p>
      </div>
    </section>
  );
}
