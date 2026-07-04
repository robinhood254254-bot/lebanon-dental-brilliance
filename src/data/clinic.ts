import img1 from "@/assets/image.png";
import img3 from "@/assets/image-3.png";
import img4 from "@/assets/image-4.png";
import img5 from "@/assets/image-5.png";
import img6 from "@/assets/image-6.png";
import img7 from "@/assets/image-7.png";
import img8 from "@/assets/image-8.png";
import img9 from "@/assets/image-9.png";
import img10 from "@/assets/image-10.png";
import img11 from "@/assets/image-11.png";
import img12 from "@/assets/image-12.png";
import img13 from "@/assets/image-13.png";
import img14 from "@/assets/image-14.png";
import img15 from "@/assets/image-15.png";
import img16 from "@/assets/image-16.png";
import img17 from "@/assets/image-17.png";
import img18 from "@/assets/image-18.png";
import img19 from "@/assets/image-19.png";
import logo from "@/assets/logo.png";
import forceps from "@/assets/forceps.png";
import clinic from "@/assets/clinic-interior.jpg";
// dentist portrait replaced by Dr. Rajab (upload-36)
import smile1 from "@/assets/smile-1.jpg";
import smile2 from "@/assets/smile-2.jpg";
import svcCleaning1 from "@/assets/svc-cleaning-1.png";
import svcCleaning2 from "@/assets/svc-cleaning-2.png";
import svcRemovable1 from "@/assets/svc-removable-1.png";
import svcRemovable2 from "@/assets/svc-removable-2.png";
import svcBracesCeramic from "@/assets/svc-braces-ceramic.png";
import svcDentureFlexible from "@/assets/svc-denture-flexible.jpg";
import svcDentureCobalt from "@/assets/svc-denture-cobalt.png";
import svcDenturePartial from "@/assets/svc-denture-partial.png";
import svcRetainerTypes from "@/assets/svc-retainer-types.png";
import svcRetainerClear from "@/assets/svc-retainer-clear.png";
import svcHabitBreaker from "@/assets/svc-habit-breaker.png";
import svcThumbSucking from "@/assets/svc-thumb-sucking.png";
import svcMouthguardFit from "@/assets/svc-mouthguard-fit.png";
import svcMouthguardCase from "@/assets/svc-mouthguard-case.png";
import teethMasking from "@/assets/upload-34.png";
import smileMakeover from "@/assets/upload-35.png";
import drRajab from "@/assets/upload-36.png";
import drRajab2 from "@/assets/upload-37.png";
import teamGroup from "@/assets/upload-38.png";
import drAlone from "@/assets/upload-39.png";
import treatingPatient1 from "@/assets/upload-40.png";
import treatingPatient2 from "@/assets/upload-41.png";

void img1;

export const LOGO = logo;
export const IMAGES = {
  logo,
  logoFull: img19,
  cavities: img3,
  childCheckup: img4,
  whiteningBA: img5,
  veneersBA: img6,
  childSmile: img7,
  boyDentist: img8,
  whiteningProcess: img9,
  dentures: img10,
  bracesGirl: img11,
  removableAppliances: img12,
  rootCanal: img13,
  toothExtraction: img14,
  surgicalExtraction: img15,
  fixedDenturesBA: img16,
  retainersGuide: img17,
  gumDisease: img18,
  equipment: forceps,
  clinic,
  dentist: drRajab,
  drRajab,
  drRajab2,
  teamGroup,
  drAlone,
  treatingPatient1,
  treatingPatient2,
  teethMasking,
  smileMakeover,
  smile1,
  smile2,
  svcCleaning1,
  svcCleaning2,
  svcRemovable1,
  svcRemovable2,
  svcBracesCeramic,
  svcDentureFlexible,
  svcDentureCobalt,
  svcDenturePartial,
  svcRetainerTypes,
  svcRetainerClear,
  svcHabitBreaker,
  svcThumbSucking,
  svcMouthguardFit,
  svcMouthguardCase,
};

