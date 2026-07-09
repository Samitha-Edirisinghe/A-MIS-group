import { motion } from "motion/react";
import {
  Code2, Smartphone, Globe, Palette,
  PenTool, TrendingUp, ArrowUpRight, ArrowRight, CheckCircle2,
  Search, Lightbulb, Hammer, Rocket,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const ACCENT = "#c8f135";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Scalable, enterprise-grade software built to perform. From custom web platforms to complex backend systems — engineered to grow with your business.",
    points: ["Custom web & desktop apps", "API design & integration", "Cloud-native architecture", "DevOps & CI/CD pipelines", "Legacy system modernisation"],
    tech: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Native and cross-platform mobile apps that feel right on every device. Full lifecycle — strategy, design, development, testing, and App Store submission.",
    points: ["iOS & Android native apps", "React Native & Flutter", "Offline-first architecture", "Push notifications & analytics", "App Store optimisation"],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "High-performance websites and web apps that are fast, accessible, and built to convert — clean engineering meeting thoughtful design.",
    points: ["Marketing & corporate websites", "E-commerce platforms", "CMS integration", "SEO-optimised architecture", "Performance & accessibility"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify", "WordPress"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1690369519543-c81a2121f740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Interfaces rooted in real user research. From discovery and wireframing to prototyping and usability testing — we design products people love.",
    points: ["User research & interviews", "Information architecture", "Wireframing & prototyping", "Usability testing", "Design systems"],
    tech: ["Figma", "Maze", "Hotjar", "Zeroheight"],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Visuals that make your brand impossible to ignore. Logo design, full identity systems, marketing materials, and motion graphics for every medium.",
    points: ["Logo & brand identity", "Print & packaging design", "Illustration & iconography", "Social media graphics", "Pitch decks & presentations"],
    tech: ["Illustrator", "Photoshop", "InDesign", "After Effects"],
  },
  {
    icon: TrendingUp,
    title: "Marketing Services",
    image: "https://images.unsplash.com/photo-1536148935331-408321065b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    description: "Data-driven digital marketing that grows your audience and maximises return. We plan, execute, and optimise across every relevant channel.",
    points: ["SEO & content strategy", "Paid search & social ads", "Email marketing automation", "Analytics & reporting", "Conversion rate optimisation"],
    tech: ["Google Ads", "Meta Ads", "HubSpot", "GA4", "Semrush"],
  },
];

const steps = [
  { icon: Search,    num: "01", title: "Discovery",  desc: "We deep-dive into your goals, audience, and constraints to define exactly what needs to be built." },
  { icon: Lightbulb, num: "02", title: "Strategy",   desc: "A clear roadmap — scope, timeline, tech stack, and success metrics agreed before we write a line of code." },
  { icon: Hammer,    num: "03", title: "Build",      desc: "Iterative development with full transparency. Weekly demos, open communication, no surprises." },
  { icon: Rocket,    num: "04", title: "Launch",     desc: "We ship with confidence and stay close for ongoing support and continuous iteration." },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "8+",   label: "Years Experience" },
  { value: "50+",  label: "Happy Clients" },
  { value: "98%",  label: "On-Time Delivery" },
];

export function CreotechPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* Hero — diagonal split canvas */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: '#0a1535' }}>

        {/* Mobile: full-bleed image with dark overlay */}
        <div className="md:hidden absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,21,53,0.87)' }} />
        </div>

        {/* Desktop: right image panel with angled left edge */}
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[54%] z-0"
          style={{ clipPath: 'polygon(13% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <img src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400" alt="Creotech workspace" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,21,53,0.5) 0%, rgba(10,21,53,0.1) 60%)' }} />
        </div>

        {/* Desktop: lime slash accent at the diagonal seam */}
        <div className="hidden md:block absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: 'calc(46% + 1px)', width: '3px', background: ACCENT, transform: 'skewX(-3.5deg)', boxShadow: `0 0 32px 6px ${ACCENT}55` }} />

        {/* Desktop: ghost watermark */}
        <div className="hidden md:block absolute left-[8%] bottom-[12%] font-black leading-none select-none pointer-events-none z-0"
          style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', color: 'rgba(200,241,53,0.04)', letterSpacing: '-0.05em' }}>01</div>

        {/* Desktop: grid overlay on dark side */}
        <div className="hidden md:block absolute top-0 left-0 bottom-0 w-[50%] z-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(200,241,53,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(200,241,53,0.07) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

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
              <span className="text-[10px] font-bold tracking-[0.32em] uppercase" style={{ color: ACCENT }}>A'MIS Group · Studio 01</span>
            </div>
            <h1 className="font-black text-white leading-[0.88] tracking-tighter mb-5 md:mb-8"
              style={{ fontSize: 'clamp(2.4rem, 7.5vw, 7rem)' }}>
              A'MIS<br /><span style={{ color: ACCENT, textShadow: `0 0 80px ${ACCENT}45` }}>Creotech</span>
            </h1>
            <p className="text-white/55 text-base md:text-lg leading-relaxed mb-6 md:mb-10 max-w-md">
              Technology &amp; creative studio delivering end-to-end digital solutions — software, mobile, web, design, and marketing.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Software", "Mobile", "Web", "UI/UX", "Branding", "Marketing"].map(tag => (
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
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px]" style={{ background: ACCENT }} />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight">What We Build</h2>
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
                  className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#c8f135]/30 transition-all duration-300 flex flex-col"
                >
                  {/* Service image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1940]/80 via-[#0b1940]/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: ACCENT }}>
                        <Icon className="w-4 h-4 text-[#0b1940]" />
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
                      {svc.tech.slice(0, 4).map((t) => (
                        <span key={t} className="text-[10px] font-bold px-2 py-0.5 bg-gray-50 text-gray-400 rounded border border-gray-100">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-width image banner */}
      <section className="relative h-52 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt="Creotech workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1940]/70 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Philosophy</div>
            <p className="text-white text-2xl md:text-3xl font-black max-w-2xl leading-tight tracking-tight">
              "We don't just deliver projects — we build digital products that last."
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 px-6 lg:px-16 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
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
      <section id="creotech-contact" className="py-16 md:py-24 px-6 lg:px-16 bg-[#0b1940]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px]" style={{ background: ACCENT }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: `${ACCENT}70` }}>Start a Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Ready to build<br />with Creotech?
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md">
              Tell us about your project and we'll respond within one business day.
            </p>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <a href="mailto:info@amisgroups.com"
              className="inline-flex items-center gap-2 px-8 py-4 font-black text-sm rounded-xl hover:brightness-110 transition-all"
              style={{ background: ACCENT, color: "#0b1940" }}>
              Email Creotech <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="tel:0762688365"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-sm rounded-xl border border-white/15 text-white hover:bg-white/8 transition-colors">
              Call: 076 268 8365
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}