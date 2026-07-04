import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { BLOG_POSTS, buildWhatsAppUrl } from "@/data/clinic";

const SITE_URL = "https://smile-bright-leb.lovable.app";
const absoluteImage = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src.startsWith("/") ? src : `/${src}`}`);

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    const url = `${SITE_URL}/blog/${params.slug}`;
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData;
    return {
      meta: [
        { title: p.seoTitle ?? `${p.title} | Lebanon Dental Care Blog` },
        { name: "description", content: p.seoDescription ?? p.excerpt },
        { name: "keywords", content: p.keywords ?? `${p.title}, dental blog Kenya, dentist Mombasa, Lebanon Dental Care` },
        { property: "og:title", content: p.seoTitle ?? p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: absoluteImage(p.image) },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: p.seoTitle ?? p.title },
        { name: "twitter:description", content: p.excerpt },
        { name: "twitter:image", content: absoluteImage(p.image) },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            image: absoluteImage(p.image),
            datePublished: p.date,
            articleBody: p.content.join("\n\n"),
            author: { "@type": "Organization", name: "Lebanon Dental Care" },
            publisher: {
              "@type": "Organization",
              name: "Lebanon Dental Care",
              logo: { "@type": "ImageObject", url: "https://smile-bright-leb.lovable.app/logo.png" },
            },
            mainEntityOfPage: url,
          }),
        },
        ...(p.faqs && p.faqs.length > 0
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: p.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              },
            ]
          : []),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://smile-bright-leb.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://smile-bright-leb.lovable.app/blog" },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-flex text-primary">Back to blog</Link>
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
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData() as (typeof BLOG_POSTS)[number];
  const wa = buildWhatsAppUrl(`Hello Lebanon Dental Care, I read your article "${post.title}" and would like to book a consultation.`);
  const serviceCta = post.serviceSlug ? `Book ${post.ctaServiceName ?? "This Service"}` : "Book Appointment";

  return (
    <SiteLayout>
      <article className="container-page py-10 md:py-14 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold leading-tight">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.read}</span>
        </div>
        <div className="mt-6 rounded-2xl overflow-hidden shadow-card aspect-[16/9] max-h-80">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="prose mt-8 max-w-none">
          {post.content.map((p, i) => (
            <p key={i} className="text-foreground/85 text-base md:text-lg leading-relaxed mb-5">{p}</p>
          ))}
        </div>

        {post.internalLinks && post.internalLinks.length > 0 && (
          <section className="mt-8 rounded-2xl border border-border bg-accent/40 p-5">
            <h2 className="font-display text-xl font-bold text-foreground">Related dental services and guides</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.internalLinks.map((link) => {
                if (link.kind === "service") {
                  return (
                    <Link key={`${link.kind}-${link.slug}`} to="/services/$slug" params={{ slug: link.slug }} className="inline-flex items-center gap-1 rounded-full bg-card px-4 py-2 text-sm font-semibold text-secondary border border-border hover:text-primary transition">
                      {link.label} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  );
                }
                if (link.kind === "blog") {
                  return (
                    <Link key={`${link.kind}-${link.slug}`} to="/blog/$slug" params={{ slug: link.slug }} className="inline-flex items-center gap-1 rounded-full bg-card px-4 py-2 text-sm font-semibold text-secondary border border-border hover:text-primary transition">
                      {link.label} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  );
                }
                return (
                  <Link key={`${link.kind}-${link.to}`} to={link.to} className="inline-flex items-center gap-1 rounded-full bg-card px-4 py-2 text-sm font-semibold text-secondary border border-border hover:text-primary transition">
                    {link.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-3">
              {post.faqs.map((f) => (
                <details key={f.q} className="group bg-card rounded-2xl border border-border p-5 open:shadow-card">
                  <summary className="cursor-pointer flex items-center justify-between font-semibold text-foreground list-none">
                    {f.q}
                    <span className="ml-3 grid place-items-center w-7 h-7 rounded-full bg-accent text-secondary group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 rounded-3xl bg-gradient-brand p-6 md:p-8 text-white shadow-brand flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold">Ready to take action on your smile?</h2>
            <p className="mt-1 text-white/85 text-sm">Book a consultation with the Lebanon Dental Care team today, or call our emergency line for urgent dental pain.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/book" className="inline-flex items-center gap-2 bg-white text-secondary px-5 py-3 rounded-full font-bold">
              <Calendar className="w-4 h-4" /> {serviceCta}
            </Link>
            {post.serviceSlug && (
              <Link to="/services/$slug" params={{ slug: post.serviceSlug }} className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-3 rounded-full font-bold border border-white/30">
                View Service <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            <a href={wa} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[var(--whatsapp)] text-white px-5 py-3 rounded-full font-bold">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
