// 案B Ribbon（マーキー信頼バー）。CSS @keyframes scroll で2セット並べ translateX(-50%) ループ。
// prefers-reduced-motion: reduce ではCSS側でアニメ停止。テキスト構成は50%ループのため増減しない。
export default function Ribbon() {
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="marquee">
        <span>RESERVATION MARKETPLACE</span>
        <span className="d">✦</span>
        <span>PATENT PENDING ── 特許出願済</span>
        <span className="d">✦</span>
        <span>予約枠を、本当に必要な人へ</span>
        <span className="d">✦</span>
        <span>初期費用 0円 / 月額 0円 / 予約手数料 0円</span>
        <span className="d">✦</span>
        <span>RESERVATION MARKETPLACE</span>
        <span className="d">✦</span>
        <span>PATENT PENDING ── 特許出願済</span>
        <span className="d">✦</span>
        <span>予約枠を、本当に必要な人へ</span>
        <span className="d">✦</span>
        <span>初期費用 0円 / 月額 0円 / 予約手数料 0円</span>
        <span className="d">✦</span>
      </div>
    </div>
  );
}
