import _imgs from "@/imageRegistry";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Code2, Smartphone, Globe, Palette, PenTool, TrendingUp, Camera, Video, Film, Share2, Scissors, Sparkles } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const studios = [
  {
    id: "creotech", number: "01", name: "A'MIS Creotech", accent: "#c8f135",
    tagline: "Technology & Creative Services",
    description: "Our flagship technology studio delivers end-to-end digital solutions — from enterprise software and mobile apps to UI/UX design, branding, and digital marketing.",
    image: _imgs["/assets/creotech-team.jpg"],
    services: [
      { icon: Code2,       title: "Software Development",     desc: "Scalable, enterprise-grade software built for performance and long-term growth." },
      { icon: Smartphone,  title: "Mobile App Development",   desc: "Native & cross-platform iOS and Android apps, full lifecycle." },
      { icon: Globe,       title: "Web Design & Development", desc: "High-performance sites and web apps built to convert." },
      { icon: Palette,     title: "UI/UX Design",             desc: "Research-backed interfaces that delight users and drive engagement." },
      { icon: PenTool,     title: "Graphic Design",           desc: "Brand identities and marketing materials that make an impression." },
      { icon: TrendingUp,  title: "Marketing Services",       desc: "Data-driven strategies that grow reach and maximise ROI." },
    ],
  },
  {
    id: "captura", number: "02", name: "A'MIS Captura", accent: "#38bdf8",
    tagline: "Professional Photography",
    description: "Artistic precision at every shutter. Commercial, editorial, corporate, product, and events photography — every frame composed intentionally.",
    image: _imgs["/assets/captura-hero-2.jpg"],
    services: [
      { icon: Camera, title: "Commercial Photography",  desc: "Advertising campaigns, catalogue imagery, and billboard-ready shots." },
      { icon: Camera, title: "Editorial & Portrait",    desc: "Headshots, team portraits, editorial fashion, and magazine features." },
      { icon: Camera, title: "Product Photography",     desc: "E-commerce and styled product imagery for every platform." },
      { icon: Camera, title: "Events Coverage",         desc: "Corporate events, launches, and exhibitions — polished and fast." },
      { icon: Camera, title: "Corporate Photography",   desc: "Annual report, workplace, and leadership photography." },
      { icon: Camera, title: "Aerial & Drone",          desc: "Cinematic aerial perspectives for real estate, events, and landscape." },
    ],
  },
  {
    id: "cinemix", number: "03", name: "A'MIS Cinemix", accent: "#a78bfa",
    tagline: "Cinematic Video Production",
    description: "Full-service video production from concept to delivery — brand films, documentaries, social content, post-production, and motion graphics.",
    image: _imgs["/assets/cinemix-team.jpg"],
    services: [
      { icon: Film,     title: "Brand Films",      desc: "Cinematic films that tell your brand story with depth and emotion." },
      { icon: Video,    title: "Documentary",      desc: "Long-form storytelling for brands, causes, and organisations." },
      { icon: Share2,   title: "Social Content",   desc: "Short-form video optimised for Reels, TikTok, and YouTube Shorts." },
      { icon: Scissors, title: "Post-Production",  desc: "Editing, colour grading, audio finishing, and multi-format delivery." },
      { icon: Sparkles, title: "Motion Graphics",  desc: "Explainer videos, logo animations, lower thirds, and kinetic typography." },
      { icon: Film,     title: "Corporate Video",  desc: "Internal comms, training, recruitment, and investor relations films." },
    ],
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageNav current="SERVICE" />

      {/* ── HERO ── */}
      <section className="relative bg-[#0b1940] overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-[#c8f135]" />

        <div className="absolute inset-0">
          <img src={_imgs["/assets/services-hero.jpg"]}
            alt="A'MIS Services" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, #0b1940 0%, #0b1940 40%, rgba(11,25,64,0.70) 58%, rgba(11,25,64,0.2) 80%, rgba(11,25,64,0.05) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0b1940, transparent)" }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: 72 }}>
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-16">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#c8f135]">Our Services</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.93] tracking-tighter mb-5">
                Three Studios.<br /><span className="text-[#c8f135]">One Standard.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
                className="text-white/55 text-base leading-relaxed mb-8 max-w-md">
                Specialist teams, each built to lead in their discipline — working as one unified group.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }} className="flex flex-wrap gap-3">
                <a href="#/contact" className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm rounded-lg bg-[#c8f135] text-[#0b1940] hover:brightness-110 transition-all"
                  style={{ boxShadow: "0 6px 20px #c8f13535" }}>
                  Start a Project <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#/about" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold text-sm rounded-lg hover:border-white/50 hover:bg-white/5 transition-all">
                  About Us <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* ── STUDIO SECTIONS ── */}
      {studios.map((studio, si) => {
        const isEven = si % 2 === 0;
        return (
          <section key={studio.id} className={`py-16 md:py-28 px-6 lg:px-16 ${isEven ? "bg-white" : "bg-[#f7f8fa]"}`}>
            <div className="max-w-7xl mx-auto">

              {/* Studio header */}
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={!isEven ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px]" style={{ background: studio.accent }} />
                    <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Studio {studio.number}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight leading-tight mb-3">
                    {studio.name}
                  </h2>
                  <span className="inline-block text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded mb-5" style={{ background: `${studio.accent}18`, color: studio.accent }}>{studio.tagline}</span>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">{studio.description}</p>
                  <a href={`#/${studio.id}`} className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm rounded text-white hover:brightness-110 transition-all" style={{ background: studio.accent, color: studio.id === "creotech" ? "#0b1940" : "white" }}>
                    View Studio <ArrowUpRight className="w-4 h-4" />
                  </a>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className={`relative rounded-2xl overflow-hidden ${!isEven ? "lg:order-1" : ""}`}>
                  <img src={studio.image} alt={studio.name} className="w-full h-56 md:h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1940]/60 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="text-5xl font-black text-white/10">{studio.number}</span>
                  </div>
                </motion.div>
              </div>

              {/* Services grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {studio.services.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div key={svc.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-sm transition-all duration-200">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:scale-110" style={{ background: `${studio.accent}15` }}>
                        <Icon className="w-5 h-5" style={{ color: studio.accent }} />
                      </div>
                      <div>
                        <h4 className="text-[#0b1940] font-bold text-sm mb-1">{svc.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{svc.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-16 bg-[#c8f135]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-[#0b1940]">Not sure which studio is right for you?</h2>
            <p className="text-[#0b1940]/60 text-base mt-1">Tell us about your project and we'll point you in the right direction.</p>
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
