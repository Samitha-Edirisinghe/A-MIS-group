import _imgs from "@/imageRegistry";
import { motion } from "motion/react";
import {
  ArrowUpRight, ArrowRight, CheckCircle2,
  Camera, Aperture, Image, Users, Building2,
  Search, Lightbulb, SlidersHorizontal,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const ACCENT = "#38bdf8";

const stats = [
  { value: "150+", label: "Shoots Completed" },
  { value: "5+",   label: "Years Experience" },
  { value: "40+",  label: "Brand Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Aperture,
    title: "Commercial Photography",
    image: _imgs["/assets/captura-gallery-1.jpg"],
    description: "Photography crafted to serve your brand and marketing goals — advertising campaigns, catalogue imagery, and billboard-ready shots that stop people in their tracks.",
    points: ["Advertising & campaign shoots", "Catalogue & lookbook photography", "Billboard & OOH imagery", "Art-directed concept shoots", "Brand lifestyle photography"],
    tech: ["Studio Lighting", "On-Location", "Art Direction", "Post-Editing"],
  },
  {
    icon: Image,
    title: "Editorial & Portrait",
    image: _imgs["/assets/captura-hero-2.jpg"],
    description: "People photography with depth and character. Executive headshots, team portraits, editorial fashion and magazine features — we capture the personality behind the person.",
    points: ["Executive & corporate headshots", "Team & staff portraits", "Editorial & magazine features", "Fashion & lifestyle editorial", "Actor & model portfolios"],
    tech: ["Natural Light", "Studio Setup", "Retouching", "Editorial"],
  },
  {
    icon: Camera,
    title: "Product Photography",
    image: _imgs["/assets/captura-1.jpg"],
    description: "E-commerce and product imagery that sells. White background, on-location, and styled scenes — images optimised for every platform and print format.",
    points: ["White background / cut-out shots", "Styled & in-context scenes", "360° product photography", "Food & beverage photography", "Jewellery & luxury goods"],
    tech: ["Macro Lens", "Light Box", "Colour Grading", "360° Rig"],
  },
  {
    icon: Users,
    title: "Events Coverage",
    image: _imgs["/assets/captura-hero.jpg"],
    description: "Comprehensive photo coverage of corporate events, conferences, product launches, and exhibitions. We work discreetly and deliver polished galleries fast.",
    points: ["Corporate events & conferences", "Product launches & activations", "Exhibitions & trade shows", "Awards ceremonies", "Same-day turnaround available"],
    tech: ["Fast Lens", "Discreet", "Same-Day Edit", "Gallery Delivery"],
  },
  {
    icon: Building2,
    title: "Corporate Photography",
    image: _imgs["/assets/captura-gallery-3.jpg"],
    description: "Consistent, on-brand imagery for your entire organisation — annual reports, investor decks, internal communications, and your company website.",
    points: ["Annual report photography", "Office & workplace photography", "Leadership & board portraits", "Multi-location shoots", "Investor & stakeholder materials"],
    tech: ["Brand Guidelines", "Consistency", "Multi-Site", "Licensing"],
  },
  {
    icon: Aperture,
    title: "Aerial & Drone",
    image: _imgs["/assets/captura-gallery-2.jpg"],
    description: "Stunning aerial perspectives for real estate, events, and landscape photography. Licensed drone operators delivering cinematic shots from above.",
    points: ["Real estate aerials", "Event & venue overviews", "Construction progress", "Landscape & tourism", "Licensed & insured operators"],
    tech: ["DJI Drone", "4K Aerial", "RAW Output", "CAA Licensed"],
  },
];

const steps = [
  { icon: Search,            num: "01", title: "Brief & Concept",  desc: "We align on your brand, goals, and visual language before picking up a camera." },
  { icon: Lightbulb,         num: "02", title: "Pre-Production",   desc: "Location scouting, mood boards, props, and shot lists — every detail planned in advance." },
  { icon: Camera,            num: "03", title: "Shoot",            desc: "Professional crew on location or in studio. We direct, capture, and art-direct every frame." },
  { icon: SlidersHorizontal, num: "04", title: "Edit & Deliver",   desc: "Retouching, colour grading, and gallery delivery in all formats you need." },
];

export function CapturaPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white">

      {/* Nav */}
      <Navbar />

      {/* Hero — diagonal split canvas */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: '#0a1535' }}>

        {/* Mobile: full-bleed image with dark overlay */}
        <div className="md:hidden absolute inset-0 z-0">
          <img src={_imgs["/assets/captura-gallery-1.jpg"]} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,21,53,0.87)' }} />
        </div>

        {/* Desktop: right image panel with angled left edge */}
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[54%] z-0"
          style={{ clipPath: 'polygon(13% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <img src={_imgs["/assets/captura-gallery-1.jpg"]} alt="Captura photography" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,21,53,0.5) 0%, rgba(10,21,53,0.1) 60%)' }} />
        </div>

        {/* Desktop: sky-blue slash accent at the diagonal seam */}
        <div className="hidden md:block absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: 'calc(46% + 1px)', width: '3px', background: ACCENT, transform: 'skewX(-3.5deg)', boxShadow: `0 0 32px 6px ${ACCENT}55` }} />

        {/* Desktop: ghost watermark */}
        <div className="hidden md:block absolute left-[8%] bottom-[12%] font-black leading-none select-none pointer-events-none z-0"
          style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', color: 'rgba(56,189,248,0.04)', letterSpacing: '-0.05em' }}>02</div>

        {/* Desktop: grid overlay on dark side */}
        <div className="hidden md:block absolute top-0 left-0 bottom-0 w-[50%] z-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-30" style={{ background: ACCENT }} />

        {/* Navbar spacer */}
        <div className="h-16 shrink-0" />

        {/* Left-side text content */}
        <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-16 w-full py-12 md:py-16">
          <motion.div initial={{ opacity: 0, x: -48 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-[520px]">
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <span className="w-10 h-[2px]" style={{ background: ACCENT }} />
              <span className="text-[10px] font-bold tracking-[0.32em] uppercase" style={{ color: ACCENT }}>A'MIS Group · Studio 02</span>
            </div>
            <h1 className="font-black text-white leading-[0.88] tracking-tighter mb-5 md:mb-8"
              style={{ fontSize: 'clamp(2.4rem, 7.5vw, 7rem)' }}>
              A'MIS<br /><span style={{ color: ACCENT, textShadow: `0 0 80px ${ACCENT}45` }}>Captura</span>
            </h1>
            <p className="text-white/55 text-base md:text-lg leading-relaxed mb-6 md:mb-10 max-w-md">
              Professional photography studio built for commercial excellence. Every frame composed with artistic precision and clear commercial intent.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Commercial", "Editorial", "Product", "Events", "Corporate", "Aerial"].map(tag => (
                <span key={tag} className="px-3 py-1.5 text-[11px] font-bold tracking-wide text-white/50 border rounded"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

      </section>

      {/* Services */}
      <section className="py-16 md:py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px]" style={{ background: ACCENT }} />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight">Photography Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#38bdf8]/30 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1940]/80 via-[#0b1940]/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: ACCENT }}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-[#0b1940] mb-2 leading-tight">{svc.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{svc.description}</p>
                    <ul className="flex flex-col gap-1.5 mb-4">
                      {svc.points.slice(0, 3).map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: ACCENT }} />
                          <span className="text-xs text-gray-500">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                      {svc.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold px-2 py-0.5 bg-gray-50 text-gray-400 rounded border border-gray-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-width quote banner */}
      <section className="relative h-52 md:h-80 overflow-hidden">
        <img
          src={_imgs["/assets/captura-gallery-3.jpg"]}
          alt="Captura studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1940]/75 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Philosophy</div>
            <p className="text-white text-2xl md:text-3xl font-black max-w-2xl leading-tight tracking-tight">
              "Every image we create is built with commercial purpose and artistic soul."
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 px-6 lg:px-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px]" style={{ background: ACCENT }} />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight">Our Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${ACCENT}15` }}>
                      <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <span className="text-3xl font-black text-gray-100">{step.num}</span>
                  </div>
                  <h3 className="text-[#0b1940] font-black text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="captura-contact" className="py-16 md:py-24 px-6 lg:px-16 bg-[#0b1940]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px]" style={{ background: ACCENT }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: `${ACCENT}70` }}>
                Book a Shoot
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Ready to work<br />with Captura?
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md">
              Share your brief and we'll send a tailored proposal within one business day.
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <a
              href="mailto:info@amisgroups.com"
              className="inline-flex items-center gap-2 px-8 py-4 font-black text-sm rounded-xl text-white hover:brightness-110 transition-all"
              style={{ background: ACCENT }}
            >
              Email Captura <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:0762688365"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm rounded-xl border border-white/15 text-white hover:bg-white/8 transition-colors"
            >
              Call: 077 003 1808
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}