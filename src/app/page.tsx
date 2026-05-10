import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Simulation from "@/components/Simulation";
import Comparison from "@/components/Comparison";
import Trust from "@/components/Trust";
import Pricing from "@/components/Pricing";
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
        <Hero />
        <PainPoints />
        <Solution />
        <HowItWorks />
        <Benefits />
        <Simulation />
        <Comparison />
        <Trust />
        <Pricing />
        <OnboardingSteps />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
