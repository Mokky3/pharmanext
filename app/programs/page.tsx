import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramsContent from "@/components/ProgramsContent";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "From idea to global company — the PharmaNext Incubator (idea to MVP) and Accelerator (scale & invest) programs for health and deep-tech founders.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <ProgramsContent />
      <Footer />
    </>
  );
}
