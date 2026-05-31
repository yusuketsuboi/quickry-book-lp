import CtaLink from "@/components/CtaLink";

// 案B S1 Hero（誌面の見開き・2カラム）。モック忠実再現。
// 特許は「出願済（特願2024-139465）」（旧「出願中」・補助金バッジは復活させない）。
export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-main">
          <span className="hero-badge">
            <span className="dot" />
            予約制のお店のための、新しい予約のかたち
          </span>
          <h1>
            満席の日の
            <span className="l2">
              <mark>「今、行きたい」</mark>を、
            </span>
            <span className="l2">逃さない。</span>
          </h1>
          <p className="deck">
            予約枠を、本当に必要な人へ。
            <br />
            Quickry&nbsp;Bookは、満席やキャンセルで取りこぼしていたお客様を、来店につなげる
            <b>予約枠を取引できる店舗向け予約システム</b>です。月額0円から。
          </p>
          <div className="hero-foot">
            <CtaLink href="#contact" ctaLocation="hero" className="btn">
              無料で話を聞いてみる <span className="x">→</span>
            </CtaLink>
            <a href="#how" className="btn ghost">
              仕組みを見る
            </a>
          </div>
          <div className="trust">
            <span className="pt">
              特許出願済<span className="tip">特願2024-139465</span>
            </span>
            <span>初期費用0円</span>
            <span>月額0円</span>
            <span>予約手数料0円</span>
          </div>
          <p className="micro">
            初期費用0円・月額0円・予約手数料0円（来店払いの通常予約）。Freeプランあり。今お使いの予約システムはそのままで構いません。
          </p>
          <p className="hero-flag">
            <b>＊</b>「2026年6月15日 実証実験スタート」フェーズの段階的サービスです。
          </p>
          <div className="bignum">01</div>
        </div>

        <aside className="hero-side">
          <div className="side-cap">
            <span>How it flows</span>
            <span className="pg">再配分のしくみ</span>
          </div>
          <div className="flow">
            <div className="step">
              <span className="si">STEP 01</span>
              <h4>枠が動く</h4>
              <p>満席の日に出た、その日の一枠。</p>
              <span className="arrow">↓</span>
            </div>
            <div className="step hot">
              <span className="si">STEP 02</span>
              <h4>必要な人へ渡る</h4>
              <p>「今、行きたい」と待っていた人のもとへ。</p>
              <span className="arrow">↓</span>
            </div>
            <div className="step">
              <span className="si">STEP 03</span>
              <h4>来店と報酬が残る</h4>
              <p>席は埋まり、お店には報酬が残る。</p>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
