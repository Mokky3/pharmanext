import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PharmaNext — Uzbekistan's pharma, medtech and deep-tech incubator and accelerator under Uzpharmagency.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactContent />
      <Footer />
    </>
  );
}
