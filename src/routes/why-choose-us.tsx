import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, ShieldCheck, Sparkles, Stethoscope, Clock, Users, Star, CheckCircle2, Calendar } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { CLINIC, IMAGES } from "@/data/clinic";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Lebanon Dental Care Clinic | Trusted Dentist in Mombasa" },
      { name: "description", content: "Discover why families across Mombasa, Nyali, Bamburi, Shanzu, Mtwapa and Kilifi choose Lebanon Dental Care — 7+ years of experience, modern equipment, gentle care and transparent pricing." },
      { name: "keywords", content: "why choose Lebanon Dental Care, best dental clinic Mombasa, trusted dentist Kenya, gentle dentist Mombasa, affordable dental care Mombasa" },
      { property: "og:title", content: "Why Choose Lebanon Dental Care Clinic" },
      { property: "og:description", content: "7+ years of trusted, gentle, modern dental care in Mombasa, Kenya." },
      { property: "og:image", content: IMAGES.dentist },
      { property: "og:url", content: "https://smile-bright-leb.lovable.app/why-choose-us" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.dentist },
    ],
    links: [{ rel: "canonical", href: "https://smile-bright-leb.lovable.app/why-choose-us" }],
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
      />

      <section className="container-page py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-brand transition">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-brand text-white">
              <r.icon className="w-6 h-6" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
          </div>
        ))}
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

      <section className="container-page py-16 text-center">
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
