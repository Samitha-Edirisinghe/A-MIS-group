import { motion } from "motion/react";
import {
  Code2, Smartphone, Globe, Palette, PenTool, TrendingUp,
  Camera, Video, ArrowUpRight,
} from "lucide-react";

const companies = [
  {
    id: "creotech",
    number: "01",
    name: "A'MIS\nCreotech",
    tagline: "Technology & Creative",
    accent: "#c8f135",
    description: "End-to-end digital solutions — software, mobile, web, design, and marketing.",
    services: [
      { icon: Code2,       label: "Software Development" },
      { icon: Smartphone,  label: "Mobile App Development" },
      { icon: Globe,       label: "Web Design & Development" },
      { icon: Palette,     label: "UI/UX Design" },
      { icon: PenTool,     label: "Graphic Design" },
      { icon: TrendingUp,  label: "Marketing Services" },
    ],
  },
  {
    id: "captura",
    number: "02",
    name: "A'MIS\nCaptura",
    tagline: "Professional Photography",
    accent: "#38bdf8",
    description: "Artistic precision for commercial, editorial, corporate, product and event photography.",
    services: [
      { icon: Camera, label: "Commercial Photography" },
      { icon: Camera, label: "Editorial & Portrait" },
      { icon: Camera, label: "Product Photography" },
      { icon: Camera, label: "Events Coverage" },
      { icon: Camera, label: "Corporate Photography" },
    ],
  },
  {
    id: "cinemix",
    number: "03",
    name: "A'MIS\nCinemix",
    tagline: "Video Production",
    accent: "#a78bfa",
    description: "Cinematic-quality video from concept to delivery — brand films, docs, and social content.",
    services: [
      { icon: Video, label: "Brand Films" },
      { icon: Video, label: "Documentary" },
      { icon: Video, label: "Social Content" },
      { icon: Video, label: "Post-Production" },
      { icon: Video, label: "Motion Graphics" },
    ],
  },
];

export function Services() {
  return (
    <section className="bg-[#f7f8fa] py-28 px-6 lg:px-16" id="services">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight leading-tight">
              Three Studios.<br />
              <span className="text-[#c8f135]">One Group.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs md:text-right">
            Specialist teams, each built to lead in their discipline — working as one unified group.
          </p>
        </motion.div>

        {/* 3-column company cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {companies.map((co, ci) => (
            <motion.div
              key={co.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              {/* Colored top bar */}
              <div className="h-1 w-full" style={{ background: co.accent }} />

              <div className="p-8 flex flex-col flex-1">
                {/* Number */}
                <span className="text-xs font-black tracking-[0.2em] text-gray-200 mb-4 block">
                  {co.number}
                </span>

                {/* Company name */}
                <h3 className="text-3xl font-black text-[#0b1940] leading-tight tracking-tight mb-2 whitespace-pre-line">
                  {co.name}
                </h3>

                {/* Tagline pill */}
                <span
                  className="inline-block self-start text-[10px] font-black tracking-[0.18em] uppercase px-2.5 py-1 rounded mb-5"
                  style={{ background: `${co.accent}18`, color: co.accent }}
                >
                  {co.tagline}
                </span>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {co.description}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 mb-6" />

                {/* Services list */}
                <ul className="flex flex-col gap-3 flex-1">
                  {co.services.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <li key={svc.label} className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                          style={{ background: `${co.accent}15` }}
                        >
                          <Icon className="w-3.5 h-3.5" style={{ color: co.accent }} />
                        </div>
                        <span className="text-[#0b1940] text-sm font-semibold">{svc.label}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <a
                  href={`#/${co.id}`}
                  className="inline-flex items-center gap-1.5 mt-8 text-xs font-bold tracking-wider uppercase transition-colors group-hover:gap-2.5"
                  style={{ color: co.accent }}
                >
                  Work with us <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0b1940] rounded-2xl px-8 py-6"
        >
          <div>
            <div className="text-white font-black text-lg">Not sure where to start?</div>
            <div className="text-white/40 text-sm mt-0.5">We'll help you find the right studio for your project.</div>
          </div>
          <a
            href="#/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#c8f135] text-[#0b1940] font-bold text-sm rounded-lg hover:bg-[#d5f84a] transition-colors"
          >
            Get In Touch <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
