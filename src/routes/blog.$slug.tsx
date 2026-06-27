import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { BLOG_POSTS, buildWhatsAppUrl } from "@/data/clinic";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Lebanon Dental Care Blog` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: loaderData.image },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/blog/${params.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${params.slug}` }] : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.title,
              description: loaderData.excerpt,
              image: loaderData.image,
              datePublished: loaderData.date,
              author: { "@type": "Organization", name: "Lebanon Dental Care" },
              publisher: { "@type": "Organization", name: "Lebanon Dental Care" },
            }),
          },
        ]
      : [],
  }),
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

        <div className="mt-10 rounded-3xl bg-gradient-brand p-6 md:p-8 text-white shadow-brand flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold">Ready to take action on your smile?</h2>
            <p className="mt-1 text-white/85 text-sm">Book a consultation with the Lebanon Dental Care team today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/book" className="inline-flex items-center gap-2 bg-white text-secondary px-5 py-3 rounded-full font-bold">
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
            <a href={wa} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[var(--whatsapp)] text-white px-5 py-3 rounded-full font-bold">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
