import CtaLink from "@/components/CtaLink";

// 案B Masthead（雑誌のマストヘッド・sticky追従）。モック忠実。
export default function Masthead() {
  return (
    <div className="masthead">
      <div className="mast-in">
        <div className="mast-l">
          <a href="#top" className="brand">
            QUICKRY <i>BOOK</i>
          </a>
          <div className="issue">RESERVATION MARKETPLACE / 2026</div>
        </div>
        <nav className="mast-nav">
          <a href="#how">仕組み</a>
          <a href="#price">料金</a>
          <a href="#faq">FAQ</a>
          <CtaLink href="#contact" ctaLocation="masthead" className="cta">
            お問い合わせ
          </CtaLink>
        </nav>
      </div>
    </div>
  );
}
