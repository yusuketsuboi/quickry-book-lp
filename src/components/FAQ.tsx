"use client";

import { useEffect, useRef, useState } from "react";
import SecHead from "@/components/SecHead";
import { faqs } from "@/data/faqs";

// 案B S11 FAQ（アコーディオン）。モックの .qa / .qa.open + max-height トグルを移植。
// 開いたとき GA4 dataLayer.push({event:"faq_open", question}) を発火（§6）。
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<Array<HTMLDivElement | null>>([]);

  // 開閉時に max-height を実測値へ反映（render中にrefを読まない＝react-hooks/refs回避）。
  // モック挙動（max-height:0 ⇄ scrollHeight でスムーズ開閉）をそのまま再現。
  useEffect(() => {
    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.maxHeight = openIndex === i ? `${el.scrollHeight}px` : "0px";
    });
  }, [openIndex]);

  const toggle = (i: number) => {
    if (openIndex === i) {
      setOpenIndex(null);
    } else {
      setOpenIndex(i);
      window.dataLayer?.push({ event: "faq_open", question: faqs[i].q });
    }
  };

  return (
    <section className="sec faq" id="faq">
      <div className="wrap">
        <SecHead no="11" sup="FAQ">
          よくある質問。
        </SecHead>
        <div className="faq-list rv" style={{ marginTop: "44px" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className={`qa${isOpen ? " open" : ""}`}>
                <button
                  type="button"
                  className="q"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span className="qi">Q{i + 1}</span>
                  <span className="qt">{faq.q}</span>
                  <span className="qx" aria-hidden="true" />
                </button>
                <div
                  className="a"
                  ref={(el) => {
                    answerRefs.current[i] = el;
                  }}
                >
                  <div className="ain">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
