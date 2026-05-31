import SecHead from "@/components/SecHead";

// 案B S2 PainPoints（3カラム罫線レイアウト）。文言はコピー正本S2。
export default function PainPoints() {
  return (
    <section className="sec pains" id="pains">
      <div className="wrap">
        <SecHead no="02" sup="The Honest Truth">
          予約制のお店なら、
          <br />
          きっと身に覚えがある。
        </SecHead>
        <p className="sec-lead rv">
          美容室も、予約制の飲食店も、クリニックも。予約で成り立つお店には、共通の悩みがあります。
        </p>
        <div
          className="pain-cols rv"
          style={{ borderTop: "2px solid var(--ink)", marginTop: "40px" }}
        >
          <div className="pain">
            <span className="pn">
              <span className="bar" />本音 01
            </span>
            <h3>掲載費・集客コストの重さ</h3>
            <p>
              新しいお客様に出会うために、毎月の掲載費や広告費。来てくれるのはありがたい。けれど、その費用は来る月も来ない月も、変わらずのしかかる。
            </p>
          </div>
          <div className="pain">
            <span className="pn">
              <span className="bar" />本音 02
            </span>
            <h3>キャンセルを、言い出しにくい</h3>
            <p>
              急なキャンセルや無断キャンセル。埋まるはずだった枠が、そのまま空席に。かといってキャンセル料の話は、お客様との関係を思うと切り出しづらい。
            </p>
          </div>
          <div className="pain">
            <span className="pn">
              <span className="bar" />本音 03
            </span>
            <h3>満席なのに、空席が出る</h3>
            <p>
              「今日、行きたい」と言ってくれるお客様がいても、満席ならお断りするしかない。その一方で、直前のキャンセルで枠が空く。来てほしい人に、来てもらえない。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
