import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HomePage }             from "./pages/HomePage";
import { AboutPage }            from "./pages/AboutPage";
import { ServicesPage }         from "./pages/ServicesPage";
import { PortfolioPage }        from "./pages/PortfolioPage";
import { CareersPage }          from "./pages/CareersPage";
import { ContactPage }          from "./pages/ContactPage";
import { FAQPage }              from "./pages/FAQPage";
import { PrivacyPolicyPage }    from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage }   from "./pages/TermsOfServicePage";
import { CookiePolicyPage }     from "./pages/CookiePolicyPage";
import { CreotechPage }         from "./pages/CreotechPage";
import { CapturaPage }          from "./pages/CapturaPage";
import { CinemixPage }          from "./pages/CinemixPage";
import { useSEO }               from "./hooks/useSEO";
import { StructuredData }       from "./components/StructuredData";

const SEO_MAP: Record<string, { title: string; description: string; keywords: string; canonical: string }> = {
  home: {
    title: "A'MIS Group | Creative Technology, Photography & Video Production",
    description: "A'MIS Group Pvt Ltd — three specialist studios under one roof. Creotech for technology & creative services, Captura for professional photography, and Cinemix for cinematic video production. Based in Melbourne, Australia.",
    keywords: "A'MIS Group, creative technology, software development, photography studio, video production, Melbourne, web design, mobile apps",
    canonical: "https://amisgroup.lk/",
  },
  about: {
    title: "About A'MIS Group | Our Story, Mission & Values",
    description: "Learn about A'MIS Group — a creative technology company built on specialist excellence. 10+ years, 500+ happy clients, and three world-class studios working as one unified group.",
    keywords: "about A'MIS Group, creative agency Melbourne, technology company Australia, A'MIS story",
    canonical: "https://amisgroup.lk/#/about",
  },
  services: {
    title: "Our Services | Technology, Photography & Video — A'MIS Group",
    description: "Explore services across all three A'MIS studios: software development, web design, mobile apps, UI/UX, branding, commercial photography, video production and motion graphics.",
    keywords: "software development Melbourne, web design, mobile apps, photography services, video production, UI/UX design, digital marketing",
    canonical: "https://amisgroup.lk/#/services",
  },
  portfolio: {
    title: "Portfolio | Our Work — A'MIS Group",
    description: "Browse selected projects from A'MIS Creotech, Captura and Cinemix — web design, mobile apps, branding, commercial photography, and brand films delivered with precision and purpose.",
    keywords: "A'MIS portfolio, creative work Melbourne, web design portfolio, photography portfolio, video production showreel",
    canonical: "https://amisgroup.lk/#/portfolio",
  },
  careers: {
    title: "Careers | Join A'MIS Group",
    description: "We are always looking for talented, passionate people to join our studios. Explore open roles at A'MIS Creotech, Captura and Cinemix and do the best work of your career.",
    keywords: "careers Melbourne, creative agency jobs, software developer jobs, photographer jobs, video editor jobs Australia",
    canonical: "https://amisgroup.lk/#/careers",
  },
  contact: {
    title: "Contact Us | Get In Touch — A'MIS Group",
    description: "Start your project with A'MIS Group. Contact our team directly or reach the right studio — Creotech, Captura, or Cinemix. We respond within one business day.",
    keywords: "contact A'MIS Group, hire creative agency Melbourne, get a quote, creative technology contact",
    canonical: "https://amisgroup.lk/#/contact",
  },
  faq: {
    title: "FAQ | Frequently Asked Questions — A'MIS Group",
    description: "Find answers to common questions about A'MIS Group's services, studios, process, pricing and project timelines.",
    keywords: "A'MIS Group FAQ, creative agency questions, how to hire A'MIS, project process",
    canonical: "https://amisgroup.lk/#/faq",
  },
  privacy: {
    title: "Privacy Policy — A'MIS Group",
    description: "Read the A'MIS Group Pvt Ltd Privacy Policy to understand how we collect, use and protect your personal information.",
    keywords: "",
    canonical: "https://amisgroup.lk/#/privacy",
  },
  terms: {
    title: "Terms of Service — A'MIS Group",
    description: "Read the A'MIS Group Terms of Service governing use of our website and engagement with our studios.",
    keywords: "",
    canonical: "https://amisgroup.lk/#/terms",
  },
  cookies: {
    title: "Cookie Policy — A'MIS Group",
    description: "Read the A'MIS Group Cookie Policy to learn how we use cookies and similar technologies on our website.",
    keywords: "",
    canonical: "https://amisgroup.lk/#/cookies",
  },
  creotech: {
    title: "A'MIS Creotech | Technology & Creative Services Studio",
    description: "A'MIS Creotech is the technology and creative arm of A'MIS Group — delivering software development, web design, mobile apps, UI/UX, branding and digital marketing at enterprise quality.",
    keywords: "Creotech, software development, web design Melbourne, mobile app development, UI/UX design, graphic design, digital marketing",
    canonical: "https://amisgroup.lk/#/creotech",
  },
  captura: {
    title: "A'MIS Captura | Professional Photography Studio Melbourne",
    description: "A'MIS Captura is a full-service photography studio specialising in commercial, editorial, product, corporate, events and aerial photography — every frame composed intentionally.",
    keywords: "Captura, commercial photography Melbourne, product photography, editorial photography, corporate headshots, drone photography",
    canonical: "https://amisgroup.lk/#/captura",
  },
  cinemix: {
    title: "A'MIS Cinemix | Cinematic Video Production Studio",
    description: "A'MIS Cinemix delivers full-service video production — brand films, documentaries, social content, post-production, and motion graphics crafted for impact.",
    keywords: "Cinemix, video production Melbourne, brand films, documentary production, motion graphics, social video content, post production",
    canonical: "https://amisgroup.lk/#/cinemix",
  },
};

