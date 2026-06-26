import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { LOGO } from "@/data/clinic";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-background/70 backdrop-blur"
      }`}
    >
      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)} aria-label="Lebanon Dental Care">
          <img src={LOGO} alt="Lebanon Dental Care" className="h-14 sm:h-16 md:h-20 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/book"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-brand hover:opacity-95 transition"
          >
            <Calendar className="w-4 h-4" /> Book Now
          </Link>
          <button
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <nav className="container-page py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/90 font-medium border-b border-border/50"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-brand text-white px-5 py-3 rounded-full text-sm font-semibold"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
