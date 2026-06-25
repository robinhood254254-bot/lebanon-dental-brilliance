import { Phone, AlertCircle } from "lucide-react";
import { CLINIC } from "@/data/clinic";

export function EmergencyBar() {
  return (
    <div className="bg-gradient-brand text-white text-xs sm:text-sm">
      <div className="container-page py-2 flex items-center justify-center gap-2 text-center">
        <AlertCircle className="w-4 h-4 shrink-0 animate-pulse" />
        <span className="font-medium">Emergency Dental Care Available.</span>
        <a href={`tel:${CLINIC.emergency}`} className="inline-flex items-center gap-1 font-bold underline underline-offset-2">
          <Phone className="w-3.5 h-3.5" /> {CLINIC.emergencyDisplay}
        </a>
      </div>
    </div>
  );
}
