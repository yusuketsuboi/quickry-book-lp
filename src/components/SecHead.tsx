// 案B 共通セクション見出し（誌面ヘッダ）。全セクションで使い回す（DRY）。
// モックの .sec-head 構造（通し番号 sno ＋ 右寄せ英字sup ＋ 明朝h2）を忠実再現。
// h2 は dangerouslySetInnerHTML を使わず children で改行（<br/>）を渡す。

type SecHeadProps = {
  no: string; // 通し番号（"02" 等）
  sup: string; // 英字ラベル（"The Honest Truth" 等）
  children: React.ReactNode; // h2 本文（<br/> を含められる）
};

export default function SecHead({ no, sup, children }: SecHeadProps) {
  return (
    <div className="sec-head rv">
      <div className="sno">{no}</div>
      <div className="st">
        <div className="sup">{sup}</div>
        <h2>{children}</h2>
      </div>
    </div>
  );
}
