import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StartupsContent from "@/components/StartupsContent";

export const metadata: Metadata = {
  title: "Startups",
  description:
    "Meet the pharma, medtech and deep-tech ventures supported by PharmaNext's incubator and accelerator programs.",
};

export default function StartupsPage() {
  return (
    <>
      <Header />
      <StartupsContent />
      <Footer />
    </>
  );
}
