import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { CLINIC, LOGO, SERVICES, buildWhatsAppUrl } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-white mt-16">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={LOGO} alt="Lebanon Dental Care" className="h-12 w-12 rounded-xl bg-black p-1" />
            <div>
              <div className="font-display font-bold">{CLINIC.name}</div>
              <div className="text-xs text-white/60">{CLINIC.tagline}</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            A modern dental clinic with 10+ years of experience delivering comprehensive, patient-centered dental care.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={buildWhatsAppUrl("Hello Lebanon Dental Care, I have a question.")} target="_blank" rel="noopener" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="WhatsApp"><MessageCircle className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
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
                <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" /><div>
              <div>WhatsApp: <a href={`tel:${CLINIC.whatsapp}`} className="hover:text-primary">{CLINIC.whatsappDisplay}</a></div>
              <div>Emergency: <a href={`tel:${CLINIC.emergency}`} className="hover:text-primary">{CLINIC.emergencyDisplay}</a></div>
            </div></li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" /><a href={`mailto:${CLINIC.email}`} className="hover:text-primary">{CLINIC.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />{CLINIC.address}</li>
            <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" /><div>
              {CLINIC.hours.map((h) => (
                <div key={h.day}>{h.day}: <span className="text-white">{h.time}</span></div>
              ))}
            </div></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Lebanon Dental Care. All rights reserved.</p>
          <p>Your Smile, Our Priority.</p>
        </div>
      </div>
    </footer>
  );
}
