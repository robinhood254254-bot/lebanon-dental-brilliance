import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { EmergencyBar } from "./EmergencyBar";
import { ScrollToTop } from "./ScrollToTop";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <EmergencyBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-brand-soft border-b border-border">
      {image && (
        <div className="absolute inset-0 opacity-20">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="container-page py-16 md:py-24 relative">
        {eyebrow && (
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
