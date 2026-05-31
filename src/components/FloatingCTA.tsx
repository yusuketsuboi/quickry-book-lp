"use client";

import { useEffect, useState } from "react";

// 案B Floating CTA（追従・朱バー）。モックのスクロール判定ロジックを移植:
//   Hero(#top)通過後 かつ contact(#contact)手前 で出現。
//   見た目はモック .float-cta / .float-cta.show（CSSの transform で出し入れ）。
export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;

    const onScroll = () => {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const y = window.scrollY || window.pageYOffset;
      const nearContact =
        contact.getBoundingClientRect().top < window.innerHeight * 0.9;
      setShow(y > heroBottom && !nearContact);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={`float-cta${show ? " show" : ""}`} id="floatCta">
      <div className="float-in">
        <div className="ft">
          取りこぼしを、終わりにする。
          <span>初期費用0円・月額0円・予約手数料0円</span>
        </div>
        <a
          href="#contact"
          data-ga="cta_click"
          onClick={() => {
            window.dataLayer?.push({
              event: "cta_click",
              cta_location: "floating",
            });
          }}
        >
          無料で話を聞いてみる <span className="x">→</span>
        </a>
      </div>
    </div>
  );
}
