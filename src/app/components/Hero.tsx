import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    label: "Technology",
    headline: "We Build Digital Products That",
    highlight: "Actually Work.",
    sub: "A'MIS Group delivers software, design, photography, and film — built to precision by three specialist studios.",
  },
  {
    id: 2,
    label: "Design",
    headline: "Interfaces That Feel",
    highlight: "Effortless.",
    sub: "A'MIS Creotech crafts web and mobile experiences grounded in research, refined through craft.",
  },
  {
    id: 3,
    label: "Visual",
    headline: "Stories Told Through",
    highlight: "Lens & Light.",
    sub: "A'MIS Captura and Cinemix bring your brand to life through professional photography and cinematic video.",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen bg-[#0b1940] flex flex-col justify-center overflow-hidden" id="home">

      {/* Thin lime top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c8f135]" />

      {/* Subtle right-side graphic */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #c8f135 0px, #c8f135 1px, transparent 1px, transparent 60px), repeating-linear-gradient(180deg, #c8f135 0px, #c8f135 1px, transparent 1px, transparent 60px)"
        }}
      />

      {/* Large muted number */}
      <div className="absolute right-16 bottom-16 text-[200px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
        {String(current + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-32 w-full">
        <div className="max-w-4xl">

          {/* Pill label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-[#c8f135] text-xs font-bold tracking-[0.25em] uppercase">{slide.label}</span>
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={slide.headline}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-4"
            >
              {slide.headline}
              <br />
              <span className="text-[#c8f135]">{slide.highlight}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Sub */}
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.sub}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-white/50 text-lg leading-relaxed max-w-xl mb-12"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-20">
            <motion.a
              href="#/services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#c8f135] text-[#0b1940] font-bold text-sm tracking-wide rounded hover:bg-[#d5f84a] transition-colors"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-bold text-sm tracking-wide rounded hover:border-white/50 transition-colors"
            >
              Get In Touch <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-4">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrent(i)}
                className="flex items-center gap-2 group"
              >
                <span
                  className="block h-[2px] transition-all duration-500"
                  style={{
                    width: i === current ? 32 : 16,
                    background: i === current ? "#c8f135" : "rgba(255,255,255,0.2)",
                  }}
                />
                <span className={`text-xs font-semibold transition-colors ${i === current ? "text-white" : "text-white/25"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {[
              { value: "500+", label: "Clients Served" },
              { value: "1000+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-8 first:pl-0">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-white/35 text-xs mt-0.5 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
