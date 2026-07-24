import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, ShieldCheck, Sparkles, Stethoscope, Clock, Users, Star, CheckCircle2, Calendar } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { CLINIC, IMAGES } from "@/data/clinic";

const FAQS = [
  { q: "What makes Lebanon Dental Care the best dental clinic in Mombasa?", a: "Over 7 years of experience, modern digital equipment, hospital-grade sterilisation, transparent pricing and a genuinely gentle, patient-first approach — trusted by 1,000+ patients across Mombasa, Nyali, Bamburi, Shanzu, Mtwapa and Kilifi." },
  { q: "Do you accept walk-ins or emergency dental visits?", a: "Yes. We keep same-day slots open for emergencies like severe tooth pain, swelling, broken teeth or dental trauma. Our 24/7 emergency line is +254 736 123 234." },
  { q: "Are your dental treatments affordable?", a: "We publish transparent pricing and explain every cost before treatment begins. We also offer flexible payment plans on major procedures like braces, veneers, implants and full-mouth rehabilitation." },
  { q: "Is the clinic child-friendly?", a: "Absolutely. We have dedicated children's dentistry with a calm, welcoming environment, kid-safe language and habit-management services like thumb-sucking appliances and mouthguards." },
  { q: "How safe and sterile is your clinic?", a: "We follow strict hospital-grade sterilisation protocols with autoclaved instruments and single-use disposables on every chair, every visit — the same standards used in leading dental hospitals." },
  { q: "What areas do you serve around Mombasa?", a: "We serve patients across Mombasa County including Nyali, Bamburi, Shanzu, Mtwapa, Kilifi and the wider Kenyan coast. Many patients also travel from Nairobi for cosmetic and orthodontic care." },
  { q: "How do I book an appointment?", a: "Use the Book Now button on any page, or message us directly on WhatsApp at +254 706 194 409. We usually confirm within minutes during working hours." },
];

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us | Best Dental Clinic in Mombasa, Kenya | Lebanon Dental Care" },
      { name: "description", content: "Why 1,000+ patients choose Lebanon Dental Care Clinic in Mombasa: 7+ years experience, modern equipment, gentle care, transparent pricing and 24/7 emergency dentistry across Nyali, Bamburi, Shanzu, Mtwapa and Kilifi." },
      { name: "keywords", content: "why choose Lebanon Dental Care, best dental clinic Mombasa, trusted dentist Kenya, gentle dentist Mombasa, affordable dental care Mombasa, emergency dentist Mombasa, family dentist Kenya, dental clinic Nyali, dental clinic Bamburi" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Lebanon Dental Care Clinic" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Why Choose Lebanon Dental Care Clinic | Trusted Dentist in Mombasa" },
      { property: "og:description", content: "7+ years of trusted, gentle, modern dental care in Mombasa, Kenya — with 24/7 emergency dentistry and transparent pricing." },
      { property: "og:image", content: IMAGES.dentist },
      { property: "og:url", content: "https://smile-bright-leb.lovable.app/why-choose-us" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Why Choose Lebanon Dental Care Clinic" },
      { name: "twitter:description", content: "The trusted dental clinic in Mombasa — 7+ years experience, gentle care, transparent pricing." },
      { name: "twitter:image", content: IMAGES.dentist },
    ],
    links: [{ rel: "canonical", href: "https://smile-bright-leb.lovable.app/why-choose-us" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://smile-bright-leb.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Why Choose Us", item: "https://smile-bright-leb.lovable.app/why-choose-us" },
          ],
        }),
      },
    ],
  }),
  component: WhyChooseUsPage,
});

const reasons = [
  { icon: Award, title: "7+ Years Of Experience", text: "Hundreds of successful treatments across cosmetic, orthodontic, restorative and emergency dentistry." },
  { icon: Stethoscope, title: "Modern Equipment", text: "Digital diagnostics, sterilised instruments and up-to-date techniques for safer, more precise care." },
  { icon: HeartHandshake, title: "Gentle, Patient-First Care", text: "We take time to explain every step — from children's first visits to complex adult treatments." },
  { icon: ShieldCheck, title: "Strict Sterilisation Standards", text: "Hospital-grade sterilisation and single-use disposables on every chair, every visit." },
  { icon: Sparkles, title: "Cosmetic Expertise", text: "Veneers, whitening, masking and smile makeovers designed around your natural features." },
  { icon: Clock, title: "24/7 Emergency Line", text: "Sudden pain, swelling or trauma? Call our emergency number any time for immediate guidance." },
  { icon: Users, title: "Family-Friendly", text: "Dedicated children's dentistry and a calm, welcoming environment for every age." },
  { icon: Star, title: "Trusted By 1,000+ Patients", text: "Consistent 5-star reviews from families across Mombasa County and beyond." },
];

const promises = [
  "Transparent pricing before treatment begins",
  "Clear explanations, never rushed",
  "Same-day appointments where possible",
  "Follow-up care and reminders",
  "WhatsApp support for quick questions",
  "Comfort-first sedation options for anxious patients",
];

function WhyChooseUsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Why Choose Us"
        title="Care You Can Trust, Results You Can See"
        subtitle="Lebanon Dental Care Clinic combines 7+ years of clinical experience with modern equipment and a genuinely warm approach — the reasons over a thousand patients keep coming back."
        image={IMAGES.clinic}
        imageAlt="Modern dental clinic interior at Lebanon Dental Care in Mombasa, Kenya — the best dental clinic serving Nyali, Bamburi, Shanzu, Mtwapa and Kilifi"
      />

      <section className="container-page py-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Why Patients Across Mombasa Choose Lebanon Dental Care</h2>
          <p className="mt-3 text-muted-foreground">Eight reasons families in Nyali, Bamburi, Shanzu, Mtwapa and Kilifi trust us with their smiles.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-brand transition">
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-brand text-white">
                <r.icon className="w-6 h-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-brand-soft py-16">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <img src={IMAGES.dentist} alt="Lebanon Dental Care team" className="rounded-3xl shadow-card w-full max-w-md" loading="lazy" />
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our Promise</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">What Every Patient Gets, Every Visit</h2>
            <ul className="mt-6 space-y-3">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-full text-sm font-semibold shadow-brand">
                <Calendar className="w-4 h-4" /> Book An Appointment
              </Link>
              <a href={`tel:${CLINIC.emergency}`} className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent">
                Emergency: {CLINIC.emergency}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">FAQs</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Frequently Asked Questions</h2>
          <p className="mt-3 text-muted-foreground">Everything patients across Mombasa most commonly ask before booking their first visit.</p>
        </div>
        <div className="mt-10 max-w-3xl mx-auto grid gap-4">
          {FAQS.map((f) => (
            <details key={f.q} className="group bg-card rounded-2xl border border-border p-5 shadow-card">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <h3 className="font-display text-base md:text-lg font-bold text-foreground">{f.q}</h3>
                <span className="text-secondary transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-page pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold">Ready For A Healthier, Brighter Smile?</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Join over 1,000 patients who trust Lebanon Dental Care with their smiles. Book your appointment today — we'll take it from there.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link to="/book" className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-full text-sm font-semibold shadow-brand">
            <Calendar className="w-4 h-4" /> Book Now
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent">
            Explore Our Services
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
