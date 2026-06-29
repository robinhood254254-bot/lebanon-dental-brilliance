import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { CLINIC, LOGO, SERVICES } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="relative mt-16 text-white overflow-hidden bg-gradient-brand">
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 relative">
        <div>
          <img src={LOGO} alt="Lebanon Dental Care" className="h-16 md:h-20 w-auto bg-white rounded-2xl p-2 shadow-card" />
          <p className="text-sm text-white/90 leading-relaxed mt-5">
            A modern dental clinic with 7+ years of experience delivering comprehensive, patient-centered dental care.
          </p>
          <p className="mt-4 text-sm font-semibold text-white/95">{CLINIC.tagline}</p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/85">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blog" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/contact", label: "Contact" },
              { to: "/book", label: "Book Appointment" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white hover:underline underline-offset-4 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-white">Our Services</h4>
          <ul className="space-y-2 text-sm text-white/85">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-white hover:underline underline-offset-4 transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 shrink-0 text-white" />
              <div>
                <div>WhatsApp: <a href={`tel:${CLINIC.whatsapp}`} className="hover:underline">{CLINIC.whatsappDisplay}</a></div>
                <div>Emergency: <a href={`tel:${CLINIC.emergency}`} className="hover:underline">{CLINIC.emergencyDisplay}</a></div>
              </div>
            </li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white" />{CLINIC.address}</li>
            <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-white" /><div>
              {CLINIC.hours.map((h) => (
                <div key={h.day}>{h.day}: <span className="font-semibold text-white">{h.time}</span></div>
              ))}
            </div></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 relative">
        <div className="container-page py-5 text-xs text-white/85 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Lebanon Dental Care. All rights reserved.</p>
          <p>Your Smile, Our Priority.</p>
        </div>
      </div>
    </footer>
  );
}
