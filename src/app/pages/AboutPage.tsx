import _imgs from "@/imageRegistry";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Target, Eye, Heart, Zap, Globe } from "lucide-react";
import { PageNav } from "../components/PageNav";
import { Footer } from "../components/Footer";

const clientLogos: { svg: React.ReactNode; name: string }[] = [
  { name: "TechStart", svg: (<svg width="120" height="36" viewBox="0 0 120 36" fill="none"><rect x="0" y="8" width="20" height="20" rx="4" fill="#c8f135" opacity="0.9"/><rect x="6" y="14" width="8" height="8" rx="2" fill="#060e2a"/><text x="28" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill="white" letterSpacing="-0.5">Tech</text><text x="66" y="24" fontFamily="sans-serif" fontWeight="400" fontSize="15" fill="white" opacity="0.5" letterSpacing="-0.5">Start</text></svg>) },
  { name: "NovaBuild", svg: (<svg width="130" height="36" viewBox="0 0 130 36" fill="none"><polygon points="10,28 18,8 26,28" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinejoin="round"/><circle cx="18" cy="18" r="3" fill="#38bdf8"/><text x="36" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="15" fill="white" letterSpacing="-0.5">NOVA</text><text x="80" y="24" fontFamily="sans-serif" fontWeight="300" fontSize="15" fill="white" opacity="0.45" letterSpacing="1">BUILD</text></svg>) },
  { name: "PixelForge", svg: (<svg width="138" height="36" viewBox="0 0 138 36" fill="none"><rect x="2" y="10" width="7" height="7" rx="1" fill="#a78bfa"/><rect x="11" y="10" width="7" height="7" rx="1" fill="#a78bfa" opacity="0.6"/><rect x="2" y="19" width="7" height="7" rx="1" fill="#a78bfa" opacity="0.6"/><rect x="11" y="19" width="7" height="7" rx="1" fill="#a78bfa" opacity="0.3"/><text x="28" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill="white" letterSpacing="-0.3">Pixel</text><text x="71" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill="#a78bfa" letterSpacing="-0.3">Forge</text></svg>) },
  { name: "UrbanEdge", svg: (<svg width="132" height="36" viewBox="0 0 132 36" fill="none"><path d="M4 26 L4 10 L14 10 L14 18 L9 18 L9 26Z" fill="white" opacity="0.85"/><path d="M16 10 L26 10 L26 26 L16 26 L16 18 L21 18 L21 10" fill="none" stroke="white" strokeWidth="2" opacity="0.4"/><text x="34" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1.5" opacity="0.85">URBAN</text><text x="34" y="33" fontFamily="sans-serif" fontWeight="300" fontSize="9" fill="#c8f135" letterSpacing="3" opacity="0.7">EDGE</text></svg>) },
  { name: "BluePeak", svg: (<svg width="128" height="36" viewBox="0 0 128 36" fill="none"><path d="M4 28 L14 10 L24 28Z" fill="#38bdf8" opacity="0.15"/><path d="M4 28 L14 10 L24 28" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round"/><line x1="14" y1="10" x2="14" y2="28" stroke="#38bdf8" strokeWidth="1.5" opacity="0.4"/><text x="32" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill="white" letterSpacing="-0.5">Blue</text><text x="68" y="24" fontFamily="sans-serif" fontWeight="300" fontSize="15" fill="white" opacity="0.5" letterSpacing="-0.5">Peak</text></svg>) },
  { name: "ClearVision", svg: (<svg width="148" height="36" viewBox="0 0 148 36" fill="none"><circle cx="14" cy="18" r="10" fill="none" stroke="white" strokeWidth="2" opacity="0.7"/><circle cx="14" cy="18" r="5" fill="none" stroke="#c8f135" strokeWidth="1.5"/><circle cx="14" cy="18" r="2" fill="#c8f135"/><text x="32" y="24" fontFamily="sans-serif" fontWeight="600" fontSize="14" fill="white" opacity="0.85" letterSpacing="0.5">Clear</text><text x="73" y="24" fontFamily="sans-serif" fontWeight="600" fontSize="14" fill="white" opacity="0.45" letterSpacing="0.5">Vision</text></svg>) },
  { name: "RiftMedia", svg: (<svg width="130" height="36" viewBox="0 0 130 36" fill="none"><path d="M4 10 L16 10 C22 10 24 14 24 18 C24 22 22 24 18 24 L14 24 L20 28 L14 28 L8 22 L14 22 C17 22 18 21 18 18 C18 15 17 14 14 14 L4 14Z" fill="white" opacity="0.8"/><text x="32" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="14" fill="white" letterSpacing="1">RIFT</text><text x="69" y="24" fontFamily="sans-serif" fontWeight="300" fontSize="14" fill="white" opacity="0.4" letterSpacing="1">MEDIA</text></svg>) },
  { name: "ApexDigital", svg: (<svg width="142" height="36" viewBox="0 0 142 36" fill="none"><path d="M14 8 L22 26 L6 26Z" fill="none" stroke="#c8f135" strokeWidth="2" strokeLinejoin="round"/><path d="M10 20 L18 20" stroke="#c8f135" strokeWidth="1.5"/><text x="30" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="white" letterSpacing="-0.3">Apex</text><text x="68" y="24" fontFamily="sans-serif" fontWeight="400" fontSize="14" fill="white" opacity="0.45" letterSpacing="-0.3">Digital</text></svg>) },
  { name: "ZenithLabs", svg: (<svg width="136" height="36" viewBox="0 0 136 36" fill="none"><rect x="4" y="8" width="22" height="20" rx="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4"/><path d="M8 24 L20 12 L20 24 L8 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><text x="34" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="-0.3">Zenith</text><text x="87" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#38bdf8" letterSpacing="-0.3">Labs</text></svg>) },
  { name: "FusionMark", svg: (<svg width="142" height="36" viewBox="0 0 142 36" fill="none"><circle cx="12" cy="18" r="8" fill="none" stroke="#a78bfa" strokeWidth="2"/><circle cx="20" cy="18" r="8" fill="none" stroke="#38bdf8" strokeWidth="2"/><path d="M16 12 C18 14 18 22 16 24" fill="none" stroke="white" strokeWidth="1.2" opacity="0.6"/><text x="36" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="white" letterSpacing="-0.3">Fusion</text><text x="88" y="24" fontFamily="sans-serif" fontWeight="400" fontSize="14" fill="white" opacity="0.5" letterSpacing="-0.3">Mark</text></svg>) },
  { name: "OrbCreative", svg: (<svg width="148" height="36" viewBox="0 0 148 36" fill="none"><circle cx="14" cy="18" r="9" fill="#c8f135" opacity="0.12"/><circle cx="14" cy="18" r="9" fill="none" stroke="#c8f135" strokeWidth="1.8"/><circle cx="14" cy="18" r="4" fill="#c8f135" opacity="0.7"/><text x="30" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="white" letterSpacing="-0.3">Orb</text><text x="56" y="24" fontFamily="sans-serif" fontWeight="300" fontSize="14" fill="white" opacity="0.5" letterSpacing="-0.3">Creative</text></svg>) },
  { name: "GridWave", svg: (<svg width="132" height="36" viewBox="0 0 132 36" fill="none"><line x1="4" y1="14" x2="24" y2="14" stroke="white" strokeWidth="1.5" opacity="0.3"/><line x1="4" y1="18" x2="24" y2="18" stroke="white" strokeWidth="1.5" opacity="0.6"/><line x1="4" y1="22" x2="24" y2="22" stroke="white" strokeWidth="1.5" opacity="0.3"/><path d="M4 18 Q9 10 14 18 Q19 26 24 18" fill="none" stroke="#c8f135" strokeWidth="2" strokeLinecap="round"/><text x="32" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="white" letterSpacing="-0.3">Grid</text><text x="60" y="24" fontFamily="sans-serif" fontWeight="400" fontSize="14" fill="white" opacity="0.5" letterSpacing="-0.3">Wave</text></svg>) },
];

function LogoMarquee() {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <div className="relative">
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
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

const stats = [
  { value: "500+",  label: "Happy Clients" },
  { value: "10+",   label: "Years Experience" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "98%",   label: "Client Satisfaction" },
];

const values = [
  { icon: Target, title: "Excellence",    desc: "We hold ourselves to the highest standard on every project, no matter the size or budget." },
  { icon: Heart,  title: "Care",          desc: "We genuinely care about our clients' success. Their win is our win." },
  { icon: Zap,    title: "Innovation",    desc: "We stay ahead of technology and design trends so our clients always get the best." },
  { icon: Globe,  title: "Collaboration", desc: "We work closely with every client as a true partner, not just a vendor." },
];

const team = [
  { name: "A'MIS Creotech Team", role: "Technology & Creative", image: _imgs["/assets/about-1.jpg"] },
  { name: "A'MIS Captura Team",  role: "Photography Studio",    image: _imgs["/assets/captura-hero-2.jpg"] },
  { name: "A'MIS Cinemix Team",  role: "Video Production",      image: _imgs["/assets/cinemix-team.jpg"] },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageNav current="ABOUT US" />

      {/* ── HERO ── */}
      <section className="relative bg-[#0b1940] overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30 bg-[#c8f135]" />

        <div className="absolute inset-0">
          <img src={_imgs["/assets/about-2.jpg"]}
            alt="A'MIS Group team" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, #0b1940 0%, #0b1940 40%, rgba(11,25,64,0.70) 58%, rgba(11,25,64,0.2) 80%, rgba(11,25,64,0.05) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0b1940, transparent)" }} />
        </div>

        <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: 72 }}>
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-16">
            <div className="max-w-xl lg:max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#c8f135]">About A'MIS Group</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.93] tracking-tighter mb-5">
                We Are<br /><span className="text-[#c8f135]">A'MIS Group.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
                className="text-white/55 text-base leading-relaxed mb-8 max-w-md">
                A creative technology group built on the belief that great work comes from great people, working with precision and passion.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }} className="flex flex-wrap gap-3">
                <a href="#/services" className="inline-flex items-center gap-2 px-6 py-3 font-black text-sm rounded-lg bg-[#c8f135] text-[#0b1940] hover:brightness-110 transition-all"
                  style={{ boxShadow: "0 6px 20px #c8f13535" }}>
                  Our Services <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold text-sm rounded-lg hover:border-white/50 hover:bg-white/5 transition-all">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* ── STORY ── */}
      <section className="py-16 md:py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#c8f135]" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight leading-tight mb-8">
                Built Different.<br /><span className="text-[#c8f135]">On Purpose.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                A'MIS Group was founded with a simple belief: that the best digital outcomes come from bringing together specialists — not generalists. Rather than one agency that does everything average, we built three studios that each do their thing at the highest level.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Over 10 years and 1000+ projects later, that philosophy has proven itself time and again. Our clients come to us because they want work that actually moves the needle.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                Today A'MIS Group operates three studios — Creotech, Captura, and Cinemix — serving clients across technology, photography, and video production.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img src={_imgs["/assets/about-team.jpg"]} alt="A'MIS team" className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover" />
              </div>
              <div className="hidden md:block absolute -bottom-6 -right-6 bg-[#c8f135] p-5 md:p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-black text-[#0b1940]">10+</div>
                <div className="text-[#0b1940]/60 text-sm mt-0.5">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-16 md:py-28 px-6 lg:px-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Mission & Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight">Why We Do What We Do.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, label: "Our Mission", color: "#c8f135", text: "To empower businesses of every size with world-class digital solutions — built with precision, delivered with care, and designed to create lasting impact." },
              { icon: Eye,    label: "Our Vision",  color: "#38bdf8", text: "To be the most trusted creative technology partner in the region — known not just for what we produce, but for how we make our clients feel throughout the process." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${item.color}15` }}>
                    <Icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <div className="text-xs font-black tracking-[0.2em] uppercase mb-4" style={{ color: item.color }}>{item.label}</div>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-16 md:py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">What Drives Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight">Our Values.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 md:p-8 border border-gray-100 rounded-2xl hover:border-[#c8f135]/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#c8f135]/10 flex items-center justify-center mb-5 group-hover:bg-[#c8f135] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#c8f135] group-hover:text-[#0b1940] transition-colors duration-300" />
                  </div>
                  <h3 className="text-[#0b1940] font-black text-xl mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STUDIOS ── */}

      {/* ── CLIENTS MARQUEE ── */}
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

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100 rounded-2xl p-6 md:p-10 lg:p-12 shadow-sm">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0b1940] tracking-tight mb-3">Want to work with us?</h2>
            <p className="text-gray-400 text-base">We'd love to hear about your project. Get in touch today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="#/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8f135] text-[#0b1940] font-black text-sm rounded hover:bg-[#d5f84a] transition-colors">
              Contact Us <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#/services" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 text-[#0b1940] font-bold text-sm rounded hover:bg-gray-50 transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
