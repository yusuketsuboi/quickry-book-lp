"use client";

import Image from "next/image";

const badges = [
  "ものづくり補助金 採択",
  "特許出願中",
];

const industryIcons = [
  { src: "/icon_restaurant.svg", alt: "飲食店" },
  { src: "/icon_hospital.svg", alt: "クリニック" },
  { src: "/icon_hotel.svg", alt: "ホテル" },
  { src: "/icon_entertainment.svg", alt: "エンタメ" },
  { src: "/icon_event.svg", alt: "イベント" },
  { src: "/icon_mall.svg", alt: "商業施設" },
  { src: "/icon_retailer.svg", alt: "小売" },
  { src: "/icon_finance.svg", alt: "金融" },
  { src: "/icon_logistics.svg", alt: "物流" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle decorative blur */}
      <div className="pointer-events-none absolute right-0 top-0 w-1/2 opacity-20">
        <Image
          src="/blur.webp"
          alt=""
          width={640}
          height={640}
          className="h-auto w-full"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-[1080px] px-5 pt-20 pb-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-0 lg:pt-30 lg:pb-20">
        {/* Left column */}
        <div>
          {/* Trust badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 text-xs font-semibold text-primary"
              >
                <Image
                  src="/icon_check.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="shrink-0"
                  aria-hidden="true"
                />
                {badge}
              </span>
            ))}
          </div>

          {/* Catch copy */}
          <h1 className="mb-4 text-[32px] font-extrabold leading-[1.2] text-text-primary lg:text-[56px]">
            予約枠で、稼ぐ。
          </h1>

          {/* Sub copy */}
          <p className="mb-6 text-base leading-[1.8] text-text-secondary lg:text-lg">
            予約の&ldquo;トレード&rdquo;が発生するたび、あなたの店に収益が入る。
            <br />
            無料の予約システム、Quickry Book。
          </p>

          {/* Industry icons */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {industryIcons.map((icon) => (
              <div
                key={icon.alt}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F7FA]"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            id="hero-cta"
            href="#cta-section"
            onClick={() =>
              window.dataLayer?.push({
                event: "cta_click",
                cta_location: "hero",
              })
            }
            className="block w-full rounded-full bg-accent px-8 py-4 text-center text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg active:translate-y-0 lg:inline-block lg:w-auto lg:min-w-[280px]"
          >
            初期パートナーに申し込む（無料）
          </a>
        </div>

        {/* Right column - Hero image */}
        <div className="mt-8 flex justify-center lg:mt-0">
          <div className="max-w-[320px] lg:max-w-[480px]">
            <Image
              src="/mock2.webp"
              alt="Quickry Book 予約画面"
              width={480}
              height={640}
              preload
              className="h-auto w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
