import SecHead from "@/components/SecHead";

// 案B S5 HowItWorks（3ステップ罫線＋foot帯）。文言はコピー正本S5。
export default function HowItWorks() {
  return (
    <section className="sec how" id="how">
      <div className="wrap">
        <SecHead no="05" sup="How It Works">
          仕組みは、3ステップ。
        </SecHead>
        <p className="sec-lead rv">
          いつもの予約管理に、組み込むだけ。お店の手間は、ほとんどありません。
        </p>
        <div className="how-steps rv" style={{ marginTop: "40px" }}>
          <div className="hstep">
            <div className="hsi">
              <span className="n">01</span>
              <span className="lab">枠が動く</span>
            </div>
            <h3>「その日は行けない」枠が出る</h3>
            <p>
              「その日は行けない」お客様が予約枠を手放す。または満席の枠に「ここに行きたい」というリクエストが届く。きっかけは、キャンセルでも、人気の集中でも。
            </p>
          </div>
          <div className="hstep">
            <div className="hsi">
              <span className="n">02</span>
              <span className="lab">必要な人へ渡る</span>
            </div>
            <h3>待っていた人のもとへ</h3>
            <p>
              手放された枠や、満席の枠が、それを待っていたお客様のもとへ。条件が合えば取引が成立し、その日の来店が決まります。
            </p>
          </div>
          <div className="hstep">
            <div className="hsi">
              <span className="n">03</span>
              <span className="lab">来店と報酬が残る</span>
            </div>
            <h3>席が埋まり、報酬が生まれる</h3>
            <p>
              空くはずだった枠が埋まり、新しいお客様が来店。お店にはサービス料に加えて、取引による報酬が生まれます。
            </p>
          </div>
        </div>
        <div className="how-foot rv">
          <span className="hfi">SHOP&apos;S WORK ── ほぼゼロ</span>
          <p>
            枠の再配分は仕組み側で進みます。お店は、いつもどおりお客様を迎えるだけ。
          </p>
        </div>
      </div>
    </section>
  );
}
