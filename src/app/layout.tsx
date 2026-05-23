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
  title: "Quickry Book - キャンセル枠が、明日の売上になる。",
  description:
    "月額0円から始める、新しい予約管理。キャンセルで空いた枠を、本当に必要な人に届けるQuickryBook。予約枠のマーケットプレイス。",
  openGraph: {
    title: "Quickry Book - キャンセル枠が、明日の売上になる。",
    description:
      "月額0円から始める、新しい予約管理。空いた枠を、本当に必要な人に届ける予約枠のマーケットプレイス。",
    images: ["/ogp.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quickry Book - キャンセル枠が、明日の売上になる。",
    description:
      "月額0円から始める、新しい予約管理。空いた枠を、本当に必要な人に届ける予約枠のマーケットプレイス。",
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
