import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES, BLOG_POSTS, IMAGES } from "@/data/clinic";
import clinicInterior from "@/assets/best-dental-clinic-mombasa-interior.jpg";
import drRajabChaka from "@/assets/dr-rajab-chaka-dentist-mombasa.png";

const BASE_URL = "https://www.lebanondentals.com";

const abs = (src: string) => (src.startsWith("http") ? src : `${BASE_URL}${src}`);
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

interface SitemapImage {
  src: string;
  title: string;
  caption?: string;
}

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  images?: SitemapImage[];
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          {
            path: "/",
            changefreq: "weekly",
            priority: "1.0",
            images: [
              { src: IMAGES.teamGroup, title: "Lebanon Dental Care Clinic dental team in Mombasa, Kenya" },
              { src: IMAGES.childCheckup, title: "Child dental check-up at Lebanon Dental Care Clinic, Mombasa" },
              { src: IMAGES.drAlone, title: "Dr. Rajab Chaka, lead dentist in Mombasa, Kenya" },
              { src: IMAGES.treatingPatient1, title: "Dentist treating a patient at Lebanon Dental Care, Mombasa" },
              { src: IMAGES.treatingPatient2, title: "Modern dental treatment at Lebanon Dental Care Clinic, Mombasa" },
              { src: IMAGES.equipment, title: "Modern dental equipment at Lebanon Dental Care Clinic, Mombasa" },
            ],
          },
          {
            path: "/about",
            changefreq: "monthly",
            priority: "0.8",
            images: [
              { src: IMAGES.clinic, title: "Lebanon Dental Care Clinic interior in Mombasa, Kenya" },
              { src: IMAGES.drRajab, title: "Dr. Rajab Chaka, lead dentist at Lebanon Dental Care Mombasa" },
              { src: IMAGES.teamGroup, title: "Lebanon Dental Care clinical team, Mombasa" },
            ],
          },
          {
            path: "/why-choose-us",
            changefreq: "monthly",
            priority: "0.9",
            images: [
              {
                src: clinicInterior,
                title: "Best dental clinic in Mombasa — modern clinic interior at Lebanon Dental Care",
                caption:
                  "Modern dental clinic interior at Lebanon Dental Care in Mombasa, Kenya, serving Nyali, Bamburi, Shanzu, Mtwapa and Kilifi",
              },
              {
                src: drRajabChaka,
                title: "Dr. Rajab Chaka, lead dentist at Lebanon Dental Care Clinic in Mombasa",
                caption: "Trusted family and cosmetic dentist in Mombasa, Kenya with 7+ years of experience",
              },
            ],
          },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/book", changefreq: "monthly", priority: "0.9" },
          ...SERVICES.map((s) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
            images: [
              { src: s.image, title: `${s.name} at Lebanon Dental Care Clinic in Mombasa, Kenya` },
              ...(s.gallery ?? []).map((g) => ({
                src: g.src,
                title: `${s.name} — Lebanon Dental Care Mombasa`,
                caption: g.caption,
              })),
            ],
          })),
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
            images: [{ src: p.image, title: `${p.title} — Lebanon Dental Care Clinic, Mombasa` }],
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            ...(e.images ?? []).map((img) =>
              [
                `    <image:image>`,
                `      <image:loc>${esc(abs(img.src))}</image:loc>`,
                `      <image:title>${esc(img.title)}</image:title>`,
                img.caption ? `      <image:caption>${esc(img.caption)}</image:caption>` : null,
                `    </image:image>`,
              ]
                .filter(Boolean)
                .join("\n"),
            ),
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
