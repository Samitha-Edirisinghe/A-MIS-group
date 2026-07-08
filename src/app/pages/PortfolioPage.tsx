import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const categories = ["All", "Web Design", "Mobile Apps", "Branding", "Photography", "Video"];

const projects = [
  { id: 1, title: "E-Commerce Platform",    cat: "Web Design",   studio: "Creotech", image: "https://images.unsplash.com/photo-1760237877084-189a676623ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",  desc: "Modern e-commerce with seamless checkout experience." },
  { id: 2, title: "Fitness Mobile App",     cat: "Mobile Apps",  studio: "Creotech", image: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",  desc: "AI-powered fitness tracking on iOS & Android." },
  { id: 3, title: "Luxury Brand Identity",  cat: "Branding",     studio: "Creotech", image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",  desc: "Complete brand overhaul for a luxury lifestyle brand." },
  { id: 4, title: "SaaS Analytics Dashboard",cat: "Web Design",  studio: "Creotech", image: "https://images.unsplash.com/photo-1658806264102-2c516eae5e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",  desc: "Real-time data visualisation for enterprise SaaS." },
  { id: 5, title: "Travel Companion App",   cat: "Mobile Apps",  studio: "Creotech", image: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",  desc: "AI-powered travel planning and booking." },
  { id: 6, title: "Tech Startup Branding",  cat: "Branding",     studio: "Creotech", image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",  desc: "Dynamic brand identity for an innovative tech startup." },
  { id: 7, title: "Product Campaign Shoot", cat: "Photography",  studio: "Captura",  image: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",  desc: "Luxury product photography for a perfume campaign." },
  { id: 8, title: "Corporate Headshots",    cat: "Photography",  studio: "Captura",  image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",  desc: "Executive and team portraits for a financial firm." },
  { id: 9, title: "Brand Film",             cat: "Video",        studio: "Cinemix",  image: "https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",  desc: "60-second cinematic brand story for a tech company." },
];

const studioColors: Record<string, string> = {
  Creotech: "#c8f135",
  Captura:  "#38bdf8",
  Cinemix:  "#a78bfa",
};

export function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <div className="min-h-screen bg-white">
      <PageNav current="PORTFOLIO" />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] overflow-hidden pt-16 flex flex-col">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Portfolio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1940]/95 via-[#0b1940]/65 to-[#0b1940]/25" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b1940] to-transparent" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c8f135]" />
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-28 w-full">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="w-10 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.28em] text-[#c8f135] uppercase">Our Work</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-5 md:mb-7">
              Work That<br /><span className="text-[#c8f135]">Speaks for Itself.</span>
            </h1>
            <p className="text-white/60 text-base md:text-xl leading-relaxed mb-8 md:mb-12 max-w-lg">
              A selection of projects from across our three studios — each delivered with precision and purpose.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Web Design", "Mobile Apps", "Branding", "Photography", "Video"].map(s => (
                <span key={s} className="px-3 py-1.5 text-xs font-bold tracking-wide bg-white/8 text-white/60 rounded-full border border-white/15">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-wrap gap-2 mb-14">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded text-sm font-bold transition-all duration-200 ${active === cat ? "bg-[#0b1940] text-white" : "bg-gray-50 text-gray-500 hover:text-[#0b1940] border border-gray-100"}`}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[#c8f135]/30 transition-all duration-300 flex flex-col">
                  <div className="relative h-60 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#0b1940]/0 group-hover:bg-[#0b1940]/70 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white font-bold text-sm border border-white/30 px-5 py-2.5 rounded">
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded bg-[#0b1940] text-[#c8f135]">{p.cat}</span>
                      <span className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded" style={{ background: `${studioColors[p.studio]}18`, color: studioColors[p.studio] }}>{p.studio}</span>
                    </div>
                    <h3 className="text-[#0b1940] font-black text-lg mb-1">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
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
