import SecHead from "@/components/SecHead";

// 案B S9 Comparison（3類型テーブル）。社名・ロゴは出さない。「〜の傾向があります」表現を維持。
export default function Comparison() {
  return (
    <section className="sec cmp" id="comparison">
      <div className="wrap">
        <SecHead no="09" sup="Comparison">
          予約まわりのサービスを、
          <br />
          3つのタイプで。
        </SecHead>
        <p className="sec-lead rv">
          予約に関わるサービスは、大きく3つのタイプに分けられます。それぞれに得意なことがあり、Quickry&nbsp;Bookは新しい一つの選択肢です。
        </p>
        <div className="cmp-table rv" style={{ marginTop: "40px" }}>
          <table className="ct">
            <thead>
              <tr>
                <th>観点</th>
                <th>集客プラットフォーム型</th>
                <th>予約管理ツール型</th>
                <th className="qb">
                  Quickry Book
                  <span className="qbs">RESERVATION MARKETPLACE</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>主な役割</th>
                <td>新規集客</td>
                <td>予約の管理・受付</td>
                <td className="qb">予約枠の再配分＋管理</td>
              </tr>
              <tr>
                <th>月額・掲載費</th>
                <td>高めになる傾向があります</td>
                <td>0〜数千円の傾向があります</td>
                <td className="qb">0円から（Freeプラン）</td>
              </tr>
              <tr>
                <th>通常予約の費用</th>
                <td>掲載費に含まれる傾向</td>
                <td>かからない傾向があります</td>
                <td className="qb">実質ゼロ</td>
              </tr>
              <tr>
                <th>キャンセル対策</th>
                <td>リマインド程度の傾向</td>
                <td>リマインド程度の傾向</td>
                <td className="qb">枠の取引で来店につなげる＋回収代行</td>
              </tr>
              <tr>
                <th>満席日の取りこぼし</th>
                <td>対応しにくい傾向</td>
                <td>対応しにくい傾向</td>
                <td className="qb">必要な人へ枠を届けられる</td>
              </tr>
              <tr>
                <th>予約枠の二次流通</th>
                <td>一般的にありません</td>
                <td>一般的にありません</td>
                <td className="qb">あり（日本初）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cmp-foot rv">
          集客サービスや予約ツールをやめる必要はありません。Quickry&nbsp;Bookは、それらと併用しながら「取りこぼしの解消」を担います。
        </div>
        <p className="note rv">
          ※比較は一般的な傾向の整理です。各サービスの内容は提供事業者により異なります。
        </p>
      </div>
    </section>
  );
}
