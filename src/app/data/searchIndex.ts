export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
}

export const searchIndex: SearchItem[] = [
  // ── Pages ─────────────────────────────────────────────────────────────────
  {
    title: "Home",
    description: "A'MIS Group — three specialist studios under one roof: technology, photography, and video production.",
    href: "#/",
    category: "Page",
    tags: ["home", "amis group", "studios", "creative technology"],
  },
  {
    title: "About Us",
    description: "Learn about A'MIS Group — our story, mission, values, and the team behind our three studios.",
    href: "#/about",
    category: "Page",
    tags: ["about", "story", "mission", "vision", "values", "team", "history"],
  },
  {
    title: "Services",
    description: "Explore all services across Creotech, Captura and Cinemix — technology, photography and video.",
    href: "#/services",
    category: "Page",
    tags: ["services", "what we do", "offerings"],
  },
  {
    title: "Portfolio",
    description: "Browse selected work from across our three studios — web, mobile, branding, photography and video.",
    href: "#/portfolio",
    category: "Page",
    tags: ["portfolio", "work", "projects", "case studies", "showcase"],
  },
  {
    title: "Careers",
    description: "Join A'MIS Group. View open roles and send your portfolio to work with us.",
    href: "#/careers",
    category: "Page",
    tags: ["careers", "jobs", "hiring", "work with us", "vacancies", "openings"],
  },
  {
    title: "Contact Us",
    description: "Get in touch with A'MIS Group. Start a project or reach the right studio directly.",
    href: "#/contact",
    category: "Page",
    tags: ["contact", "get in touch", "email", "phone", "enquiry", "quote"],
  },
  {
    title: "FAQ",
    description: "Answers to common questions about our services, studios, process, pricing and timelines.",
    href: "#/faq",
    category: "Page",
    tags: ["faq", "questions", "help", "pricing", "process", "timeline"],
  },

  // ── Studios ───────────────────────────────────────────────────────────────
  {
    title: "A'MIS Creotech",
    description: "Our technology & creative studio — software development, web design, mobile apps, UI/UX, branding and digital marketing.",
    href: "#/creotech",
    category: "Studio",
    tags: ["creotech", "technology", "software", "web", "mobile", "design", "branding", "marketing", "studio 01"],
  },
  {
    title: "A'MIS Captura",
    description: "Our professional photography studio — commercial, editorial, product, corporate, events and aerial photography.",
    href: "#/captura",
    category: "Studio",
    tags: ["captura", "photography", "photo", "commercial", "editorial", "product", "corporate", "drone", "studio 02"],
  },
  {
    title: "A'MIS Cinemix",
    description: "Our cinematic video production studio — brand films, documentaries, social content, post-production and motion graphics.",
    href: "#/cinemix",
    category: "Studio",
    tags: ["cinemix", "video", "film", "production", "documentary", "motion graphics", "social content", "editing", "studio 03"],
  },

  // ── Creotech Services ─────────────────────────────────────────────────────
  {
    title: "Software Development",
    description: "Scalable, enterprise-grade software built for performance and long-term growth.",
    href: "#/creotech",
    category: "Creotech Service",
    tags: ["software", "development", "enterprise", "backend", "frontend", "engineering", "code"],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform iOS and Android apps, full lifecycle from concept to delivery.",
    href: "#/creotech",
    category: "Creotech Service",
    tags: ["mobile", "app", "ios", "android", "react native", "flutter", "cross-platform"],
  },
  {
    title: "Web Design & Development",
    description: "High-performance websites and web apps built to convert and engage.",
    href: "#/creotech",
    category: "Creotech Service",
    tags: ["web design", "web development", "website", "landing page", "ecommerce"],
  },
  {
    title: "UI/UX Design",
    description: "Research-backed interfaces that delight users and drive engagement.",
    href: "#/creotech",
    category: "Creotech Service",
    tags: ["ui", "ux", "user interface", "user experience", "design", "figma", "prototype"],
  },
  {
    title: "Graphic Design",
    description: "Brand identities and marketing materials that make a lasting impression.",
    href: "#/creotech",
    category: "Creotech Service",
    tags: ["graphic design", "branding", "logo", "identity", "print", "marketing materials"],
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that grow reach and maximise ROI.",
    href: "#/creotech",
    category: "Creotech Service",
    tags: ["marketing", "seo", "social media", "ppc", "ads", "digital marketing", "strategy"],
  },

  // ── Captura Services ──────────────────────────────────────────────────────
  {
    title: "Commercial Photography",
    description: "Advertising campaigns, catalogue imagery, and billboard-ready shots.",
    href: "#/captura",
    category: "Captura Service",
    tags: ["commercial photography", "advertising", "catalogue", "billboard", "campaign"],
  },
  {
    title: "Editorial & Portrait Photography",
    description: "Headshots, team portraits, editorial fashion, and magazine features.",
    href: "#/captura",
    category: "Captura Service",
    tags: ["editorial", "portrait", "headshots", "fashion", "magazine", "model"],
  },
  {
    title: "Product Photography",
    description: "E-commerce and styled product imagery for every platform.",
    href: "#/captura",
    category: "Captura Service",
    tags: ["product photography", "ecommerce", "styled", "packshot", "amazon"],
  },
  {
    title: "Events Photography",
    description: "Corporate events, launches, and exhibitions — polished and fast.",
    href: "#/captura",
    category: "Captura Service",
    tags: ["events", "event photography", "corporate event", "launch", "exhibition", "conference"],
  },
  {
    title: "Corporate Photography",
    description: "Annual report, workplace, and leadership photography.",
    href: "#/captura",
    category: "Captura Service",
    tags: ["corporate", "annual report", "workplace", "leadership", "executive", "team photos"],
  },
  {
    title: "Aerial & Drone Photography",
    description: "Cinematic aerial perspectives for real estate, events, and landscape.",
    href: "#/captura",
    category: "Captura Service",
    tags: ["aerial", "drone", "real estate", "landscape", "bird's eye", "uav"],
  },

  // ── Cinemix Services ──────────────────────────────────────────────────────
  {
    title: "Brand Films",
    description: "Cinematic films that tell your brand story with depth and emotion.",
    href: "#/cinemix",
    category: "Cinemix Service",
    tags: ["brand film", "brand video", "brand story", "cinematic", "commercial film"],
  },
  {
    title: "Documentary Production",
    description: "Long-form storytelling for brands, causes, and organisations.",
    href: "#/cinemix",
    category: "Cinemix Service",
    tags: ["documentary", "long form", "storytelling", "non-fiction", "docu"],
  },
  {
    title: "Social Media Video Content",
    description: "Short-form video optimised for Reels, TikTok, and YouTube Shorts.",
    href: "#/cinemix",
    category: "Cinemix Service",
    tags: ["social media", "reels", "tiktok", "youtube shorts", "short form", "vertical video"],
  },
  {
    title: "Post-Production & Editing",
    description: "Editing, colour grading, audio finishing, and multi-format delivery.",
    href: "#/cinemix",
    category: "Cinemix Service",
    tags: ["post production", "editing", "colour grading", "color grading", "audio", "vfx"],
  },
  {
    title: "Motion Graphics & Animation",
    description: "Explainer videos, logo animations, lower thirds, and kinetic typography.",
    href: "#/cinemix",
    category: "Cinemix Service",
    tags: ["motion graphics", "animation", "explainer", "logo animation", "kinetic", "after effects"],
  },
  {
    title: "Corporate Video Production",
    description: "Internal comms, training, recruitment, and investor relations films.",
    href: "#/cinemix",
    category: "Cinemix Service",
    tags: ["corporate video", "internal comms", "training video", "recruitment video", "investor"],
  },

  // ── Portfolio Projects ─────────────────────────────────────────────────────
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce experience with seamless checkout — built by Creotech.",
    href: "#/portfolio",
    category: "Portfolio",
    tags: ["ecommerce", "web design", "creotech", "shop", "online store"],
  },
  {
    title: "Fitness Mobile App",
    description: "AI-powered fitness tracking on iOS & Android — built by Creotech.",
    href: "#/portfolio",
    category: "Portfolio",
    tags: ["mobile app", "fitness", "ai", "ios", "android", "creotech"],
  },
  {
    title: "Luxury Brand Identity",
    description: "Complete brand overhaul for a luxury lifestyle brand — by Creotech.",
    href: "#/portfolio",
    category: "Portfolio",
    tags: ["branding", "identity", "luxury", "logo", "creotech"],
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time data visualisation for enterprise SaaS — by Creotech.",
    href: "#/portfolio",
    category: "Portfolio",
    tags: ["saas", "dashboard", "analytics", "data", "web app", "creotech"],
  },
  {
    title: "Product Campaign Shoot",
    description: "Luxury product photography for a perfume campaign — by Captura.",
    href: "#/portfolio",
    category: "Portfolio",
    tags: ["photography", "product", "campaign", "perfume", "luxury", "captura"],
  },
  {
    title: "Corporate Headshots",
    description: "Executive and team portraits for a financial firm — by Captura.",
    href: "#/portfolio",
    category: "Portfolio",
    tags: ["headshots", "corporate", "portraits", "team", "captura"],
  },
  {
    title: "Brand Film",
    description: "60-second cinematic brand story for a tech company — by Cinemix.",
    href: "#/portfolio",
    category: "Portfolio",
    tags: ["brand film", "cinematic", "tech", "video", "cinemix"],
  },

  // ── Contact info ──────────────────────────────────────────────────────────
  {
    title: "Email A'MIS Group",
    description: "info@amisgroup.lk — reach our main office directly.",
    href: "#/contact",
    category: "Contact",
    tags: ["email", "contact", "info"],
  },
  {
    title: "Call A'MIS Group",
    description: "076 268 865 — speak to our team Mon–Fri, 09am–05pm.",
    href: "#/contact",
    category: "Contact",
    tags: ["phone", "call", "contact", "telephone"],
  },
  {
    title: "Melbourne Office",
    description: "Main Street, Melbourne, Australia — visit our studio.",
    href: "#/contact",
    category: "Contact",
    tags: ["address", "location", "melbourne", "office", "visit"],
  },
];

export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);

  const scored = searchIndex.map((item) => {
    const haystack = [
      item.title.toLowerCase(),
      item.description.toLowerCase(),
      item.category.toLowerCase(),
      ...item.tags,
    ].join(" ");

    let score = 0;
    for (const word of words) {
      if (item.title.toLowerCase().includes(word)) score += 10;
      if (item.category.toLowerCase().includes(word)) score += 5;
      if (item.description.toLowerCase().includes(word)) score += 3;
      if (item.tags.some((t) => t.includes(word))) score += 4;
      if (haystack.includes(word)) score += 1;
    }
    return { item, score };
  });

  return scored
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((r) => r.item);
}
