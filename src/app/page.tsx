import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import Ribbon from "@/components/Ribbon";
import PainPoints from "@/components/PainPoints";
import Story from "@/components/Story";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Simulation from "@/components/Simulation";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Partner from "@/components/Partner";
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
      {/* FAQ構造化データ（FAQPage）。XSS対策で "<" を "<" にエスケープ（入江CTO方針§1-F） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollAnimator />
      {/* 案B Editorial 全12セクション（確定モック順） */}
      <Masthead />
      <Hero /> {/* S1 */}
      <Ribbon />
      <PainPoints /> {/* S2 */}
      <Story /> {/* S3 */}
      <Solution /> {/* S4 */}
      <HowItWorks /> {/* S5 */}
      <Benefits /> {/* S6 */}
      <Simulation /> {/* S7 */}
      <Pricing /> {/* S8 */}
      <Comparison /> {/* S9 */}
      <Partner /> {/* S10 実証実験パートナー */}
      <FAQ /> {/* S11 */}
      <CTASection /> {/* S12 CTA・問い合わせ */}
      <Footer />
      <FloatingCTA />
    </>
  );
}
