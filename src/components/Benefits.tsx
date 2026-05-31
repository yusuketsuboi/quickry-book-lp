import SecHead from "@/components/SecHead";

// 案B S6 Benefits（不安への答え・Q&A行レイアウト）。料率%は出さない。文言はコピー正本S6。
export default function Benefits() {
  return (
    <section className="sec ben" id="benefits">
      <div className="wrap">
        <SecHead no="06" sup="Before You Start">
          始める前の不安に、
          <br />
          先にお答えします。
        </SecHead>
        <div className="ben-list rv" style={{ marginTop: "44px" }}>
          <div className="ben-row">
            <div className="bnum">01</div>
            <div className="bq">
              <h3>
                お金がかかるのでは<span className="qm">？</span>
              </h3>
            </div>
            <div className="ba">
              <p>
                Freeプランなら、初期費用も月額も0円。通常の予約管理だけなら、ほぼ費用はかかりません。費用がかかるのは、
                <b>本来ゼロだったはずの売上が、新しく生まれたとき</b>だけです。
              </p>
            </div>
          </div>
          <div className="ben-row">
            <div className="bnum">02</div>
            <div className="bq">
              <h3>
                今の集客や予約システムを、やめないといけない
                <span className="qm">？</span>
              </h3>
            </div>
            <div className="ba">
              <p>
                いいえ。Quickry&nbsp;Bookは独立した予約システムです。今お使いの集客サービスも予約システムも、そのままで構いません。まずは新しい予約枠から、少しずつ試せます。
              </p>
            </div>
          </div>
          <div className="ben-row">
            <div className="bnum">03</div>
            <div className="bq">
              <h3>
                お店の持ち出しが発生しない<span className="qm">？</span>
              </h3>
            </div>
            <div className="ba">
              <p>
                発生しません。料金は「本来なかった売上」が生まれたときに、その一部を成果報酬としていただく仕組み。うまくいかなければ、これまでどおり。
                <b>損をすることはありません。</b>
              </p>
            </div>
          </div>
          <div className="ben-row">
            <div className="bnum">04</div>
            <div className="bq">
              <h3>
                うちのお客様が、他店に流れてしまわない
                <span className="qm">？</span>
              </h3>
            </div>
            <div className="ba">
              <p>
                「かかりつけ」機能があります。お客様がアプリを開くと、まずお店が表示される特別なポジション。簡単には他店に切り替えられない設計で、リピートを後押しします。
              </p>
            </div>
          </div>
        </div>
        <p className="note rv">
          ※費用・成果報酬の詳細は、料金セクションおよびお問い合わせ時にご案内します。
        </p>
      </div>
    </section>
  );
}
