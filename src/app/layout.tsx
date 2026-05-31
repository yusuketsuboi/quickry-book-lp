import type { Metadata } from "next";
import { Noto_Serif_JP, Archivo, Zen_Kaku_Gothic_New } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// 案B Editorial 3書体（next/font/google でセルフホスト = PageSpeed維持・Googleへの外部リクエスト0）
// モックの font-family 実名指定は globals.css 側で var(--font-*) 参照に置換済み。
const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif", // 明朝・見出し
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo", // 欧文・通し番号/英字ラベル/ブランド
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-sans-jp", // 和文本文
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lp-book.quickry.jp"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon2.ico",
  },
  title: "Quickry Book ｜ 予約枠を、本当に必要な人へ。",
  description:
    "Quickry Bookは、満席やキャンセルで取りこぼしていたお客様を来店につなげる、予約枠を取引できる店舗向け予約システム。月額0円から。",
  openGraph: {
    title: "Quickry Book ｜ 予約枠を、本当に必要な人へ。",
    description:
      "Quickry Bookは、満席やキャンセルで取りこぼしていたお客様を来店につなげる、予約枠を取引できる店舗向け予約システム。月額0円から。",
    images: ["/ogp.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quickry Book ｜ 予約枠を、本当に必要な人へ。",
    description:
      "Quickry Bookは、満席やキャンセルで取りこぼしていたお客様を来店につなげる、予約枠を取引できる店舗向け予約システム。月額0円から。",
    images: ["/ogp.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${archivo.variable} ${zenKaku.variable} antialiased`}
    >
      <body>
        {/* GA4 - only loads when NEXT_PUBLIC_GA_ID is set */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
