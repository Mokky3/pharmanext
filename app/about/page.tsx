import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "PharmaNext is the innovation arm of the Agency for Medical and Pharmaceutical Industry Development — a national platform building world-class pharma, medtech and deep-tech companies in Uzbekistan.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
}
