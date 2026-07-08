import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Star, Code, Smartphone, Globe, Palette, Image, TrendingUp, Camera, Users, Package, Calendar, Briefcase, Film, FileVideo, Share2, Scissors, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";

// Service icon mapping
const serviceIcons: Record<string, any> = {
  "Software Development": Code,
  "Mobile App Development": Smartphone,
  "Web Design & Dev": Globe,
  "UI/UX Design": Palette,
  "Graphic Design": Image,
  "Marketing": TrendingUp,
  "Commercial Photography": Camera,
  "Editorial & Portrait": Users,
  "Product Photography": Package,
  "Events Coverage": Calendar,
  "Corporate Photography": Briefcase,
  "Brand Films": Film,
  "Documentary": FileVideo,
  "Social Content": Share2,
  "Post-Production": Scissors,
  "Motion Graphics": Sparkles,
};

const studios = [
  {
    id: "creotech", number: "01", name: "A'MIS Creotech", accent: "#c8f135",
    tagline: "Technology & Creative",
    description: "We build software, mobile apps, websites, UI/UX designs, graphics, and marketing campaigns.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    id: "captura", number: "02", name: "A'MIS Captura", accent: "#38bdf8",
    tagline: "Professional Photography",
    description: "We capture commercial, editorial, product, event, and corporate photos — with precision in every frame.",
    image: "https://images.unsplash.com/photo-1621024994278-e409544f4085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    id: "cinemix", number: "03", name: "A'MIS Cinemix", accent: "#a78bfa",
    tagline: "Video Production",
    description: "We create brand films, documentaries, social videos, post-production, and motion graphics.",
    image: "https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

const projects = [
  { title: "E-Commerce Platform", cat: "Web Design", image: "https://images.unsplash.com/photo-1760237877084-189a676623ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { title: "Brand Identity", cat: "Branding", image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { title: "SaaS Dashboard", cat: "Web Design", image: "https://images.unsplash.com/photo-1658806264102-2c516eae5e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
];

const testimonials = [
  { name: "Sarah Johnson", role: "CEO, TechStart Inc.", rating: 5, content: "Working with A'MIS Group was transformative. Their expertise helped us scale beyond our expectations — the attention to detail exceeded everything we hoped for." },
  { name: "Michael Chen", role: "Founder, Digital Ventures", rating: 5, content: "The commitment to excellence is unmatched. They delivered a product that exceeded our vision and truly delighted our users." },
  { name: "Emily Rodriguez", role: "Marketing Director, BrandCo", rating: 5, content: "The team at A'MIS understood our vision immediately and brought it to life with stunning creativity. Our brand has never looked better!" },
  { name: "David Kim", role: "CTO, InnovateTech", rating: 5, content: "Exceptional technical expertise combined with clear communication. They built our platform faster than we imagined possible, without compromising on quality." },
  { name: "Lisa Anderson", role: "VP Product, StartupHub", rating: 5, content: "From discovery to launch, A'MIS Group was a true partner. Their strategic insights and execution capabilities are world-class." },
  { name: "James Wilson", role: "Owner, Wilson Photography Studio", rating: 5, content: "The Captura team captured our brand essence perfectly. Every shot was magazine-quality and delivered ahead of schedule." },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const heroSlides = [
  {
    id: "creotech",
    label: "A'MIS Creotech · Studio 01",
    accent: "#c8f135",
    headline: ["We Build Digital", "Products That"],
    highlight: "Actually Work.",
    sub: "Enterprise software, mobile apps, web platforms, UI/UX design, branding, and marketing — all under one roof.",
    cta: { label: "View Creotech", href: "#/creotech" },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
  },
  {
    id: "captura",
    label: "A'MIS Captura · Studio 02",
    accent: "#38bdf8",
    headline: ["Photography That", "Speaks for"],
    highlight: "Your Brand.",
    sub: "Commercial, editorial, product, events, and corporate photography — every frame composed with artistic precision.",
    cta: { label: "View Captura", href: "#/captura" },
    image: "https://images.unsplash.com/photo-1621024994278-e409544f4085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
  },
  {
    id: "cinemix",
    label: "A'MIS Cinemix · Studio 03",
    accent: "#a78bfa",
    headline: ["Stories Worth Telling,", "Films Worth"],
    highlight: "Watching.",
    sub: "Brand films, documentaries, social content, post-production, and motion graphics — full-service from concept to screen.",
    cta: { label: "View Cinemix", href: "#/cinemix" },
    image: "https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
  },
];

const clientLogos: { svg: React.ReactNode; name: string }[] = [
  {
    name: "TechStart",
    svg: (
      <svg width="120" height="36" viewBox="0 0 120 36" fill="none">
        <rect x="0" y="8" width="20" height="20" rx="4" fill="#c8f135" opacity="0.9"/>
        <rect x="6" y="14" width="8" height="8" rx="2" fill="#060e2a"/>
        <text x="28" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill="white" letterSpacing="-0.5">Tech</text>
        <text x="66" y="24" fontFamily="sans-serif" fontWeight="400" fontSize="15" fill="white" opacity="0.5" letterSpacing="-0.5">Start</text>
      </svg>
    ),
  },
  {
    name: "NovaBuild",
    svg: (
      <svg width="130" height="36" viewBox="0 0 130 36" fill="none">
        <polygon points="10,28 18,8 26,28" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="18" cy="18" r="3" fill="#38bdf8"/>
        <text x="36" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="15" fill="white" letterSpacing="-0.5">NOVA</text>
        <text x="80" y="24" fontFamily="sans-serif" fontWeight="300" fontSize="15" fill="white" opacity="0.45" letterSpacing="1">BUILD</text>
      </svg>
    ),
  },
  {
    name: "PixelForge",
    svg: (
      <svg width="138" height="36" viewBox="0 0 138 36" fill="none">
        <rect x="2" y="10" width="7" height="7" rx="1" fill="#a78bfa"/>
        <rect x="11" y="10" width="7" height="7" rx="1" fill="#a78bfa" opacity="0.6"/>
        <rect x="2" y="19" width="7" height="7" rx="1" fill="#a78bfa" opacity="0.6"/>
        <rect x="11" y="19" width="7" height="7" rx="1" fill="#a78bfa" opacity="0.3"/>
        <text x="28" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill="white" letterSpacing="-0.3">Pixel</text>
        <text x="71" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill="#a78bfa" letterSpacing="-0.3">Forge</text>
      </svg>
    ),
  },
  {
    name: "UrbanEdge",
    svg: (
      <svg width="132" height="36" viewBox="0 0 132 36" fill="none">
        <path d="M4 26 L4 10 L14 10 L14 18 L9 18 L9 26Z" fill="white" opacity="0.85"/>
        <path d="M16 10 L26 10 L26 26 L16 26 L16 18 L21 18 L21 10" fill="none" stroke="white" strokeWidth="2" opacity="0.4"/>
        <text x="34" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1.5" opacity="0.85">URBAN</text>
        <text x="34" y="33" fontFamily="sans-serif" fontWeight="300" fontSize="9" fill="#c8f135" letterSpacing="3" opacity="0.7">EDGE</text>
      </svg>
    ),
  },
  {
    name: "BluePeak",
    svg: (
      <svg width="128" height="36" viewBox="0 0 128 36" fill="none">
        <path d="M4 28 L14 10 L24 28Z" fill="#38bdf8" opacity="0.15"/>
        <path d="M4 28 L14 10 L24 28" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="14" y1="10" x2="14" y2="28" stroke="#38bdf8" strokeWidth="1.5" opacity="0.4"/>
        <text x="32" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill="white" letterSpacing="-0.5">Blue</text>
        <text x="68" y="24" fontFamily="sans-serif" fontWeight="300" fontSize="15" fill="white" opacity="0.5" letterSpacing="-0.5">Peak</text>
      </svg>
    ),
  },
  {
    name: "ClearVision",
    svg: (
      <svg width="148" height="36" viewBox="0 0 148 36" fill="none">
        <circle cx="14" cy="18" r="10" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/>
        <circle cx="14" cy="18" r="5" fill="none" stroke="#c8f135" strokeWidth="1.5"/>
        <circle cx="14" cy="18" r="2" fill="#c8f135"/>
        <text x="32" y="24" fontFamily="sans-serif" fontWeight="600" fontSize="14" fill="white" opacity="0.85" letterSpacing="0.5">Clear</text>
        <text x="73" y="24" fontFamily="sans-serif" fontWeight="600" fontSize="14" fill="white" opacity="0.45" letterSpacing="0.5">Vision</text>
      </svg>
    ),
  },
  {
    name: "RiftMedia",
    svg: (
      <svg width="130" height="36" viewBox="0 0 130 36" fill="none">
        <path d="M4 10 L16 10 C22 10 24 14 24 18 C24 22 22 24 18 24 L14 24 L20 28 L14 28 L8 22 L14 22 C17 22 18 21 18 18 C18 15 17 14 14 14 L4 14Z" fill="white" opacity="0.8"/>
        <text x="32" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="14" fill="white" letterSpacing="1">RIFT</text>
        <text x="69" y="24" fontFamily="sans-serif" fontWeight="300" fontSize="14" fill="white" opacity="0.4" letterSpacing="1">MEDIA</text>
      </svg>
    ),
  },
  {
    name: "ApexDigital",
    svg: (
      <svg width="142" height="36" viewBox="0 0 142 36" fill="none">
        <path d="M14 8 L22 26 L6 26Z" fill="none" stroke="#c8f135" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M10 20 L18 20" stroke="#c8f135" strokeWidth="1.5"/>
        <text x="30" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="white" letterSpacing="-0.3">Apex</text>
        <text x="68" y="24" fontFamily="sans-serif" fontWeight="400" fontSize="14" fill="white" opacity="0.45" letterSpacing="-0.3">Digital</text>
      </svg>
    ),
  },
  {
    name: "ZenithLabs",
    svg: (
      <svg width="136" height="36" viewBox="0 0 136 36" fill="none">
        <rect x="4" y="8" width="22" height="20" rx="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4"/>
        <path d="M8 24 L20 12 L20 24 L8 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="34" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="-0.3">Zenith</text>
        <text x="87" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#38bdf8" letterSpacing="-0.3">Labs</text>
      </svg>
    ),
  },
  {
    name: "FusionMark",
    svg: (
      <svg width="142" height="36" viewBox="0 0 142 36" fill="none">
        <circle cx="12" cy="18" r="8" fill="none" stroke="#a78bfa" strokeWidth="2"/>
        <circle cx="20" cy="18" r="8" fill="none" stroke="#38bdf8" strokeWidth="2"/>
        <path d="M16 12 C18 14 18 22 16 24" fill="none" stroke="white" strokeWidth="1.2" opacity="0.6"/>
        <text x="36" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="white" letterSpacing="-0.3">Fusion</text>
        <text x="88" y="24" fontFamily="sans-serif" fontWeight="400" fontSize="14" fill="white" opacity="0.5" letterSpacing="-0.3">Mark</text>
      </svg>
    ),
  },
  {
    name: "OrbCreative",
    svg: (
      <svg width="148" height="36" viewBox="0 0 148 36" fill="none">
        <circle cx="14" cy="18" r="9" fill="#c8f135" opacity="0.12"/>
        <circle cx="14" cy="18" r="9" fill="none" stroke="#c8f135" strokeWidth="1.8"/>
        <circle cx="14" cy="18" r="4" fill="#c8f135" opacity="0.7"/>
        <text x="30" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="white" letterSpacing="-0.3">Orb</text>
        <text x="56" y="24" fontFamily="sans-serif" fontWeight="300" fontSize="14" fill="white" opacity="0.5" letterSpacing="-0.3">Creative</text>
      </svg>
    ),
  },
  {
    name: "GridWave",
    svg: (
      <svg width="132" height="36" viewBox="0 0 132 36" fill="none">
        <line x1="4" y1="14" x2="24" y2="14" stroke="white" strokeWidth="1.5" opacity="0.3"/>
        <line x1="4" y1="18" x2="24" y2="18" stroke="white" strokeWidth="1.5" opacity="0.6"/>
        <line x1="4" y1="22" x2="24" y2="22" stroke="white" strokeWidth="1.5" opacity="0.3"/>
        <path d="M4 18 Q9 10 14 18 Q19 26 24 18" fill="none" stroke="#c8f135" strokeWidth="2" strokeLinecap="round"/>
        <text x="32" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="white" letterSpacing="-0.3">Grid</text>
        <text x="60" y="24" fontFamily="sans-serif" fontWeight="400" fontSize="14" fill="white" opacity="0.5" letterSpacing="-0.3">Wave</text>
      </svg>
    ),
  },
];

function LogoMarquee() {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <div className="relative">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to right, #060e2a, transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: "linear-gradient(to left, #060e2a, transparent)" }} />

      <div className="flex items-center" style={{ animation: "marquee 40s linear infinite", width: "max-content" }}>
        {doubled.map((logo, i) => (
          <div key={i} className="mx-6 shrink-0">
            <div className="flex items-center px-6 py-3 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 cursor-default opacity-60 hover:opacity-100">
              {logo.svg}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

const SLIDE_DURATION = 5000;

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = (idx: number) => { setCurrent(idx); setProgress(0); setAnimKey((k) => k + 1); };
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => goTo((current + 1) % heroSlides.length);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { setCurrent((c) => (c + 1) % heroSlides.length); setAnimKey((k) => k + 1); return 0; }
        return p + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [current]);

  const slide = heroSlides[current];

  return (
    <section className="relative bg-[#0b1940] overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>
      {/* Lime top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c8f135] z-30" />

      {/* Full-bleed background images */}
      {heroSlides.map((s, i) => (
        <div key={s.id} className="absolute inset-0 pointer-events-none"
          style={{ opacity: i === current ? 1 : 0, transition: "opacity 1.2s ease" }}>
          <img src={s.image} alt={s.label} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, #0b1940 0%, #0b1940 40%, rgba(11,25,64,0.70) 58%, rgba(11,25,64,0.2) 80%, rgba(11,25,64,0.05) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: "linear-gradient(to top, #0b1940, transparent)" }} />
        </div>
      ))}

      {/* Main content — grows to fill space above stats */}
      <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: 72 }}>
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-16">
          <div className="max-w-xl lg:max-w-2xl">

            {/* Studio label */}
            <motion.div key={`label-${animKey}`} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px]" style={{ background: slide.accent }} />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: slide.accent }}>
                {slide.label}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 key={`headline-${animKey}`} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.93] tracking-tighter mb-5">
              {slide.headline.map((line, i) => <span key={i}>{line}<br /></span>)}
              <span style={{ color: slide.accent }}>{slide.highlight}</span>
            </motion.h1>

            {/* Sub */}
            <motion.p key={`sub-${animKey}`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-white/55 text-base leading-relaxed mb-8 max-w-md">
              {slide.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div key={`cta-${animKey}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }} className="flex flex-wrap gap-3 mb-10">
              <a href={slide.cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm rounded-lg hover:brightness-110 transition-all"
                style={{ background: slide.accent, color: "#0b1940", boxShadow: `0 6px 20px ${slide.accent}35` }}>
                {slide.cta.label} <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold text-sm rounded-lg hover:border-white/50 hover:bg-white/5 transition-all">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Slide controls */}
            <div className="flex items-center gap-4">
              <button onClick={prev}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition-all">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-3">
                {heroSlides.map((s, i) => (
                  <button key={s.id} onClick={() => goTo(i)} className="flex flex-col items-start gap-1.5">
                    <div className="h-[2px] w-14 bg-white/15 rounded-full overflow-hidden">
                      <div className="h-full rounded-full"
                        style={{
                          width: i === current ? `${progress}%` : i < current ? "100%" : "0%",
                          background: i === current ? slide.accent : "rgba(255,255,255,0.3)",
                          transition: i === current ? "none" : "width 0.3s ease",
                        }} />
                    </div>
                    <span className="text-[10px] font-black tracking-widest"
                      style={{ color: i === current ? slide.accent : "rgba(255,255,255,0.2)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
              <button onClick={next}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition-all">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — pinned at bottom, naturally part of flex column */}
      <div className="relative z-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label}
                className={`group py-7 px-8 flex items-center gap-5 relative transition-colors duration-200 hover:bg-white/[0.03] ${
                  i < 3 ? "after:absolute after:right-0 after:top-5 after:bottom-5 after:w-px after:bg-white/8" : ""
                }`}>
                {/* Accent dot */}
                <div className="w-1 h-10 rounded-full bg-[#c8f135]/40 group-hover:bg-[#c8f135] transition-colors duration-300 shrink-0" />
                <div>
                  <div className="text-3xl font-black text-white leading-none tracking-tight group-hover:text-[#c8f135] transition-colors duration-300">
                    {s.value}
                  </div>
                  <div className="text-white/35 text-[11px] font-semibold tracking-[0.14em] uppercase mt-1.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <HeroSlider />

      {/* ── STUDIOS ── */}
      <section className="py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Our Studios</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight leading-tight">
                Three Studios.<br /><span className="text-[#c8f135]">One Standard.</span>
              </h2>
              <a href="#/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b1940] hover:text-[#c8f135] transition-colors">
                View All Services <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studios.map((studio, i) => (
              <motion.a
                key={studio.id}
                href={`#/${studio.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={studio.image} alt={studio.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1940]/90 via-[#0b1940]/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-black text-white/40">{studio.number}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded mb-2" style={{ background: `${studio.accent}20`, color: studio.accent }}>{studio.tagline}</div>
                    <h3 className="text-xl font-black text-white">{studio.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-5 flex-1">
                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">{studio.description}</p>

                  {/* Services list */}
                  <ul className="flex flex-col gap-2">
                    {((({
                      creotech: ["Software Development", "Mobile App Development", "Web Design & Dev", "UI/UX Design", "Graphic Design", "Marketing"],
                      captura:  ["Commercial Photography", "Editorial & Portrait", "Product Photography", "Events Coverage", "Corporate Photography"],
                      cinemix:  ["Brand Films", "Documentary", "Social Content", "Post-Production", "Motion Graphics"],
                    } as Record<string, string[]>)[studio.id] ?? []).map((svc) => {
                      const IconComponent = serviceIcons[svc];
                      return (
                        <li key={svc} className="flex items-center gap-2.5">
                          {IconComponent && <IconComponent className="w-3.5 h-3.5 shrink-0" style={{ color: studio.accent }} />}
                          <span className="text-xs text-gray-400 font-medium">{svc}</span>
                        </li>
                      );
                    }))}
                  </ul>

                  {/* CTA button */}
                  <div className="mt-auto pt-5 border-t border-gray-100">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[11px] font-black tracking-wider transition-all duration-300 group-hover:gap-3"
                      style={{ background: studio.accent, color: "#0b1940" }}>
                      Explore {studio.name.split(" ")[1]}
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-28 px-6 lg:px-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">About A'MIS Group</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight leading-tight mb-6">
                A Creative Tech Group<br /><span className="text-[#c8f135]">Built for Impact.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                A'MIS Group Pvt Ltd is a multi-disciplinary creative technology company. We operate three specialist studios — each a leader in its domain, united by a relentless commitment to quality.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                From enterprise software to cinematic video, our teams bring rigour, creativity, and craft to every project we take on.
              </p>
              <a href="#/about" className="inline-flex items-center gap-2 px-7 py-4 bg-[#0b1940] text-white font-bold text-sm rounded hover:bg-[#0d2050] transition-colors">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="A'MIS team" className="w-full h-[480px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0b1940] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-black text-[#c8f135]">10+</div>
                <div className="text-white/60 text-sm mt-0.5">Years of Excellence</div>
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#c8f135] rounded-tr-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Our Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight leading-tight">
                Featured<br /><span className="text-[#c8f135]">Projects.</span>
              </h2>
            </div>
            <a href="#/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b1940] hover:text-[#c8f135] transition-colors">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[#c8f135]/30 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#0b1940]/0 group-hover:bg-[#0b1940]/60 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">View Project <ArrowUpRight className="w-4 h-4" /></span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 bg-[#0b1940] text-[#c8f135] rounded">{p.cat}</span>
                  <h3 className="text-[#0b1940] font-bold text-lg mt-3">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 px-6 lg:px-16 bg-[#0b1940]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#c8f135]/60 uppercase">Client Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">What Our Clients Say.</h2>
          </motion.div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section className="py-16 md:py-20 bg-[#060e2a] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#c8f135]/60 uppercase">Trusted By</span>
              <span className="w-8 h-[2px] bg-[#c8f135]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Brands That Trust A'MIS Group.</h2>
          </motion.div>
        </div>
        <LogoMarquee />
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 px-6 lg:px-16 bg-[#c8f135]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b1940] tracking-tight">Ready to start a project?</h2>
            <p className="text-[#0b1940]/60 text-base mt-2">Tell us about your idea and we'll get back to you within one business day.</p>
          </div>
          <a href="#/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#0b1940] text-white font-black text-sm rounded hover:bg-[#0d2050] transition-colors">
            Get In Touch <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}