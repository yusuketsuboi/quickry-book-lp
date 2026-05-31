import SecHead from "@/components/SecHead";

// 案B S4 Solution（3コンセプト＋業態タグ帯）。文言はコピー正本S4・正本§4の業態。
export default function Solution() {
  return (
    <section className="sec sol" id="solution">
      <div className="wrap">
        <SecHead no="04" sup="The Idea">
          空席を「埋める」のではない。
          <br />
          予約枠を「届ける」のだ。
        </SecHead>
        <p className="sec-lead rv">
          Quickry&nbsp;Bookは、予約枠を取引できる、店舗向けの予約システム。その日じゃなくてもいい人の枠を、その日じゃないと行けない人へ。日本で初めての、予約枠マーケットプレイスです。
        </p>
        <div
          className="sol-concepts rv"
          style={{ borderTop: "2px solid var(--ink)", marginTop: "40px" }}
        >
          <div className="concept">
            <div className="ci">01</div>
            <h3>
              <em>埋める</em>のではなく、
              <br />
              届ける。
            </h3>
            <p>空いた枠を急いで埋める作業から、必要な人に渡す仕組みへ。</p>
          </div>
          <div className="concept">
            <div className="ci">02</div>
            <h3>
              <em>奪い合い</em>ではなく、
              <br />
              譲り合い。
            </h3>
            <p>
              その日じゃなくてもいい人が、その日じゃないと行けない人に席を譲る。どちらも得をする取引が生まれます。
            </p>
          </div>
          <div className="concept">
            <div className="ci">03</div>
            <h3>
              取りこぼしを、
              <br />
              機会に変える。
            </h3>
            <p>
              満席もキャンセルも、これまでは「お断り」か「空席」でした。これからは、来店と報酬につながる機会になります。
            </p>
          </div>
        </div>
        <div className="tags rv">
          <span className="tlabel">こんなお店で</span>
          <span className="tag">美容室・サロン</span>
          <span className="tag">ネイル・まつエク・エステ</span>
          <span className="tag">予約制の飲食店（コース料理）</span>
          <span className="tag">クリニック・歯科（自費診療）</span>
          <span className="tag">教室・レッスン</span>
          <span className="tag">レンタルスペース</span>
        </div>
        <p className="note rv">
          ※順番待ち・ウォークイン型のお店は対象外です（別サービス Quickry Pass
          の領域）。
        </p>
      </div>
    </section>
  );
}
