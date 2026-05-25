import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplyContent from "@/components/ApplyContent";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to the PharmaNext incubator or accelerator. Join the next cohort of pharma, medtech and deep-tech founders building the future of health.",
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <ApplyContent />
      <Footer />
    </>
  );
}
