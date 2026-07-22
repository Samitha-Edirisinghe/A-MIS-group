import _imgs from "@/imageRegistry";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web Design", "Mobile Apps", "Branding"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design",
    image: _imgs["/assets/portfolio-3.jpg"],
    description: "Modern e-commerce solution with seamless checkout experience",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Fitness App",
    category: "Mobile Apps",
    image: _imgs["/assets/portfolio-2.jpg"],
    description: "Comprehensive fitness tracking with AI-powered workout plans",
    tech: ["React Native", "Firebase", "ML"],
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Branding",
    image: _imgs["/assets/portfolio-hero.jpg"],
    description: "Complete brand overhaul for luxury lifestyle company",
    tech: ["Figma", "Illustrator", "After Effects"],
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Web Design",
    image: _imgs["/assets/portfolio-1.jpg"],
    description: "Analytics platform with real-time data visualization",
    tech: ["Vue.js", "D3.js", "GraphQL"],
  },
  {
    id: 5,
    title: "Travel Companion",
    category: "Mobile Apps",
    image: _imgs["/assets/portfolio-2.jpg"],
    description: "AI-powered travel planning and booking application",
    tech: ["Flutter", "Python", "TensorFlow"],
  },
  {
    id: 6,
    title: "Tech Startup Branding",
    category: "Branding",
    image: _imgs["/assets/portfolio-hero.jpg"],
    description: "Dynamic brand identity for innovative tech startup",
    tech: ["Branding", "Motion", "3D Design"],
  },
];

export function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-28 px-6 lg:px-16 bg-[#f7f8fa]" id="portfolio">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#c8f135]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight leading-tight">
              Featured<br /><span className="text-[#c8f135]">Projects.</span>
            </h2>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? "bg-[#0b1940] text-white"
                    : "bg-white text-gray-500 hover:text-[#0b1940] border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#c8f135]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden h-56">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover CTA */}
                  <div className="absolute inset-0 bg-[#0b1940]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 text-white font-bold text-sm border border-white/30 px-5 py-2.5 rounded hover:bg-white/10 transition-colors">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[#c8f135] text-[10px] font-black tracking-[0.2em] uppercase mb-2 bg-[#0b1940] inline-block px-2 py-0.5 rounded">
                    {project.category}
                  </div>
                  <h3 className="text-[#0b1940] font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] text-gray-400 border border-gray-100 px-2 py-0.5 rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 text-[#0b1940] font-bold text-sm border border-[#0b1940]/20 px-8 py-3.5 rounded hover:bg-[#0b1940] hover:text-white transition-all duration-200"
          >
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
