import { createFileRoute } from "@tanstack/react-router";
import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { CLINIC, buildWhatsAppUrl } from "@/data/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Lebanon Dental Care" },
      { name: "description", content: "Reach Lebanon Dental Care via WhatsApp, phone or email. Find our clinic location and business hours." },
      { property: "og:title", content: "Contact Lebanon Dental Care" },
      { property: "og:description", content: "Get in touch with our dental team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Get In Touch With Our Team" subtitle="We're here to help — call, message or visit us at the clinic." />
      <section className="container-page py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <ContactCard icon={MessageCircle} title="WhatsApp" value={CLINIC.whatsappDisplay} href={buildWhatsAppUrl("Hello Lebanon Dental Care, I would like to make an enquiry.")} />
          <ContactCard icon={Phone} title="Emergency Calls" value={CLINIC.emergencyDisplay} href={`tel:${CLINIC.emergency}`} />
          <ContactCard icon={Mail} title="Email" value={CLINIC.email} href={`mailto:${CLINIC.email}`} />
          <ContactCard icon={MapPin} title="Location" value={CLINIC.address} href={CLINIC.mapLink} />

          <div className="bg-accent rounded-3xl p-6">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-secondary"><Clock className="w-5 h-5" /> Business Hours</h3>
            <ul className="mt-3 space-y-1 text-sm text-foreground">
              {CLINIC.hours.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-secondary/10 py-2"><span>{h.day}</span><span className="font-semibold">{h.time}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-card border border-border bg-card">
          <iframe
            title="Lebanon Dental Care Location"
            src="https://www.google.com/maps?q=Lebanon+Dental+Care&output=embed"
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-5 flex justify-between items-center gap-3 flex-wrap">
            <div>
              <div className="font-display font-bold">Find us easily</div>
              <div className="text-sm text-muted-foreground">Open in Google Maps for directions.</div>
            </div>
            <a href={CLINIC.mapLink} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gradient-brand text-white px-5 py-2.5 rounded-full font-semibold">
              View Our Clinic Location <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({ icon: Icon, title, value, href }: { icon: typeof MessageCircle; title: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener" className="group flex items-center gap-4 bg-card rounded-2xl p-5 border border-border shadow-card hover:shadow-brand transition">
      <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-brand text-white shrink-0"><Icon className="w-6 h-6" /></span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="font-display font-bold text-foreground group-hover:text-primary transition truncate">{value}</div>
      </div>
    </a>
  );
}