type Page =
  | null | "about" | "services" | "portfolio" | "careers" | "contact" | "faq"
  | "privacy" | "terms" | "cookies"
  | "creotech" | "captura" | "cinemix";

function getPage(): Page {
  const h = window.location.hash;
  if (h === "#/" || h === "" || h === "#") return null;
  if (h === "#/about")     return "about";
  if (h === "#/services")  return "services";
  if (h === "#/portfolio") return "portfolio";
  if (h === "#/careers")   return "careers";
  if (h === "#/contact")   return "contact";
  if (h === "#/faq")       return "faq";
  if (h === "#/privacy")   return "privacy";
  if (h === "#/terms")     return "terms";
  if (h === "#/cookies")   return "cookies";
  if (h === "#/creotech")  return "creotech";
  if (h === "#/captura")   return "captura";
  if (h === "#/cinemix")   return "cinemix";
  return null;
}

function SEOProvider({ page }: { page: Page }) {
  const key = page ?? "home";
  const seo = SEO_MAP[key] ?? SEO_MAP["home"];
  useSEO(seo);
  return null;
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#c8f135] hover:bg-[#d5f84a] rounded-full flex items-center justify-center shadow-2xl shadow-[#c8f135]/30 transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <ArrowRight className="w-5 h-5 text-[#0b1940] -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage);

  useEffect(() => {
    const onHash = () => {
      setPage(getPage());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const goHome = () => { window.location.hash = "#/"; };

  return (
    <>
      <StructuredData />
      <SEOProvider page={page} />
      <ScrollToTop />
      {page === "about"     && <AboutPage />}
      {page === "services"  && <ServicesPage />}
      {page === "portfolio" && <PortfolioPage />}
      {page === "careers"   && <CareersPage />}
      {page === "contact"   && <ContactPage />}
      {page === "faq"       && <FAQPage />}
      {page === "privacy"   && <PrivacyPolicyPage />}
      {page === "terms"     && <TermsOfServicePage />}
      {page === "cookies"   && <CookiePolicyPage />}
      {page === "creotech"  && <CreotechPage onBack={goHome} />}
      {page === "captura"   && <CapturaPage  onBack={goHome} />}
      {page === "cinemix"   && <CinemixPage  onBack={goHome} />}
      {!page                && <HomePage />}
    </>
  );
}
