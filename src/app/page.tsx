import { FocusGrid } from "@/components/landing/FocusGrid";
import { Hero } from "@/components/landing/Hero";
import { LeadForm } from "@/components/landing/LeadForm";
import { MobileQuickContact } from "@/components/landing/MobileQuickContact";
import { Process } from "@/components/landing/Process";
import { ProjectShowcase } from "@/components/landing/ProjectShowcase";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Testimonials } from "@/components/landing/Testimonials";
import { TrustBadge } from "@/components/landing/TrustBadge";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col pb-24 md:pb-0">
        <Hero />
        <TrustBadge />
        <FocusGrid />
        <Process />
        <ProjectShowcase />
        <Testimonials />
        <LeadForm />
      </main>
      <SiteFooter />
      <MobileQuickContact />
    </>
  );
}
