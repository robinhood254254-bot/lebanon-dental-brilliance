import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { CLINIC, IMAGES, SERVICES, buildWhatsAppUrl } from "@/data/clinic";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} | Lebanon Dental Care` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} | Lebanon Dental Care` },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-4 inline-flex text-primary">Back to services</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const s = Route.useLoaderData() as (typeof SERVICES)[number];
  const wa = buildWhatsAppUrl(`Hello Lebanon Dental Care, I'd like to book ${s.name}.`);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark text-white">
        <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        <div className="container-page py-12 md:py-16 relative">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold max-w-3xl">{s.name}</h1>
          <p className="mt-3 text-white/85 max-w-2xl">{s.description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/book" className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-full font-semibold shadow-brand">
              <Calendar className="w-5 h-5" /> Book This Service
            </Link>
            <a href={wa} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[var(--whatsapp)] text-white px-6 py-3 rounded-full font-semibold">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Service image + benefits */}
      <section className="container-page py-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="max-w-md mx-auto w-full">
          <img
            src={s.image}
            alt={s.name}
            loading="lazy"
            className="rounded-2xl shadow-card aspect-[4/3] object-cover w-full"
          />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Why Choose This Treatment</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold">Benefits</h2>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 bg-accent/50 px-4 py-3 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="font-medium text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-brand-soft py-14">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">How This Service Works</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold">What To Expect</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {s.process.map((p, i) => (
              <div key={p.step} className="bg-card rounded-2xl p-6 shadow-card relative">
                <div className="text-5xl font-display font-extrabold text-gradient-brand opacity-30 absolute top-2 right-3">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display font-bold text-lg">{p.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="bg-muted py-16">
        <div className="container-page max-w-3xl">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">FAQs</div>
            <h2 className="mt-2 text-3xl font-display font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="mt-8 space-y-3">
            {s.faqs.map((f) => (
              <details key={f.q} className="group bg-card rounded-2xl border border-border p-5 open:shadow-card">
                <summary className="cursor-pointer flex items-center justify-between font-semibold text-foreground list-none">
                  {f.q}
                  <span className="ml-3 grid place-items-center w-7 h-7 rounded-full bg-accent text-secondary group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="rounded-3xl bg-gradient-brand p-8 md:p-12 text-white shadow-brand grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold">Book Your {s.name} Appointment</h2>
            <p className="mt-2 text-white/85">Call our emergency line <a className="underline font-semibold" href={`tel:${CLINIC.emergency}`}>{CLINIC.emergencyDisplay}</a> or book online.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/book" className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-full font-bold">
              <Calendar className="w-5 h-5" /> Book Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
