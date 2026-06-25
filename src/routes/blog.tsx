import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { BLOG_POSTS } from "@/data/clinic";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Dental Blog | Lebanon Dental Care" },
      { name: "description", content: "Expert dental tips, treatment guides and oral health advice from Lebanon Dental Care." },
      { property: "og:title", content: "Dental Blog | Lebanon Dental Care" },
      { property: "og:description", content: "Expert dental tips and oral health advice." },
      { property: "og:image", content: BLOG_POSTS[0].image },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [feat, ...rest] = BLOG_POSTS;
  return (
    <SiteLayout>
      <PageHero eyebrow="Blog" title="Dental Tips & Healthy Smile Guides" subtitle="Stay informed with expert articles from our clinical team." />
      <section className="container-page py-16">
        <Link to="/blog" className="group block bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-brand transition mb-10">
          <div className="grid md:grid-cols-2">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={feat.image} alt={feat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Featured</div>
              <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold">{feat.title}</h2>
              <p className="mt-3 text-muted-foreground">{feat.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{feat.date}</span><span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {feat.read}</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-primary font-semibold">Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></span>
            </div>
          </div>
        </Link>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p) => (
            <article key={p.slug} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-card transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{p.date}</span><span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.read}</span>
                </div>
                <h3 className="mt-2 font-display font-bold text-lg line-clamp-2">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-primary font-semibold text-sm">Read more <ArrowRight className="w-4 h-4" /></span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
