import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/data/clinic";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl("Hello Lebanon Dental Care, I would like to make an enquiry.")}
      target="_blank"
      rel="noopener"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[var(--whatsapp)] text-white pl-3 pr-4 py-3 rounded-full shadow-brand animate-float-bounce hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
      <span className="grid place-items-center w-9 h-9 rounded-full bg-white/20">
        <MessageCircle className="w-5 h-5" />
      </span>
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">Need Help? Chat With Us</span>
    </a>
  );
}
