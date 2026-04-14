"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    const isOpen = openIndex === i;
    setOpenIndex(isOpen ? null : i);

    // GTM event: FAQ open
    if (!isOpen) {
      window.dataLayer?.push({
        event: "faq_open",
        question: faqs[i].q,
      });
    }
  };

  return (
    <section className="bg-bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-16 lg:px-0 lg:py-30">
        <div className="animate-on-scroll">
          <SectionHeading subLabel="FAQ" title="よくある質問" />
        </div>

        <div className="mx-auto mt-12 flex max-w-[800px] flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`animate-on-scroll overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary shadow-sm"
                    : "border-border"
                } bg-white`}
              >
                <button
                  onClick={() => handleToggle(i)}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left text-base font-semibold text-text-primary"
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0 text-xl text-primary">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-border px-6 pb-5 pt-4 text-sm leading-[1.8] text-text-secondary">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
