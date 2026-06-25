import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Award, Calendar, CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Star, Stethoscope, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { CLINIC, IMAGES, SERVICES, TESTIMONIALS, buildWhatsAppUrl } from "@/data/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lebanon Dental Care | Professional Dental Care in Kenya" },
      { name: "description", content: "Trusted by families for over 10 years with comprehensive dental treatments and modern dental solutions." },
      { property: "og:title", content: "Lebanon Dental Care" },
      { property: "og:description", content: "Professional dental care for a healthier, brighter smile." },
      { property: "og:image", content: IMAGES.dentist },
    ],
  }),
  component: HomePage,
});

const slides = [IMAGES.dentist, IMAGES.childCheckup, IMAGES.clinic, IMAGES.veneersBA, IMAGES.boyDentist];

function Slider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden shadow-brand">
      {slides.map((s, idx) => (
        <img
          key={s}
          src={s}
          alt="Clinic"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-3 bg-white/50"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-card">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <img src={IMAGES.smile1} className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="" />
            <img src={IMAGES.smile2} className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="" />
            <img src={IMAGES.childSmile} className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">1,000+ Happy Patients</div>
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end]);
  return <span>{n.toLocaleString()}{suffix}</span>;
}

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="container-page py-12 md:py-20 relative grid gap-10 lg:grid-cols-2 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-secondary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Your Smile, Our Priority
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] text-foreground">
              Professional Dental Care For A <span className="text-gradient-brand">Healthier, Brighter</span> Smile
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              Trusted by families for over 10 years with comprehensive dental treatments and modern dental solutions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3.5 rounded-full font-semibold shadow-brand hover:scale-[1.02] transition">
                <Calendar className="w-5 h-5" /> Book Appointment
              </Link>
              <a href={buildWhatsAppUrl("Hello Lebanon Dental Care, I would like to make an enquiry.")} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[var(--whatsapp)] text-white px-6 py-3.5 rounded-full font-semibold hover:scale-[1.02] transition">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: Award, label: "10+ Yrs" },
                { icon: Users, label: "1,000+ Patients" },
                { icon: ShieldCheck, label: "Modern Care" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-sm">
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-accent text-secondary"><t.icon className="w-4 h-4" /></span>
                  <span className="font-semibold text-foreground">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <Slider />
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="container-page py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-gradient-dark rounded-3xl p-6 md:p-10 text-white shadow-card">
          {[
            { v: 10, s: "+", l: "Years Experience" },
            { v: 1000, s: "+", l: "Happy Patients" },
            { v: 16, s: "+", l: "Dental Services" },
            { v: 100, s: "%", l: "Patient Care" },
          ].map((c) => (
            <div key={c.l} className="text-center">
              <div className="text-3xl md:text-5xl font-display font-extrabold text-gradient-brand">
                <Counter end={c.v} suffix={c.s} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-wider">{c.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our Services</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Comprehensive Dental Treatments</h2>
          <p className="mt-3 text-muted-foreground">Everything your smile needs under one roof — from routine cleanings to full smile makeovers.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-brand hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gradient-brand-soft py-16">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={IMAGES.dentist} alt="Our team" className="rounded-3xl shadow-brand" loading="lazy" />
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-card max-w-[14rem]">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-primary" />
                <div className="font-bold text-foreground">Modern Equipment</div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">State-of-the-art tools for precise, comfortable care.</p>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Why Choose Us</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Trusted Dental Care, Crafted Around You</h2>
            <p className="mt-3 text-muted-foreground">From your first hello to your healthiest smile, we focus on comfort, clarity and lasting results.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Friendly, certified dental professionals",
                "Modern, sterilised clinical environment",
                "Personalised treatment plans for every patient",
                "Transparent pricing and flexible payment plans",
                "Emergency dental care available",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="container-page py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Real Results</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Before & After Transformations</h2>
          <p className="mt-3 text-muted-foreground">Real patients. Real smiles. Real confidence restored.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { img: IMAGES.whiteningBA, label: "Teeth Whitening" },
            { img: IMAGES.veneersBA, label: "Veneers" },
            { img: IMAGES.cavities, label: "Cavity Restoration" },
          ].map((b) => (
            <div key={b.label} className="group relative rounded-2xl overflow-hidden shadow-card">
              <img src={b.img} alt={b.label} loading="lazy" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase tracking-wider text-white/70">Before & After</div>
                <div className="font-display text-lg font-bold">{b.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted py-16">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Testimonials</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">What Our Patients Say</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <div className="flex text-primary mb-3">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground/80 italic">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 md:p-14 text-white shadow-brand">
          <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold">Ready For Your Healthiest Smile?</h2>
              <p className="mt-3 text-white/85 max-w-xl">Book your appointment online and our team will confirm via WhatsApp. Same-day slots often available.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3.5 rounded-full font-bold hover:scale-105 transition">
                <Calendar className="w-5 h-5" /> Book Appointment
              </Link>
              <a href={`tel:${CLINIC.emergency}`} className="inline-flex items-center gap-2 bg-black/30 text-white px-6 py-3.5 rounded-full font-bold border border-white/30 hover:bg-black/50 transition">
                Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
