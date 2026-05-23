import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Story from "@/components/Story";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import OnboardingSteps from "@/components/OnboardingSteps";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import FloatingCTA from "@/components/FloatingCTA";
import { faqs } from "@/data/faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollAnimator />
      <FloatingCTA />
      <main>
        {/* LP版13ブロック構成（遅出し種明かし・物語フル） */}
        <Hero /> {/* S1 表紙 */}
        <PainPoints /> {/* S2 業界の3つの本音 */}
        <Story /> {/* S3-S6 物語フル4枚（LPの背骨） */}
        <Solution /> {/* S7 種明かし（マーケットプレイス） */}
        <HowItWorks /> {/* S8 3ステップで動く仕組み */}
        <Benefits /> {/* S9 不安への答え */}
        <Pricing /> {/* S10 料金プラン */}
        <Comparison /> {/* LP限定 類型比較（S10とS11の間） */}
        <OnboardingSteps /> {/* S11 Founding Customer 20社限定特典＋導入フロー */}
        <FAQ /> {/* よくある質問（S6からの参照先） */}
        <CTASection /> {/* S12 CTA・問い合わせ */}
      </main>
      <Footer />
    </>
  );
}
