import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import FocusAreas from "@/components/FocusAreas";
import ProgramsPreview from "@/components/ProgramsPreview";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import PartnersMarquee from "@/components/PartnersMarquee";
import CTABand from "@/components/CTABand";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <FocusAreas />
        <ProgramsPreview />
        <Process />
        <WhyUs />
        <PartnersMarquee />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
