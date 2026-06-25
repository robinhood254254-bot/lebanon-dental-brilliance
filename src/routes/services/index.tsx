import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { SERVICES } from "@/data/clinic";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Dental Services | Lebanon Dental Care" },
      { name: "description", content: "Explore our complete range of dental services — from teeth cleaning and braces to veneers, root canals, dentures and emergency care." },
      { property: "og:title", content: "Dental Services in Kenya | Lebanon Dental Care" },
      { property: "og:description", content: "Comprehensive dental services with modern equipment and a patient-first approach." },
      { property: "og:image", content: SERVICES[0].image },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Complete Dental Care Under One Roof"
        subtitle="From preventive cleanings to full smile makeovers, our team offers a comprehensive range of treatments built around your comfort and long-term oral health."
      />
      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
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
      </section>
    </SiteLayout>
  );
}
