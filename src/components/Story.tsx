import SecHead from "@/components/SecHead";

// 案B S3 Story（物語・墨背景・4シーングリッド）。推奨案B（"あるお店"型）で実装中。
// ※架空イメージ注記は必須（モック・コピー正本S3準拠）。
// 坪井CEO最終判断が代替案A（美容室・田中さん）に振れた場合のみ文言差し替え（コピー正本S3に差分記載）。
export default function Story() {
  return (
    <section className="sec story" id="story">
      <div className="story-big" aria-hidden="true">
        物語
      </div>
      <div className="wrap">
        <SecHead no="03" sup="A Story">
          満席の日に、
          <br />
          消えていく予約があった。
        </SecHead>
        <p className="sec-lead rv">
          キャンセルは、どんなお店にも起こります。これは、予約で成り立つあるお店の、ある一日のお話です。
        </p>
        <div className="scenes rv">
          <div className="scene">
            <span className="snum">01</span>
            <span className="slabel">Afternoon</span>
            <span className="sjp">その日</span>
            <p>
              予約表は、満席だった。
              <br />
              <span className="em">
                朝から続く忙しさ。今日もいい一日になる——そう思っていた。
              </span>
            </p>
          </div>
          <div className="scene">
            <span className="snum">02</span>
            <span className="slabel">Before Closing</span>
            <span className="sjp">夕方</span>
            <p>
              「すみません、急用で行けなくなって」
              <br />
              <span className="em">
                一本の連絡。空いた枠。埋め直す時間も、声をかける相手も、すぐには見つからない。
              </span>
            </p>
          </div>
          <div className="scene">
            <span className="snum">03</span>
            <span className="slabel">As Usual</span>
            <span className="sjp">いつもの結末</span>
            <p>
              その枠は、空席のまま夜を迎える。
              <br />
              <span className="em">
                来るはずだったお客様も、来たかったお客様も、すれ違ったまま。本来そこにあったはずの売上が、静かに消えていく。
              </span>
            </p>
          </div>
          <div className="scene final">
            <span className="snum">04</span>
            <span className="slabel">With Quickry Book</span>
            <span className="sjp">これからの結末</span>
            <p>
              空いた枠は、「今日、行きたい」と待っていた人のもとへ。席は埋まり、新しい出会いが生まれ、お店には報酬が残る。譲ったお客様には、次の来店につながるクーポンが届く。
              <span className="punch">誰も、取りこぼさない。</span>
            </p>
          </div>
        </div>
        <p className="note story-note rv">
          ※この物語は、サービスの仕組みをわかりやすくお伝えするための架空のイメージです。
        </p>
      </div>
    </section>
  );
}
