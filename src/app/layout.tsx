import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["700", "800"],
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
  title: "Quickry Book - 予約枠で、稼ぐ。",
  description:
    "キャンセルされる予約枠が、別のお客様に渡って売上に。日本初の予約枠マーケットプレイス「Quickry Book」。初期パートナー店舗を募集中。",
  openGraph: {
    title: "Quickry Book - 予約枠で、稼ぐ。",
    description:
      "キャンセル枠が別のお客様に渡って売上に。日本初の予約枠マーケットプレイス。",
    images: ["/ogp.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quickry Book - 予約枠で、稼ぐ。",
    description:
      "キャンセル枠が別のお客様に渡って売上に。日本初の予約枠マーケットプレイス。",
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
      className={`${notoSansJP.variable} ${inter.variable} antialiased`}
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
