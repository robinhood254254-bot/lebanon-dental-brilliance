import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, Heart, Sparkles, Target, Users } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { IMAGES } from "@/data/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Lebanon Dental Care" },
      { name: "description", content: "Meet the Lebanon Dental Care team — 10+ years of experience and 1,000+ patients trusting us with their smiles." },
      { property: "og:title", content: "About Lebanon Dental Care" },
      { property: "og:description", content: "Our story, mission and team of trusted dental professionals." },
      { property: "og:image", content: IMAGES.dentist },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A Modern Dental Clinic Built On Trust"
        subtitle="For over a decade, Lebanon Dental Care has delivered comprehensive, patient-centered dental treatments to families and individuals across the community."
      />

      {/* Story */}
      <section className="container-page py-16 grid lg:grid-cols-2 gap-12 items-center">
        <img src={IMAGES.clinic} alt="Lebanon Dental Care clinic" className="rounded-3xl shadow-card" loading="lazy" />
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our Story</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">A Decade Of Bright Smiles</h2>
          <p className="mt-4 text-muted-foreground">Lebanon Dental Care was founded with a simple promise: deliver world-class dental care in a warm, welcoming environment. What began as a single chair has grown into a fully-equipped modern clinic serving over 1,000 patients.</p>
          <p className="mt-3 text-muted-foreground">We combine clinical excellence with genuine kindness — because every smile we treat belongs to a person whose comfort and confidence matter.</p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-gradient-brand-soft py-16">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "To provide accessible, modern dental care that transforms lives — one healthy smile at a time." },
            { icon: Eye, title: "Our Vision", text: "To be the most trusted dental clinic in our region, known for compassion, precision and lasting results." },
            { icon: Heart, title: "Our Values", text: "Patient-first care, clinical integrity, lifelong learning and an environment that feels like family." },
          ].map((b) => (
            <div key={b.title} className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-brand text-white"><b.icon className="w-6 h-6" /></span>
              <h3 className="mt-4 font-display text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-page py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our Team</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Meet Our Dental Experts</h2>
          <p className="mt-3 text-muted-foreground">Full team portraits coming soon — our lead dentist and clinical staff are ready to welcome you.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Lead Dentist", role: "Coming Soon", image: IMAGES.dentist },
            { name: "Clinical Team", role: "Coming Soon", image: IMAGES.clinic },
            { name: "Pediatric Care", role: "Coming Soon", image: IMAGES.childCheckup },
          ].map((m) => (
            <div key={m.name} className="bg-card rounded-2xl overflow-hidden border border-border shadow-card group">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display font-bold text-lg">{m.name}</h3>
                <p className="text-sm text-secondary font-semibold">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container-page pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gradient-dark rounded-3xl p-8 text-white">
          {[
            { icon: Award, v: "10+", l: "Years Experience" },
            { icon: Users, v: "1,000+", l: "Happy Patients" },
            { icon: Sparkles, v: "16+", l: "Services Offered" },
            { icon: Heart, v: "100%", l: "Patient Care" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <s.icon className="w-7 h-7 text-primary mx-auto" />
              <div className="text-2xl md:text-4xl font-display font-extrabold text-gradient-brand mt-2">{s.v}</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities gallery */}
      <section className="container-page pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our Clinic</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Modern Facilities & Equipment</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[IMAGES.clinic, IMAGES.whiteningProcess, IMAGES.childCheckup, IMAGES.dentist, IMAGES.boyDentist, IMAGES.veneersBA, IMAGES.whiteningBA, IMAGES.dentures].map((img, i) => (
            <img key={i} src={img} alt="" loading="lazy" className="w-full aspect-square object-cover rounded-2xl hover:scale-105 transition-transform duration-500" />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
