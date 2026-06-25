import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, MessageCircle, Send } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { CLINIC, SERVICES, buildWhatsAppUrl } from "@/data/clinic";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Appointment | Lebanon Dental Care" },
      { name: "description", content: "Book your dental appointment online — instant confirmation via WhatsApp." },
      { property: "og:title", content: "Book Appointment | Lebanon Dental Care" },
      { property: "og:description", content: "Easy online booking with instant WhatsApp confirmation." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0].name,
    date: "",
    time: "",
    notes: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Lebanon Dental Care,

Appointment Request

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}
Date: ${form.date}
Time: ${form.time}
Notes: ${form.notes || "-"}

I would like to book an appointment.`;
    window.open(buildWhatsAppUrl(message), "_blank");
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Book Appointment"
        title="Schedule Your Visit"
        subtitle="Fill in the form below and your details will be sent directly to our WhatsApp for fast confirmation."
      />
      <section className="container-page py-16 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <form onSubmit={onSubmit} className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" name="name" value={form.name} onChange={onChange} required />
            <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={onChange} required />
          </div>
          <Field label="Email Address" name="email" type="email" value={form.email} onChange={onChange} />
          <div>
            <label className="block text-sm font-semibold mb-1.5">Service Needed</label>
            <select name="service" value={form.service} onChange={onChange} required className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none">
              {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Preferred Date" name="date" type="date" value={form.date} onChange={onChange} required />
            <Field label="Preferred Time" name="time" type="time" value={form.time} onChange={onChange} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Additional Notes</label>
            <textarea name="notes" rows={4} value={form.notes} onChange={onChange} className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Anything we should know?" />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-brand text-white py-3.5 rounded-full font-bold shadow-brand hover:scale-[1.01] transition">
            <Send className="w-5 h-5" /> Submit Booking via WhatsApp
          </button>
          <p className="text-xs text-muted-foreground text-center">Submitting opens WhatsApp with your details pre-filled.</p>
        </form>

        <aside className="space-y-6">
          <div className="bg-gradient-dark text-white rounded-3xl p-6 shadow-card">
            <h3 className="font-display text-xl font-bold">Need Help?</h3>
            <p className="text-white/75 text-sm mt-2">Our team is one tap away. Reach us directly on WhatsApp or call our emergency line.</p>
            <div className="mt-4 flex flex-col gap-2">
              <a href={buildWhatsAppUrl("Hello Lebanon Dental Care, I would like to make an enquiry.")} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[var(--whatsapp)] px-5 py-3 rounded-full font-semibold">
                <MessageCircle className="w-4 h-4" /> WhatsApp {CLINIC.whatsappDisplay}
              </a>
              <a href={`tel:${CLINIC.emergency}`} className="inline-flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full font-semibold border border-white/20">
                <Calendar className="w-4 h-4" /> Emergency {CLINIC.emergencyDisplay}
              </a>
            </div>
          </div>
          <div className="bg-accent rounded-3xl p-6">
            <h3 className="font-display text-xl font-bold text-secondary">Clinic Hours</h3>
            <ul className="mt-3 space-y-1 text-sm text-foreground">
              {CLINIC.hours.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-secondary/10 py-2"><span>{h.day}</span><span className="font-semibold">{h.time}</span></li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, value, onChange, type = "text", required }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5">{label}{required && <span className="text-primary">*</span>}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-background border border-input rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
      />
    </div>
  );
}
