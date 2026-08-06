import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { LOGO, SERVICES } from "@/data/clinic";

type NavLink = { to: string; label: string; hasMega?: boolean };
const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services", hasMega: true },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <div className="sticky top-0 z-40">
      <div className={`transition-all ${scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-4"}`}>
        <div className="container-page">
          <header
            className={`flex items-center justify-between gap-3 rounded-full border border-border/60 bg-background/85 backdrop-blur-xl pl-3 pr-2 py-2 sm:pl-4 sm:pr-2 transition-all ${
              scrolled ? "shadow-brand" : "shadow-card"
            }`}
          >
            <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)} aria-label="Lebanon Dental Care">
              <img src={LOGO} alt="Lebanon Dental Care" className="h-11 sm:h-12 md:h-14 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {links.map((l) =>
                l.hasMega ? (
                  <div
                    key={l.to}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleCloseMega}
                  >
                    <Link
                      to={l.to}
                      className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full transition-colors"
                      activeProps={{ className: "text-primary" }}
                    >
                      {l.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-full transition-colors"
                    activeProps={{ className: "text-primary" }}
                  >
                    {l.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/book"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-brand text-white px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold shadow-brand hover:opacity-95 transition"
              >
                <Calendar className="w-4 h-4" /> Book Now
              </Link>
              <button
                className="lg:hidden p-2 rounded-full text-foreground hover:bg-accent"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </header>

          {/* Desktop Mega Menu */}
          {megaOpen && (
            <div
              className="hidden lg:block absolute left-0 right-0 px-4 mt-2 z-40"
              onMouseEnter={openMega}
              onMouseLeave={scheduleCloseMega}
            >
              <div className="container-page">
                <div className="mx-auto max-w-5xl rounded-3xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-brand p-6 animate-fade-up">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our Services</div>
                      <h3 className="mt-1 font-display text-xl font-bold">Comprehensive Dental Care</h3>
                    </div>
                    <Link
                      to="/services"
                      onClick={() => setMegaOpen(false)}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      View all services →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-1 max-h-[60vh] overflow-y-auto">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        onClick={() => setMegaOpen(false)}
                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-accent transition"
                      >
                        <img src={s.image} alt={`${s.name} at Lebanon Dental Care Clinic Mombasa`} className="w-10 h-10 rounded-lg object-cover shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary truncate">{s.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{s.short}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden container-page mt-2">
          <div className="rounded-3xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-brand p-4 animate-fade-up">
            <nav className="flex flex-col">
              {links.map((l) =>
                l.hasMega ? (
                  <div key={l.to} className="border-b border-border/50">
                    <div className="flex items-center justify-between py-3">
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="text-foreground/90 font-medium"
                        activeProps={{ className: "text-primary" }}
                      >
                        {l.label}
                      </Link>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-label="Toggle services list"
                        aria-expanded={mobileServicesOpen}
                        className="p-1.5 rounded-full hover:bg-accent"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <div className="pb-3 pl-2 max-h-72 overflow-y-auto grid gap-1">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="text-sm text-foreground/80 hover:text-primary py-1.5"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="py-3 text-foreground/90 font-medium border-b border-border/50"
                    activeProps={{ className: "text-primary" }}
                  >
                    {l.label}
                  </Link>
                ),
              )}
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-brand text-white px-5 py-3 rounded-full text-sm font-semibold"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
