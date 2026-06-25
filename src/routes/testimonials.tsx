import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { IMAGES, TESTIMONIALS } from "@/data/clinic";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials | Lebanon Dental Care" },
      { name: "description", content: "Hear from our 1,000+ happy patients about their experience at Lebanon Dental Care." },
      { property: "og:title", content: "Patient Testimonials" },
      { property: "og:description", content: "Real stories from real patients." },
      { property: "og:image", content: IMAGES.smile1 },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Testimonials" title="Stories From Our Smiling Patients" subtitle="Over 1,000 patients trust us with their smiles. Here's what they say." />
      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card border border-border relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent" />
              <div className="flex text-primary mb-3">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground/85 italic">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Before & After Gallery</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[IMAGES.whiteningBA, IMAGES.veneersBA, IMAGES.cavities, IMAGES.whiteningProcess, IMAGES.dentures, IMAGES.smile1].map((img, i) => (
            <img key={i} src={img} alt="Before and after" loading="lazy" className="w-full aspect-[4/5] object-cover rounded-2xl shadow-card" />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
