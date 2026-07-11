import _imgs from "@/imageRegistry";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const categories = ["All", "Web Design", "Software", "Mobile App", "Branding", "Photography", "Videography"];

const studioAccents: Record<string, string> = {
  "A'MIS Creotech": "#c8f135",
  "A'MIS Captura":  "#38bdf8",
  "A'MIS Cinemix":  "#a78bfa",
};

const projects = [
  {
    id: 1, title: "Dan TV",              studio: "A'MIS Creotech", tags: ["Web Design"],
    url: "https://www.dantv.lk/",
    image: _imgs["/assets/dan-tv.jpg"],
    desc: "Corporate web presence for DAN TV — a leading Sri Lankan cable TV and media network broadcasting across multiple channels.",
  },
  {
    id: 2, title: "Da Vinci Ceramics",   studio: "A'MIS Creotech", tags: ["Web Design"],
    url: "https://davinciceramics.com/",
    image: _imgs["/assets/da-vinci.jpg"],
    desc: "Premium showroom website for Da Vinci Ceramics, showcasing luxury tile and ceramic collections with an elegant product catalogue.",
  },
  {
    id: 3, title: "Smart Holiday Tours", studio: "A'MIS Creotech", tags: ["Web Design"],
    url: "https://www.smartholidaytours.com/",
    image: _imgs["/assets/smart-holiday.jpg"],
    desc: "Full-featured travel agency website with tour packages, destination guides, and seamless booking for Smart Holiday Tours.",
  },
  {
    id: 4, title: "Unique Tripper",      studio: "A'MIS Creotech", tags: ["Web Design"],
    url: "https://uniquetripper.com/",
    image: _imgs["/assets/unique-tripper.jpg"],
    desc: "Adventure travel platform for Unique Tripper — curated trips, trekking packages, and immersive travel experiences around the world.",
  },
  {
    id: 5, title: "Lion Isle Travels",   studio: "A'MIS Creotech", tags: ["Web Design"],
    url: "https://www.lionisle.com/",
    image: _imgs["/assets/lion-isle.jpg"],
    desc: "Luxury travel and hospitality website for Lion Isle Travels, offering bespoke island getaways and premium holiday packages.",
  },
  {
    id: 6, title: "Fitness Sports Center", studio: "A'MIS Creotech", tags: ["Web Design"],
    url: "https://gym-promotional-website-design.vercel.app/",
    image: _imgs["/assets/fitness.jpg"],
    desc: "High-energy promotional website for a fitness and sports centre, featuring class schedules, memberships, and trainer profiles.",
  },
  {
    id: 7, title: "Menaric Wedding",     studio: "A'MIS Creotech",  tags: ["Web Design"],
    url: "https://photography-and-videography-service.vercel.app/",
    image: _imgs["/assets/menaric-wedding.jpg"],
    desc: "Elegant portfolio and booking website for Menaric Wedding — a premium photography and videography service for weddings and events.",
  },
  {
    id: 8, title: "RJ Gems",             studio: "A'MIS Creotech", tags: ["Web Design"],
    url: "https://gem-store-website.vercel.app/",
    image: _imgs["/assets/rj-gems.jpg"],
    desc: "Luxury gem and jewellery e-commerce store for RJ Gems, with a curated product catalogue and polished shopping experience.",
  },
];


export function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.tags.includes(active));

  return (
    <div className="min-h-screen bg-white">
      <PageNav current="PORTFOLIO" />

      {/* ── HERO ── */}
      <section className="relative bg-[#0b1940] overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-[#c8f135]" />

        <div className="absolute inset-0">
          <img src={_imgs["/assets/portfolio-hero.jpg"]}
            alt="Portfolio" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, #0b1940 0%, #0b1940 40%, rgba(11,25,64,0.70) 58%, rgba(11,25,64,0.2) 80%, rgba(11,25,64,0.05) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0b1940, transparent)" }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: 72 }}>
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-16">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#c8f135]">Our Work</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.93] tracking-tighter mb-5">
                Work That<br /><span className="text-[#c8f135]">Speaks for Itself.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
                className="text-white/55 text-base leading-relaxed mb-8 max-w-md">
                A selection of projects from across our three studios — each delivered with precision and purpose.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }} className="flex flex-wrap gap-3">
                <a href="#/contact" className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm rounded-lg bg-[#c8f135] text-[#0b1940] hover:brightness-110 transition-all"
                  style={{ boxShadow: "0 6px 20px #c8f13535" }}>
                  Start a Project <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#/services" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold text-sm rounded-lg hover:border-white/50 hover:bg-white/5 transition-all">
                  Our Services <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* ── PROJECTS ── */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-wrap gap-2 mb-14">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded text-sm font-bold transition-all duration-200 active:scale-95 ${
                  active === cat
                    ? "bg-[#0b1940] text-white"
                    : "bg-gray-50 text-gray-500 hover:text-[#0b1940] active:text-[#0b1940] border border-gray-100"
                }`}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.a
                  key={p.id}
                  href={(p as any).url ?? undefined}
                  target={(p as any).url ? "_blank" : undefined}
                  rel={(p as any).url ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[#c8f135]/30 transition-all duration-300 flex flex-col">
                  <div className="relative h-60 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#0b1940]/0 group-hover:bg-[#0b1940]/70 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white font-bold text-sm border border-white/30 px-5 py-2.5 rounded">
                        {(p as any).url ? "Visit Site" : "View Project"} <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    {(p as any).url && (
                      <div className="absolute top-3 right-3 bg-[#c8f135] text-[#0b1940] text-[9px] font-black tracking-widest uppercase px-2 py-1 rounded">Live</div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {p.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-[#0b1940] text-white">
                          {tag}
                        </span>
                      ))}
                      <span className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded"
                        style={{ background: `${studioAccents[p.studio]}22`, color: studioAccents[p.studio] }}>
                        {p.studio.replace("A'MIS ", "")}
                      </span>
                    </div>
                    <h3 className="text-[#0b1940] font-black text-lg mb-1">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-16 bg-[#0b1940]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-white">Like what you see?</h2>
            <p className="text-white/50 text-base mt-1">Let's build something together. Get in touch today.</p>
          </div>
          <a href="#/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#c8f135] text-[#0b1940] font-black text-sm rounded hover:bg-[#d5f84a] transition-colors">
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}