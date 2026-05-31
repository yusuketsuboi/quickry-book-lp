"use client";

// 案B 共通CTAリンク。クリックで GA4 dataLayer.push({event:"cta_click", cta_location}) を発火。
// 既存LPの確立パターン（window.dataLayer?.push）を踏襲し、計測はこの1経路に一本化する
// （モックの data-ga 属性は二重計測になるため使わない＝入江CTO方針§6）。
// 見た目はモックのクラス（btn / pcta / float-in 内 a 等）を className で受けて再現。

type CtaLinkProps = {
  href: string;
  ctaLocation: string;
  className?: string;
  children: React.ReactNode;
};

export default function CtaLink({
  href,
  ctaLocation,
  className,
  children,
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={className}
      data-ga="cta_click"
      onClick={() => {
        window.dataLayer?.push({
          event: "cta_click",
          cta_location: ctaLocation,
        });
      }}
    >
      {children}
    </a>
  );
}
