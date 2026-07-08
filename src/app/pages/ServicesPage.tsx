import { motion } from "motion/react";
import { ArrowUpRight, Code2, Smartphone, Globe, Palette, PenTool, TrendingUp, Camera, Video, Film, Share2, Scissors, Sparkles } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const studios = [
  {
    id: "creotech", number: "01", name: "A'MIS Creotech", accent: "#c8f135",
    tagline: "Technology & Creative Services",
    description: "Our flagship technology studio delivers end-to-end digital solutions — from enterprise software and mobile apps to UI/UX design, branding, and digital marketing.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1621024994278-e409544f4085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
      <section className="relative min-h-[90vh] overflow-hidden pt-16 flex flex-col">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="A'MIS Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1940]/95 via-[#0b1940]/65 to-[#0b1940]/25" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b1940] to-transparent" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c8f135]" />
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-28 w-full">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="w-10 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.28em] text-[#c8f135] uppercase">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-5 md:mb-7">
              Three Studios.<br /><span className="text-[#c8f135]">One Standard.</span>
            </h1>
            <p className="text-white/60 text-base md:text-xl leading-relaxed mb-8 md:mb-12 max-w-lg">
              Specialist teams, each built to lead in their discipline — working as one unified group.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "A'MIS Creotech", color: "#c8f135" },
                { label: "A'MIS Captura",  color: "#38bdf8" },
                { label: "A'MIS Cinemix",  color: "#a78bfa" },
              ].map(s => (
                <span key={s.label} className="px-4 py-2 text-xs font-black tracking-widest rounded-full border"
                  style={{ borderColor: `${s.color}40`, color: s.color, background: `${s.color}10` }}>{s.label}</span>
              ))}
            </div>
          </motion.div>
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
