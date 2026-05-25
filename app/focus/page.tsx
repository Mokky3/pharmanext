import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FocusContent from "@/components/FocusContent";

export const metadata: Metadata = {
  title: "Focus Areas",
  description:
    "PharmaNext focuses on Pharma & Biotech, MedTech & Digital Health, and Deep Tech — the areas with the greatest impact for health in Uzbekistan.",
};

export default function FocusPage() {
  return (
    <>
      <Header />
      <FocusContent />
      <Footer />
    </>
  );
}
