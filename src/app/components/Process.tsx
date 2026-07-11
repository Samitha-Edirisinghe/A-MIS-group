import { motion } from "motion/react";
import { Search, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We deep-dive into your business, audience, and goals to map out exactly what needs to be built.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "A clear roadmap is defined — scope, timeline, technology stack, and success metrics.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Wireframes evolve into polished interfaces, tested against real user behaviour.",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Our engineers deliver clean, scalable code with full transparency throughout.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We ship with confidence and stay close for ongoing support and iteration.",
  },
];

export function Process() {
  return (
    <section className="py-28 px-6 lg:px-16 bg-white" id="process">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-[#c8f135]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight leading-tight">
            Our Process,<br /><span className="text-[#c8f135]">Step by Step.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-0 h-[1px] bg-gray-100 z-0" />
              )}

              <div className="relative z-10 p-6">
                {/* Number + icon row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#f7f8fa] border border-gray-100 group-hover:bg-[#0b1940] group-hover:border-[#0b1940] flex items-center justify-center transition-all duration-300">
                    <step.icon className="w-6 h-6 text-[#0b1940] group-hover:text-[#c8f135] transition-colors duration-300" />
                  </div>
                  <span className="text-3xl font-black text-gray-100 group-hover:text-[#c8f135]/20 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-[#0b1940] font-black text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-[#0b1940] rounded-2xl"
        >
          <div>
            <div className="text-white font-black text-xl mb-1">Ready to start?</div>
            <div className="text-white/50 text-sm">Let's walk through your project together.</div>
          </div>
          <a
            href="#/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#c8f135] text-[#0b1940] font-bold text-sm rounded hover:bg-[#d5f84a] transition-colors"
          >
            Schedule a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