export const CLINIC = {
  name: "Lebanon Dental Care",
  tagline: "Your Smile, Our Priority",
  whatsapp: "254706194409",
  whatsappDisplay: "+254 706 194 409",
  emergency: "254736123234",
  emergencyDisplay: "+254 736 123 234",
  email: "info@lebanondentals.com",
  hours: [
    { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday & Public Holidays", time: "Appointments & Emergencies Only" },
  ],
  address: "Lebanon Dental Care Clinic, Kenya",
  mapLink:
    "https://www.google.com/local/place/fid/0x184013573c0284cb:0x47817c1945afde0a/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3D7SMSHFHPjvccUIcH_Yw6fQ%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D172.86574%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFjdTTVNIRkhQanZjY1VJY0hfWXc2ZlE%3D",
};

export const buildWhatsAppUrl = (message: string, phone = CLINIC.whatsapp) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  benefits: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
  gallery?: { src: string; caption: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "teeth-masking",
    name: "Teeth Masking",
    short: "Cosmetic masking for stained or discoloured teeth.",
    description:
      "Restore your smile's natural appearance with our advanced teeth masking treatment that conceals discolouration, stains and minor imperfections.",
    image: IMAGES.teethMasking,
    benefits: ["Natural look", "Same-day results", "Non-invasive", "Long-lasting"],
    process: [
      { step: "Consultation", detail: "We assess your teeth and discuss desired outcomes." },
      { step: "Shade Matching", detail: "Custom shade match for a natural finish." },
      { step: "Application", detail: "Careful layering of masking material." },
      { step: "Polish & Reveal", detail: "Final polish for a seamless smile." },
    ],
    faqs: [
      { q: "Is teeth masking painful?", a: "No. The procedure is comfortable and non-invasive." },
      { q: "How long does it last?", a: "With good oral hygiene, results last several years." },
    ],
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning",
    short: "Professional scaling and polishing for healthy gums.",
    description:
      "Routine professional cleaning removes plaque, tartar and surface stains keeping your gums healthy and your smile bright.",
    image: IMAGES.svcCleaning1,
    benefits: ["Prevents gum disease", "Removes tartar", "Brightens smile", "Fresh breath"],
    process: [
      { step: "Examination", detail: "Quick oral health assessment." },
      { step: "Scaling", detail: "Ultrasonic removal of plaque and tartar." },
      { step: "Polishing", detail: "Stain removal and smooth finish." },
      { step: "Fluoride", detail: "Protective fluoride application." },
    ],
    faqs: [
      { q: "How often should I clean?", a: "Every 6 months for optimal oral health." },
      { q: "Will it hurt?", a: "Cleaning is comfortable for most patients." },
    ],
    gallery: [
      { src: IMAGES.svcCleaning1, caption: "Before & after — heavy tartar removal" },
      { src: IMAGES.svcCleaning2, caption: "Lower arch scaling — stain & calculus removed" },
    ],
  },
  {
    slug: "fixed-orthodontics",
    name: "Fixed Orthodontics (Braces)",
    short: "Traditional braces that align your smile beautifully.",
    description:
      "Our fixed braces use modern brackets and wires to gradually straighten teeth and correct bite issues for a confident, lasting smile.",
    image: IMAGES.bracesGirl,
    benefits: ["Permanent correction", "Improves bite", "Boosts confidence", "Affordable plans"],
    process: [
      { step: "Assessment & X-rays", detail: "Clinical examination with standard X-rays (no CBCT needed) to plan your treatment." },
      { step: "Study Models", detail: "We take impressions to create study and working models for accurate planning." },
      { step: "RCT Where Needed", detail: "Any required root canal treatment is done first to prevent the spread of infection during orthodontics." },
      { step: "Surgical Extraction", detail: "Where space is needed, careful surgical extraction is done before fitting braces." },
      { step: "Fitting", detail: "Brackets and wires bonded to your teeth — stainless steel or discreet ceramic." },
      { step: "Adjustments & Retention", detail: "Monthly tightening visits, then retainers to maintain results." },
    ],
    faqs: [
      { q: "How long is treatment?", a: "Typically 12–24 months depending on case." },
      { q: "Are braces painful?", a: "Mild discomfort after adjustments, manageable easily." },
    ],
    gallery: [
      { src: IMAGES.svcBracesCeramic, caption: "Ceramic & stainless steel braces — discreet, effective alignment" },
    ],
  },
  {
    slug: "removable-orthodontic-appliances",
    name: "Removable Orthodontic Appliances",
    short: "Discreet, removable aligners and appliances.",
    description:
      "Removable appliances offer flexibility for minor corrections, growth guidance in children and post-treatment retention.",
    image: IMAGES.removableAppliances,
    benefits: ["Removable for eating", "Easy hygiene", "Comfortable", "Discreet"],
    process: [
      { step: "Impressions", detail: "Impressions for study and working models." },
      { step: "Custom Build", detail: "Lab-fabricated appliance." },
      { step: "Fitting", detail: "Comfortable fitting session." },
      { step: "Review", detail: "Regular progress checks." },
    ],
    faqs: [
      { q: "Can I eat with them?", a: "Remove during meals for best results." },
      { q: "How do I clean them?", a: "Brush gently and soak in cleaning solution." },
    ],
    gallery: [
      { src: IMAGES.svcRemovable1, caption: "Custom expansion appliance — lab and in-mouth view" },
      { src: IMAGES.svcRemovable2, caption: "Wire-and-acrylic removable appliance in place" },
    ],
  },
  {
    slug: "teeth-filling",
    name: "Teeth Filling",
    short: "Tooth-coloured fillings that restore decayed teeth.",
    description:
      "Modern composite fillings restore decayed or chipped teeth with a natural appearance and durable function.",
    image: IMAGES.cavities,
    benefits: ["Natural appearance", "Strong bond", "Quick procedure", "Long lasting"],
    process: [
      { step: "Numbing", detail: "Gentle local anaesthesia." },
      { step: "Decay Removal", detail: "Careful removal of damaged tissue." },
      { step: "Filling", detail: "Composite material shaped and bonded." },
      { step: "Polish", detail: "Smooth finish for comfortable bite." },
    ],
    faqs: [
      { q: "How long does a filling last?", a: "Composite fillings typically last 7–10+ years." },
      { q: "Will it match my teeth?", a: "Yes, we shade-match for a seamless look." },
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    short: "Save your natural tooth and relieve pain.",
    description:
      "Root canal therapy removes infected pulp from inside a tooth, relieving pain and saving the tooth from extraction.",
    image: IMAGES.rootCanal,
    benefits: ["Saves natural tooth", "Pain relief", "Prevents spread", "Lasting result"],
    process: [
      { step: "Diagnosis", detail: "X-ray and clinical examination." },
      { step: "Access & Clean", detail: "Infected pulp removed, canals cleaned." },
      { step: "Sealing", detail: "Canals filled and sealed." },
      { step: "Crown", detail: "Protective crown placed if needed." },
    ],
    faqs: [
      { q: "Is it painful?", a: "Modern techniques make it as comfortable as a filling." },
      { q: "How many visits?", a: "Usually 1–2 visits depending on complexity." },
    ],
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    short: "Gentle removal of teeth that cannot be saved.",
    description:
      "When a tooth is beyond repair, we perform comfortable extractions with care to ensure quick healing.",
    image: IMAGES.toothExtraction,
    benefits: ["Pain relief", "Prevents infection", "Quick procedure", "Gentle technique"],
    process: [
      { step: "Anaesthesia", detail: "Local numbing for comfort." },
      { step: "Extraction", detail: "Careful removal of the tooth." },
      { step: "Aftercare", detail: "Gauze and clear instructions." },
      { step: "Follow-up", detail: "Healing review and replacement options." },
    ],
    faqs: [
      { q: "Will I feel pain?", a: "The area is numbed; you feel pressure not pain." },
      { q: "Recovery time?", a: "Initial healing within 3–7 days." },
    ],
  },
  {
    slug: "surgical-extraction",
    name: "Surgical Extraction",
    short: "Advanced removal for impacted or complex cases.",
    description:
      "Surgical extractions handle impacted wisdom teeth and broken roots safely with expert technique.",
    image: IMAGES.surgicalExtraction,
    benefits: ["Resolves impactions", "Prevents complications", "Expert care", "Modern equipment"],
    process: [
      { step: "Imaging", detail: "Detailed X-rays or CBCT scan." },
      { step: "Sedation", detail: "Comfort-focused anaesthesia." },
      { step: "Surgery", detail: "Careful surgical removal." },
      { step: "Recovery", detail: "Detailed aftercare plan." },
    ],
    faqs: [
      { q: "Sedation options?", a: "Local anaesthesia with optional sedation available." },
      { q: "Healing time?", a: "Typically 1–2 weeks for full healing." },
    ],
  },
  {
    slug: "veneers",
    name: "Veneers",
    short: "Custom porcelain veneers for a flawless smile.",
    description:
      "Veneers are ultra-thin porcelain shells bonded to the front of teeth to transform shape, colour and alignment.",
    image: IMAGES.veneersBA,
    benefits: ["Flawless aesthetics", "Stain resistant", "Natural look", "Long lasting"],
    process: [
      { step: "Smile Design", detail: "Digital preview of your new smile." },
      { step: "Preparation", detail: "Minimal tooth preparation." },
      { step: "Fabrication", detail: "Custom porcelain veneers crafted." },
      { step: "Bonding", detail: "Secure final placement." },
    ],
    faqs: [
      { q: "How long do veneers last?", a: "10–15+ years with good care." },
      { q: "Are they reversible?", a: "Minimal enamel removal makes them permanent." },
    ],
  },
  {
    slug: "fixed-dentures",
    name: "Fixed Dentures (Crowns & Bridges)",
    short: "Permanent crowns and bridges that look natural.",
    description:
      "Replace missing or damaged teeth with custom crowns and bridges that restore function and aesthetics.",
    image: IMAGES.fixedDenturesBA,
    benefits: ["Permanent fix", "Natural feel", "Restores chewing", "Beautiful smile"],
    process: [
      { step: "Preparation", detail: "Adjacent teeth prepared." },
      { step: "Impressions", detail: "Precise digital scans." },
      { step: "Temporary", detail: "Temporary crown while lab fabricates." },
      { step: "Final Fit", detail: "Permanent cementation." },
    ],
    faqs: [
      { q: "How long do they last?", a: "15+ years with proper care." },
      { q: "Will it match?", a: "Custom shade matching for natural look." },
    ],
  },
  {
    slug: "removable-dentures",
    name: "Removable Dentures",
    short: "Comfortable full or partial removable dentures.",
    description:
      "Restore your smile and chewing function with custom-fitted removable dentures crafted for comfort.",
    image: IMAGES.dentures,
    benefits: ["Affordable", "Restores function", "Natural look", "Easy maintenance"],
    process: [
      { step: "Consultation", detail: "Comprehensive assessment." },
      { step: "Impressions", detail: "Custom-fit mould." },
      { step: "Try-in", detail: "Wax try-in for adjustments." },
      { step: "Delivery", detail: "Final dentures and care guide." },
    ],
    faqs: [
      { q: "Adjustment period?", a: "Typically 2–4 weeks to feel fully comfortable." },
      { q: "How to clean?", a: "Daily brushing and overnight soaking." },
    ],
    gallery: [
      { src: IMAGES.svcDentureFlexible, caption: "Flexible Dentures — lightweight, gum-coloured and metal-free for a discreet fit." },
      { src: IMAGES.svcDentureCobalt, caption: "Cobalt Chromium Dentures — strong, slim metal framework that lasts for years." },
      { src: IMAGES.svcDenturePartial, caption: "Removable Partial Dentures — replace a few missing teeth while preserving the rest." },
    ],
  },
  {
    slug: "dental-retainers",
    name: "Dental Retainers",
    short: "Custom retainers to keep your smile in place.",
    description:
      "After orthodontic treatment, retainers maintain your beautiful new alignment for life.",
    image: IMAGES.retainersGuide,
    benefits: ["Maintains alignment", "Custom fit", "Discreet", "Durable"],
    process: [
      { step: "Scan", detail: "Impressions for working models." },
      { step: "Fabrication", detail: "Custom retainer made." },
      { step: "Fitting", detail: "Comfort check and adjustments." },
      { step: "Instructions", detail: "Care and wear guidance." },
    ],
    faqs: [
      { q: "How long to wear?", a: "Full-time initially, then nights only." },
      { q: "How to clean?", a: "Brush gently and soak as advised." },
    ],
    gallery: [
      { src: IMAGES.svcRetainerTypes, caption: "Types of retainers we offer — Hawley, clear plastic and fixed bonded." },
      { src: IMAGES.svcRetainerClear, caption: "Custom clear transparent retainer — virtually invisible when worn." },
    ],
  },
  {
    slug: "oral-habits-management",
    name: "Oral Habits Management",
    short: "Habit breakers for thumb and digit sucking.",
    description:
      "Custom oral appliances that gently stop harmful habits like thumb and digit sucking in children — protecting developing teeth, bite alignment and jaw growth.",
    image: IMAGES.svcHabitBreaker,
    benefits: [
      "Stops thumb & digit sucking",
      "Protects developing bite",
      "Prevents open bite & protrusion",
      "Custom, comfortable fit",
    ],
    process: [
      { step: "Assessment", detail: "Clinical examination to identify the habit and its effects on teeth, bite and jaw." },
      { step: "Impressions", detail: "Impressions taken for study and working models to design a custom appliance." },
      { step: "Custom Fabrication", detail: "Habit breaker fabricated in the lab to fit your child's mouth precisely." },
      { step: "Fitting & Review", detail: "Comfortable fitting with clear wear instructions and regular review visits." },
    ],
    faqs: [
      { q: "At what age should a child use a habit breaker?", a: "Usually from age 5–7 if the thumb or digit sucking habit has not stopped on its own." },
      { q: "How long is the appliance worn?", a: "Typically 6–12 months depending on how quickly the habit stops and the bite improves." },
    ],
    gallery: [
      { src: IMAGES.svcHabitBreaker, caption: "Thumb & Digit Sucking Habit Breaker — fixed appliance that gently discourages sucking." },
      { src: IMAGES.svcThumbSucking, caption: "Effects of prolonged thumb sucking — open bite and protruded front teeth corrected with habit breakers." },
    ],
  },
  {
    slug: "teeth-grinding-management",
    name: "Teeth Grinding Management",
    short: "Custom night guards for bruxism and teeth grinding.",
    description:
      "Custom-made night guards that protect your teeth from the wear, fractures and jaw pain caused by bruxism (teeth grinding) and clenching — for both children and adults.",
    image: IMAGES.svcMouthguardFit,
    benefits: [
      "Protects teeth from grinding wear",
      "Relieves jaw & muscle pain",
      "Prevents tooth fractures",
      "Custom-fit for comfort",
    ],
    process: [
      { step: "Assessment", detail: "Clinical examination to confirm bruxism and check for tooth wear, sensitivity and jaw symptoms." },
      { step: "Impressions", detail: "Accurate impressions taken for study and working models of your bite." },
      { step: "Custom Fabrication", detail: "Night guard fabricated in the lab from durable material to fit your bite precisely." },
      { step: "Fitting & Review", detail: "Comfortable fitting with wear and care instructions, plus follow-up reviews." },
    ],
    faqs: [
      { q: "Is a night guard comfortable to sleep in?", a: "Yes. It is custom-made to your bite so most patients adapt within a few nights." },
      { q: "How do I care for my night guard?", a: "Rinse after each use, brush gently with a soft brush, and store dry in its protective case." },
    ],
    gallery: [
      { src: IMAGES.svcMouthguardFit, caption: "Custom night guard being fitted to protect against bruxism and grinding wear." },
      { src: IMAGES.svcMouthguardCase, caption: "Custom night guard in its protective case — worn at night to prevent grinding wear." },
    ],
  },

  {
    slug: "childrens-dentistry",
    name: "Children's Dentistry",
    short: "Gentle dental care designed for kids.",
    description:
      "Friendly, gentle dental care to help children build healthy habits and love visiting the dentist.",
    image: IMAGES.childSmile,
    benefits: ["Kid-friendly", "Preventive focus", "Education", "Gentle care"],
    process: [
      { step: "Welcome", detail: "Friendly intro to the clinic." },
      { step: "Examination", detail: "Gentle child-focused checkup." },
      { step: "Cleaning", detail: "Fun, comfortable cleaning." },
      { step: "Education", detail: "Brushing and habits guidance." },
    ],
    faqs: [
      { q: "First visit age?", a: "By age 1 or first tooth eruption." },
      { q: "How often?", a: "Every 6 months." },
    ],
  },
  {
    slug: "emergency-dental-care",
    name: "Emergency Dental Care",
    short: "Same-day urgent dental treatment.",
    description:
      "We provide rapid emergency dental care for severe pain, trauma, swelling and broken teeth.",
    image: IMAGES.clinic,
    benefits: ["Same-day care", "Pain relief", "Trauma management", "24/7 hotline"],
    process: [
      { step: "Call", detail: "Reach our emergency line." },
      { step: "Triage", detail: "Quick clinical assessment." },
      { step: "Treatment", detail: "Immediate pain relief and care." },
      { step: "Follow-up", detail: "Comprehensive treatment plan." },
    ],
    faqs: [
      { q: "What counts as emergency?", a: "Severe pain, trauma, swelling, bleeding." },
      { q: "Can I come without booking?", a: "Yes, call us first for fastest service." },
    ],
  },
  {
    slug: "gum-disease-treatment",
    name: "Gum Disease Treatment",
    short: "Restore healthy gums and prevent tooth loss.",
    description:
      "From early gingivitis to advanced periodontitis, we offer effective treatment to restore gum health.",
    image: IMAGES.gumDisease,
    benefits: ["Saves teeth", "Reduces inflammation", "Improves health", "Fresh breath"],
    process: [
      { step: "Assessment", detail: "Periodontal charting." },
      { step: "Deep Cleaning", detail: "Scaling and root planing." },
      { step: "Therapy", detail: "Antimicrobial treatment if needed." },
      { step: "Maintenance", detail: "Regular periodontal reviews." },
    ],
    faqs: [
      { q: "Is gum disease reversible?", a: "Early stages yes, advanced is manageable." },
      { q: "Signs to watch?", a: "Bleeding, swelling, persistent bad breath." },
    ],
  },
  {
    slug: "smile-makeovers",
    name: "Smile Makeovers",
    short: "Total transformation of your smile.",
    description:
      "A combination of cosmetic treatments tailored to give you the smile of your dreams.",
    image: IMAGES.smileMakeover,
    benefits: ["Complete transformation", "Custom plan", "Boosts confidence", "Long-lasting"],
    process: [
      { step: "Consultation", detail: "Goals and smile analysis." },
      { step: "Design", detail: "Digital smile preview." },
      { step: "Treatment", detail: "Combination of procedures." },
      { step: "Reveal", detail: "Your dream smile delivered." },
    ],
    faqs: [
      { q: "How long does it take?", a: "Anywhere from weeks to a few months." },
      { q: "Is it painful?", a: "Most steps are comfortable with minimal downtime." },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  read: string;
  content: string[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
  serviceSlug?: string;
  ctaServiceName?: string;
  faqs?: { q: string; a: string }[];
  internalLinks?: (
    | { kind: "service"; label: string; slug: string }
    | { kind: "blog"; label: string; slug: string }
    | { kind: "route"; label: string; to: "/" | "/about" | "/services" | "/blog" | "/book" | "/contact" | "/testimonials" }
  )[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-dentist-in-mombasa",
    title: "Best Dentist in Mombasa: How to Choose the Right Dental Clinic for Your Family",
    excerpt: "A practical guide for patients searching for a trusted dentist in Mombasa, Nyali, Bamburi, Shanzu, Mtwapa and Kilifi.",
    image: IMAGES.teamGroup,
    date: "Jun 18, 2026",
    read: "7 min",
    seoTitle: "Best Dentist in Mombasa | Lebanon Dental Care Clinic",
    seoDescription: "Looking for the best dentist in Mombasa? Learn what to check before booking dental care in Mombasa, Nyali, Bamburi, Shanzu, Mtwapa and Kilifi.",
    keywords: "best dentist in Mombasa, dental clinic Mombasa, dental hospitals in Mombasa, dentist Nyali, dentist Bamburi, Lebanon Dental Care, Lebanon Dentals",
    ctaServiceName: "Dental Consultation",
    serviceSlug: "teeth-cleaning",
    content: [
      "When people search for the best dentist in Mombasa, they are usually looking for more than a nearby clinic. They want a dental team that listens, explains treatment clearly, uses modern equipment and delivers results that feel comfortable, natural and long-lasting. Lebanon Dental Care serves patients from Mombasa, Nyali, Bamburi, Shanzu, Mtwapa, Kilifi and surrounding communities with a practical focus on prevention, urgent pain relief and confident smile restoration.",
      "A good dental clinic should make diagnosis simple to understand. Before treatment begins, the dentist should examine your mouth, explain what is causing the problem, show the available options and help you choose the right plan for your budget and long-term health. This matters whether you need a routine cleaning, braces, a filling, root canal treatment, tooth extraction, dentures, veneers or emergency dental care.",
      "Results are what patients care about most. The right dental treatment should reduce pain, improve chewing, freshen breath, protect the gums, restore broken or missing teeth and give you the confidence to smile in photos and conversations. Regular checkups and professional cleanings also prevent small issues from becoming bigger problems that cost more to fix later.",
      "For families, convenience and trust are important. Children need gentle care that builds confidence from an early age, while adults often need flexible appointments, clear aftercare and fast help during emergencies. Lebanon Dental Care keeps appointment booking simple through WhatsApp and provides an emergency line for urgent dental pain, swelling, trauma or broken teeth.",
      "If you are comparing dental hospitals in Mombasa or searching for Lebanon Dentals online, the safest next step is to book a consultation. A dentist can assess your exact concern, recommend the most suitable treatment and give you a clear path toward a healthier, brighter smile.",
    ],
    faqs: [
      { q: "What should I look for in a dentist in Mombasa?", a: "Look for clear diagnosis, modern equipment, gentle treatment, transparent communication, emergency support and a clinic that offers the services your family needs." },
      { q: "Does Lebanon Dental Care treat both adults and children?", a: "Yes. The clinic provides dental care for adults, children and families, including preventive care, cosmetic treatments, orthodontics and emergency dentistry." },
      { q: "Can I book a dental appointment through WhatsApp?", a: "Yes. You can book directly through WhatsApp for fast confirmation, or call the emergency line for urgent dental pain or trauma." },
    ],
    internalLinks: [
      { kind: "route", label: "Book an appointment", to: "/book" },
      { kind: "route", label: "View all dental services", to: "/services" },
      { kind: "service", label: "Teeth Cleaning", slug: "teeth-cleaning" },
      { kind: "service", label: "Emergency Dental Care", slug: "emergency-dental-care" },
    ],
  },
  {
    slug: "dental-hospitals-in-mombasa",
    title: "Dental Hospitals in Mombasa: When to Visit a Dental Clinic and What to Expect",
    excerpt: "What patients should know when searching for dental hospitals and dental clinics in Mombasa for pain relief, checkups and smile treatment.",
    image: IMAGES.clinic,
    date: "Jun 12, 2026",
    read: "6 min",
    seoTitle: "Dental Hospitals in Mombasa | Lebanon Dental Care",
    seoDescription: "Searching for dental hospitals in Mombasa? Learn when to visit a dentist, what happens during treatment and how Lebanon Dental Care helps patients.",
    keywords: "dental hospitals in Mombasa, dental clinic Mombasa, dentist Mombasa, dental hospital Kenya, Lebanon Dental Care, Lebanon Dentals",
    ctaServiceName: "Dental Checkup",
    serviceSlug: "emergency-dental-care",
    content: [
      "Patients often search for dental hospitals in Mombasa when they have tooth pain, swelling, bleeding gums, a broken tooth or a problem that has started affecting eating, sleeping or speaking. A dental clinic is the right place to diagnose the cause quickly and provide treatment before the condition becomes more serious.",
      "During your visit, the dentist checks the teeth, gums, bite and soft tissues, then may recommend an X-ray where needed. This helps confirm whether the issue is decay, infection, gum disease, trauma, impacted teeth or a failed filling. A clear diagnosis prevents guesswork and makes treatment safer and more predictable.",
      "The expected result depends on the service. A cleaning should leave the mouth fresher and gums healthier. A filling should restore tooth shape and stop decay from spreading. A root canal should remove infection and save the natural tooth. An extraction should relieve pain when a tooth cannot be saved. Cosmetic treatments should improve smile appearance while protecting function.",
      "Lebanon Dental Care supports patients who need routine dentistry and urgent care. The team handles cleanings, fillings, root canal treatment, braces, dentures, oral habit appliances, teeth grinding management, children’s dentistry and emergency dental care, giving families one place for most dental needs.",
      "If you are unsure whether your dental problem is urgent, contact the clinic. Tooth pain, facial swelling, trauma, bleeding that does not stop, fever with dental pain or a broken tooth should be assessed quickly through an emergency appointment.",
    ],
    faqs: [
      { q: "When should I visit a dental clinic urgently?", a: "Visit urgently for severe toothache, swelling, trauma, a broken tooth, bleeding that will not stop, infection signs or pain that affects sleep." },
      { q: "Do dental hospitals in Mombasa offer routine cleanings?", a: "Yes. Routine checkups and professional cleanings are important preventive services that help avoid gum disease, cavities and costly dental emergencies." },
      { q: "Can one clinic handle both emergency and cosmetic dental care?", a: "Yes. Lebanon Dental Care provides urgent dental care as well as preventive, restorative, orthodontic and cosmetic treatments." },
    ],
    internalLinks: [
      { kind: "service", label: "Emergency Dental Care", slug: "emergency-dental-care" },
      { kind: "service", label: "Root Canal Treatment", slug: "root-canal-treatment" },
      { kind: "service", label: "Teeth Filling", slug: "teeth-filling" },
      { kind: "route", label: "Contact Lebanon Dental Care", to: "/contact" },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment in Mombasa: Save Your Tooth and Stop Dental Pain",
    excerpt: "A patient-friendly guide to root canal treatment, symptoms, results and when to book an appointment in Mombasa.",
    image: IMAGES.rootCanal,
    date: "Jun 06, 2026",
    read: "7 min",
    seoTitle: "Root Canal Treatment in Mombasa | Lebanon Dental Care",
    seoDescription: "Need root canal treatment in Mombasa? Learn symptoms, procedure steps, results and how Lebanon Dental Care helps save infected teeth.",
    keywords: "root canal treatment Mombasa, root canal Kenya, tooth pain Mombasa, dental infection treatment, Lebanon Dental Care, dentist Mombasa",
    ctaServiceName: "Root Canal Treatment",
    serviceSlug: "root-canal-treatment",
    content: [
      "Root canal treatment is used to save a tooth when the nerve or pulp inside becomes infected or inflamed. This often happens because of deep decay, a cracked tooth, repeated dental work or an untreated cavity. Common symptoms include severe toothache, pain when biting, prolonged sensitivity to hot or cold, gum swelling, a darkened tooth or a pimple-like swelling near the gum.",
      "The main result patients want is relief from pain — and that is exactly what root canal treatment is designed to achieve. Once the infected pulp is removed and the canals are cleaned, the pressure and inflammation inside the tooth reduce. Many patients feel much better shortly after treatment and can return to normal eating once the tooth is restored.",
      "At Lebanon Dental Care, the process starts with diagnosis and an X-ray. The tooth is numbed, the infected tissue is carefully removed, the canals are cleaned and shaped, and the space is sealed to prevent reinfection. In many cases, a crown is recommended afterward to protect the tooth from fracture and restore full chewing strength.",
      "Saving a natural tooth is usually better than removing it. Extraction may stop pain, but it leaves a gap that can affect chewing, speech, alignment and jawbone support. A successful root canal allows you to keep your tooth, maintain your bite and avoid the extra cost of replacing a missing tooth later.",
      "If you have ongoing tooth pain in Mombasa, do not wait for the infection to spread. Book a root canal assessment early so the dentist can confirm whether the tooth can be saved and start treatment before swelling or severe infection develops.",
    ],
    faqs: [
      { q: "Is root canal treatment painful?", a: "Modern root canal treatment is done with local anaesthesia, so most patients feel pressure rather than pain. It is often compared to having a filling." },
      { q: "How many visits does a root canal take?", a: "Many root canals take one to two visits, depending on the tooth, infection level and whether a crown or additional restoration is needed." },
      { q: "What result should I expect after a root canal?", a: "The goal is pain relief, infection control and saving your natural tooth so you can chew comfortably again." },
    ],
    internalLinks: [
      { kind: "service", label: "Root Canal Treatment Service", slug: "root-canal-treatment" },
      { kind: "service", label: "Teeth Filling", slug: "teeth-filling" },
      { kind: "service", label: "Fixed Dentures & Crowns", slug: "fixed-dentures" },
      { kind: "blog", label: "When Should You Visit a Dentist?", slug: "when-should-you-visit-a-dentist" },
    ],
  },
  {
    slug: "emergency-dentist-in-mombasa",
    title: "Emergency Dentist in Mombasa: What to Do for Tooth Pain, Swelling or Trauma",
    excerpt: "Know the signs of a dental emergency and how to get fast help for severe toothache, swelling, broken teeth or dental injuries.",
    image: IMAGES.treatingPatient2,
    date: "May 30, 2026",
    read: "6 min",
    seoTitle: "Emergency Dentist in Mombasa | Lebanon Dental Care",
    seoDescription: "Need an emergency dentist in Mombasa? Learn what to do for tooth pain, swelling, broken teeth and trauma, and book urgent dental care.",
    keywords: "emergency dentist Mombasa, toothache Mombasa, dental emergency Kenya, urgent dentist Mombasa, broken tooth treatment, Lebanon Dental Care",
    ctaServiceName: "Emergency Dental Care",
    serviceSlug: "emergency-dental-care",
    content: [
      "Dental emergencies are problems that need fast attention because they involve severe pain, infection, trauma or bleeding. A toothache that keeps you awake, facial swelling, a knocked-out tooth, a broken tooth, pus around the gum or pain with fever should never be ignored. These symptoms can worsen quickly without treatment.",
      "The first goal in an emergency appointment is to reduce pain and stop the problem from spreading. The dentist checks the cause, may take an X-ray and then recommends the safest immediate treatment. This may include medication, drainage of infection, a filling, root canal treatment, extraction or temporary stabilisation of a broken tooth.",
      "Results depend on how quickly you seek help. Early treatment can save teeth that might otherwise be lost, prevent infection from spreading to the face or jaw, and help you return to normal eating and sleeping sooner. Waiting often makes treatment more complicated and more expensive.",
      "If a tooth is knocked out, hold it by the crown, avoid scrubbing the root, keep it moist in milk or saliva and call the clinic immediately. For swelling, do not apply heat to the face; contact the emergency line for guidance. For a broken tooth, keep any fragments and avoid chewing on that side until you are seen.",
      "Lebanon Dental Care provides urgent support for dental pain and emergencies in Mombasa and nearby areas. Use the emergency number for urgent cases and the booking form for planned appointments.",
    ],
    faqs: [
      { q: "What counts as a dental emergency?", a: "Severe toothache, swelling, trauma, uncontrolled bleeding, broken teeth, knocked-out teeth and signs of infection should be treated as urgent." },
      { q: "Can an emergency dentist save a painful tooth?", a: "Often yes. If treated early, root canal treatment, fillings or other procedures may save the natural tooth." },
      { q: "Should I call before coming for an emergency?", a: "Yes. Calling helps the team prepare, advise you on immediate steps and guide you to the fastest available care." },
    ],
    internalLinks: [
      { kind: "service", label: "Emergency Dental Care", slug: "emergency-dental-care" },
      { kind: "service", label: "Root Canal Treatment", slug: "root-canal-treatment" },
      { kind: "service", label: "Tooth Extraction", slug: "tooth-extraction" },
      { kind: "route", label: "Book urgent appointment", to: "/book" },
    ],
  },
  {
    slug: "lebanon-dental-care-mombasa",
    title: "Lebanon Dental Care Mombasa: Dental Services, Results and How to Book",
    excerpt: "Learn about Lebanon Dental Care, the treatments available and how patients can book dental appointments in Mombasa.",
    image: IMAGES.drRajab,
    date: "May 24, 2026",
    read: "6 min",
    seoTitle: "Lebanon Dental Care Mombasa | Lebanon Dentals Official Website",
    seoDescription: "Official Lebanon Dental Care website. Explore dental services in Mombasa, results patients can expect and how to book through WhatsApp.",
    keywords: "Lebanon Dental Care, Lebanon Dentals, Lebanon Dental Care Mombasa, dental clinic Mombasa, dentist Mombasa, dental hospital Mombasa",
    ctaServiceName: "Dental Appointment",
    serviceSlug: "teeth-cleaning",
    content: [
      "Lebanon Dental Care is a dental clinic serving patients in Mombasa and nearby areas with preventive, restorative, cosmetic, orthodontic, children’s and emergency dental care. Patients searching for Lebanon Dentals or Lebanon Dental Care online should use the official website to explore services and book appointments directly.",
      "The clinic provides professional teeth cleaning, fillings, root canal treatment, tooth extraction, surgical extraction, braces, removable orthodontic appliances, retainers, dentures, crowns and bridges, oral habit management, teeth grinding management, children’s dentistry, gum disease treatment and smile makeover services.",
      "The result of good dental care is not only a better-looking smile. Patients also want pain relief, stronger chewing, healthier gums, fresher breath, better tooth alignment, protection from grinding damage and confidence when speaking or smiling. Each treatment plan is built around the patient’s concern and the long-term health of the mouth.",
      "Booking is straightforward. You can use the appointment form to send your details through WhatsApp for fast confirmation. For emergencies such as severe toothache, swelling, broken teeth or trauma, use the emergency contact number so the team can guide you quickly.",
      "If you have been relying only on the Google Business Profile, this website gives more detail about services, treatment expectations, FAQs and direct booking options so you can make an informed decision before visiting the clinic.",
    ],
    faqs: [
      { q: "Is this the official Lebanon Dental Care website?", a: "Yes. This website provides official information about Lebanon Dental Care services, contacts, appointment booking and patient guides." },
      { q: "What dental services does Lebanon Dental Care offer?", a: "Services include cleanings, fillings, root canals, extractions, braces, dentures, retainers, children’s dentistry, gum treatment, emergency care and cosmetic dentistry." },
      { q: "How do I book at Lebanon Dental Care?", a: "Use the booking page or WhatsApp button to send your appointment request. For urgent pain or trauma, call the emergency line." },
    ],
    internalLinks: [
      { kind: "route", label: "Book an appointment", to: "/book" },
      { kind: "route", label: "About Lebanon Dental Care", to: "/about" },
      { kind: "route", label: "Contact the clinic", to: "/contact" },
      { kind: "service", label: "Emergency Dental Care", slug: "emergency-dental-care" },
    ],
  },
  {
    slug: "benefits-of-teeth-cleaning",
    title: "Benefits of Teeth Cleaning: Why a Six-Month Professional Cleaning Matters",
    excerpt: "Why a 6-month professional cleaning is essential for healthy gums and a brighter smile.",
    image: IMAGES.treatingPatient1,
    date: "May 10, 2026",
    read: "4 min",
    seoTitle: "Benefits of Teeth Cleaning in Mombasa | Lebanon Dental Care",
    seoDescription: "Learn why six-month professional teeth cleaning improves gum health, fresh breath and brighter smiles. Book teeth cleaning in Mombasa today.",
    keywords: "teeth cleaning Mombasa, dental cleaning Kenya, professional teeth cleaning, healthy gums, Lebanon Dental Care",
    ctaServiceName: "Teeth Cleaning",
    serviceSlug: "teeth-cleaning",
    content: [
      "Professional teeth cleaning is one of the simplest and most effective ways to protect your oral health. Even with diligent brushing and flossing, plaque and tartar build up in places a toothbrush cannot reach — especially along the gumline and between the back teeth. Left alone, this hardened deposit irritates the gums and is the leading cause of tooth decay and gum disease.",
      "During a cleaning at Lebanon Dental Care, our hygienists use ultrasonic scalers to gently lift away tartar, followed by a polish that removes surface stains from coffee, tea and tobacco. The result is brighter, smoother teeth and noticeably fresher breath. We finish with a fluoride application that strengthens enamel and helps prevent new cavities for months.",
      "Most patients benefit from a professional cleaning every six months. If you smoke, have a history of gum disease or wear braces, we may recommend more frequent visits. Regular cleanings cost far less than the fillings, root canals and extractions they help you avoid — making them the single best investment in your long-term smile.",
      "The results are easy to notice: gums bleed less, breath feels fresher, stains reduce and your teeth feel smoother when you run your tongue over them. Cleaning also gives the dentist a chance to spot cavities, gum pockets or early cracks before they become painful emergencies.",
    ],
    faqs: [
      { q: "How often should I book teeth cleaning?", a: "Most patients should book professional teeth cleaning every six months, while patients with gum disease, braces or heavy tartar may need more frequent visits." },
      { q: "Does professional cleaning whiten teeth?", a: "Cleaning removes surface stains and can make teeth look brighter, but it is different from whitening treatment that changes tooth shade." },
      { q: "What results should I expect after cleaning?", a: "Expect smoother teeth, fresher breath, reduced tartar and healthier gums when combined with good brushing and flossing at home." },
    ],
    internalLinks: [
      { kind: "service", label: "Teeth Cleaning Service", slug: "teeth-cleaning" },
      { kind: "service", label: "Gum Disease Treatment", slug: "gum-disease-treatment" },
      { kind: "blog", label: "Daily Dental Hygiene Tips", slug: "dental-hygiene-tips" },
      { kind: "route", label: "Book teeth cleaning", to: "/book" },
    ],
  },
  {
    slug: "how-braces-improve-your-smile",
    title: "How Braces Improve Your Smile",
    excerpt: "Modern orthodontics straightens teeth and corrects bite issues for life-long confidence.",
    image: IMAGES.whiteningProcess,
    date: "May 02, 2026",
    read: "6 min",
    seoTitle: "How Braces Improve Your Smile | Braces in Mombasa",
    seoDescription: "Learn how braces improve alignment, bite function, cleaning and smile confidence. Book orthodontic consultation at Lebanon Dental Care.",
    keywords: "braces Mombasa, orthodontics Kenya, fixed braces, removable orthodontic appliances, Lebanon Dental Care",
    ctaServiceName: "Braces Consultation",
    serviceSlug: "fixed-orthodontics",
    content: [
      "Braces do far more than straighten crooked teeth. By gradually guiding teeth into their ideal positions, they correct overbites, underbites, crossbites and crowding — all of which can cause uneven wear, jaw pain and difficulty chewing if left untreated. A properly aligned bite also makes brushing and flossing easier, which lowers your risk of cavities and gum disease for the rest of your life.",
      "At Lebanon Dental Care we offer modern fixed braces with smaller, more comfortable brackets, as well as removable orthodontic appliances for milder cases and growing children. Treatment typically takes 12 to 24 months, with short monthly adjustment visits. Most patients are surprised by how quickly they get used to wearing them and how visible the progress becomes within just a few months.",
      "The confidence boost that follows is just as important as the clinical result. Patients tell us they smile more freely in photos, speak more openly in meetings and feel better about themselves day to day. After treatment we provide custom retainers so your new smile stays exactly where it should — for good.",
      "The best results come from correct diagnosis, consistent appointments and wearing retainers after treatment. This protects the investment and keeps the teeth stable long after braces are removed.",
    ],
    faqs: [
      { q: "How long do braces take?", a: "Many braces cases take 12 to 24 months, depending on crowding, bite correction and patient cooperation." },
      { q: "Do braces only improve appearance?", a: "No. Braces also improve bite function, cleaning access, speech comfort and long-term tooth wear." },
      { q: "Will I need retainers after braces?", a: "Yes. Retainers help keep the teeth in their corrected positions after orthodontic treatment." },
    ],
    internalLinks: [
      { kind: "service", label: "Fixed Orthodontics", slug: "fixed-orthodontics" },
      { kind: "service", label: "Removable Appliances", slug: "removable-orthodontic-appliances" },
      { kind: "service", label: "Dental Retainers", slug: "dental-retainers" },
      { kind: "route", label: "Book braces consultation", to: "/book" },
    ],
  },
  {
    slug: "understanding-root-canal-treatment",
    title: "Understanding Root Canal Treatment",
    excerpt: "Save your natural tooth with virtually pain-free modern root canal therapy.",
    image: IMAGES.cavities,
    date: "Apr 18, 2026",
    read: "5 min",
    seoTitle: "Understanding Root Canal Treatment | Dentist in Mombasa",
    seoDescription: "Understand root canal treatment, symptoms, pain relief and tooth-saving results from Lebanon Dental Care in Mombasa.",
    keywords: "root canal treatment, root canal Mombasa, tooth infection, tooth pain, Lebanon Dental Care",
    ctaServiceName: "Root Canal Treatment",
    serviceSlug: "root-canal-treatment",
    content: [
      "A root canal is needed when the soft pulp inside a tooth becomes infected or inflamed — usually from deep decay, a cracked tooth or repeated dental work. Without treatment the infection spreads, leading to severe pain, swelling and eventual loss of the tooth. The good news is that a root canal saves the tooth and stops the pain almost immediately.",
      "Modern techniques have made root canal treatment routine and comfortable. We numb the area thoroughly, gently remove the infected pulp, clean and shape the inner canals, then seal them to prevent re-infection. Most patients tell us it feels no different from having a filling, and many sleep that night without pain for the first time in weeks.",
      "After the canal is sealed, a crown is usually placed to protect the tooth and restore full chewing strength. With good oral hygiene a root-canal-treated tooth can last a lifetime — far better than extraction, which leads to bone loss and the need for an implant or bridge.",
      "The most important result is keeping your natural tooth. Early treatment can stop infection, restore chewing comfort and prevent the gap that follows extraction." ,
    ],
    faqs: [
      { q: "Can a root canal stop tooth pain?", a: "Yes. Removing infected pulp and sealing the canals is designed to stop pain and control infection." },
      { q: "Is extraction better than root canal treatment?", a: "When a tooth can be saved, root canal treatment is usually preferred because it preserves natural chewing and avoids a missing-tooth gap." },
      { q: "Will I need a crown after treatment?", a: "Back teeth and heavily damaged teeth often need crowns to restore strength after root canal treatment." },
    ],
    internalLinks: [
      { kind: "blog", label: "Root Canal Treatment in Mombasa", slug: "root-canal-treatment" },
      { kind: "service", label: "Root Canal Treatment Service", slug: "root-canal-treatment" },
      { kind: "service", label: "Fixed Dentures & Crowns", slug: "fixed-dentures" },
      { kind: "route", label: "Book root canal assessment", to: "/book" },
    ],
  },
  {
    slug: "dental-hygiene-tips",
    title: "Daily Dental Hygiene Tips",
    excerpt: "Simple habits to keep your smile healthy, white and cavity-free at home.",
    image: IMAGES.treatingPatient2,
    date: "Apr 05, 2026",
    read: "3 min",
    content: [
      "Great oral health starts at home. Brush twice a day for a full two minutes with a soft-bristled toothbrush and fluoride toothpaste, paying special attention to the gumline where plaque collects. Replace your brush every three months — or sooner if the bristles look frayed — because a worn brush simply cannot clean effectively.",
      "Flossing once a day is non-negotiable. It removes the plaque and food particles your brush cannot reach between teeth, where most cavities and gum problems begin. If traditional floss is awkward, interdental brushes or a water flosser work just as well. Pair this with an alcohol-free mouthwash for an extra layer of protection against bacteria.",
      "Finally, watch what you eat and drink. Sugary snacks, sodas and frequent sipping of acidic drinks dramatically increase your cavity risk. Drink plenty of water, chew sugar-free gum after meals to stimulate saliva, and visit Lebanon Dental Care every six months for a professional checkup and cleaning.",
    ],
  },
  {
    slug: "childrens-dental-care-guide",
    title: "Children's Dental Care Guide",
    excerpt: "How to nurture healthy dental habits from your child's very first tooth.",
    image: IMAGES.childSmile,
    date: "Mar 22, 2026",
    read: "5 min",
    content: [
      "Healthy adult teeth begin with healthy baby teeth. Start cleaning your child's mouth even before the first tooth appears by wiping the gums with a soft, damp cloth after feeds. Once that first tooth erupts — usually around six months — switch to a tiny soft-bristled brush with a smear of fluoride toothpaste the size of a grain of rice.",
      "Your child's first dental visit should happen by their first birthday or within six months of the first tooth. Early visits are short, friendly and focused on prevention. They help your child get used to the clinic, allow us to spot problems early and give parents practical advice on feeding, thumb-sucking and brushing technique.",
      "As your child grows, lead by example. Brush together, make it fun with songs or timers, and limit sugary snacks and juice. Regular six-monthly checkups, fluoride applications and protective sealants on the back teeth will set your child up for a lifetime of confident, cavity-free smiles.",
    ],
  },
  {
    slug: "when-should-you-visit-a-dentist",
    title: "When Should You Visit a Dentist?",
    excerpt: "Symptoms you should never ignore — and routine visits that protect your smile.",
    image: IMAGES.dentist,
    date: "Mar 14, 2026",
    read: "4 min",
    content: [
      "Most people should visit the dentist every six months for a checkup and professional cleaning, even when nothing feels wrong. Many dental problems — cavities, early gum disease, cracked fillings — cause no pain until they are advanced and expensive to fix. Routine visits catch these issues while they are still small and easy to treat.",
      "Some symptoms call for an immediate appointment. Persistent toothache, sensitivity to hot or cold, bleeding gums, bad breath that won't go away, loose teeth, jaw pain or a swelling on the face all signal a problem that will not resolve on its own. Trauma to a tooth, a knocked-out tooth or a broken filling should be seen the same day.",
      "If you are pregnant, have diabetes, smoke or are about to start orthodontic treatment, you may need more frequent visits. Call Lebanon Dental Care any time you are unsure — our team will happily advise whether you can wait for your next routine appointment or should be seen sooner.",
    ],
  },
  {
    slug: "how-veneers-transform-smiles",
    title: "How Veneers Transform Smiles",
    excerpt: "Veneers can correct shape, colour and alignment in just a few visits.",
    image: IMAGES.veneersBA,
    date: "Feb 28, 2026",
    read: "6 min",
    content: [
      "Veneers are ultra-thin shells of porcelain or composite bonded to the front of your teeth. They are one of the fastest ways to transform a smile because a single set can correct multiple issues at once — discolouration that whitening cannot fix, chips and worn edges, small gaps between teeth, and mild crowding or unevenness.",
      "The process at Lebanon Dental Care usually takes two or three visits. We start with a consultation where we listen to what you want and design your new smile digitally so you can preview the result. Minimal preparation of the tooth surface follows, impressions are taken, and your custom veneers are crafted in a specialist lab before being precisely bonded into place.",
      "With good care — twice-daily brushing, flossing and regular checkups — quality porcelain veneers can last 10 to 15 years or longer. They resist staining better than natural enamel, so your bright new smile stays bright. For many of our patients, veneers are the single most life-changing treatment we offer.",
    ],
  },
  {
    slug: "preventing-gum-disease",
    title: "Preventing Gum Disease",
    excerpt: "Early signs of gum disease and the proven steps to reverse them.",
    image: IMAGES.gumDisease,
    date: "Feb 12, 2026",
    read: "5 min",
    content: [
      "Gum disease is the leading cause of tooth loss in adults — and yet it is almost entirely preventable. It begins as gingivitis, with symptoms most people dismiss: gums that bleed when brushing, slight redness or puffiness, persistent bad breath. At this stage, professional cleaning and improved home care can fully reverse the damage.",
      "Left untreated, gingivitis progresses to periodontitis. The infection spreads below the gumline, destroying the bone that holds your teeth in place. Teeth start to feel loose, gums recede and the gaps between teeth widen. Treatment is still possible but becomes more involved, requiring deep cleaning, antimicrobial therapy and sometimes minor surgery.",
      "Prevention is straightforward: brush twice daily, floss every day, avoid tobacco and visit Lebanon Dental Care every six months. If you have noticed bleeding when you brush, book an appointment now — catching gum disease early is the single best thing you can do to keep your natural teeth for life.",
    ],
  },
];

export const TESTIMONIALS = [
  { name: "Achieng O.", text: "The team transformed my smile with veneers. I finally have the confidence to smile in every photo!", image: IMAGES.smile1, rating: 5, treatment: "Veneers" },
  { name: "Brian K.", text: "Professional, friendly and gentle. My root canal was painless — I can't recommend Lebanon Dental Care enough.", image: IMAGES.smile2, rating: 5, treatment: "Root Canal" },
  { name: "Mary W.", text: "My kids actually look forward to dental visits now. The pediatric team is amazing.", image: IMAGES.childSmile, rating: 5, treatment: "Children's Dentistry" },
  { name: "Joseph M.", text: "Whitening results blew me away. Same-day appointment and modern equipment.", image: IMAGES.whiteningBA, rating: 5, treatment: "Teeth Whitening" },
  { name: "Faith N.", text: "The most thorough cleaning I've ever had. My gums feel brand new.", image: IMAGES.dentist, rating: 5, treatment: "Teeth Cleaning" },
  { name: "Daniel A.", text: "Emergency care saved my tooth after an accident. Forever grateful.", image: IMAGES.clinic, rating: 5, treatment: "Emergency Care" },
];
