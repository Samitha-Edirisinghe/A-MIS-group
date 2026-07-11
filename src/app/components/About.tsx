import _imgs from "@/imageRegistry";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Projects Done" },
  { value: "98%", label: "Success Rate" },
];

export function About() {
  return (
    <section className="py-28 px-6 lg:px-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-8 h-[2px] bg-[#c8f135]" />
          <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">About A'MIS Group</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] leading-tight tracking-tight mb-8">
              A Creative Tech Group<br />
              <span className="text-[#c8f135]">Built for Impact.</span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              A'MIS Group Pvt Ltd is a multi-disciplinary creative technology company. We operate three specialist studios — each a leader in its domain, united by a relentless commitment to quality.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              From enterprise software to cinematic video, our teams bring rigour, creativity, and craft to every project we take on.
            </p>

            {/* Mission / Vision */}
            <div className="space-y-4">
              {[
                { label: "Our Mission", text: "Empowering businesses through innovative digital solutions that make a lasting impact." },
                { label: "Our Vision", text: "To be the most trusted creative technology partner in the region." },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#c8f135] pl-5 py-1">
                  <div className="text-[#0b1940] font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>

            <motion.a
              href="#/services"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 mt-10 text-[#0b1940] font-bold text-sm hover:text-[#c8f135] transition-colors"
            >
              See our services <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={_imgs["/assets/about-3.jpg"]}
                alt="A'MIS Group team"
                className="w-full h-[480px] object-cover"
              />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 bg-[#0b1940] text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-black text-[#c8f135]">10+</div>
              <div className="text-white/60 text-sm mt-0.5">Years of Excellence</div>
            </div>

            {/* Lime corner accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#c8f135] rounded-tr-xl" />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-gray-100 rounded-2xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={`p-8 text-center ${i < 3 ? "border-r border-gray-100" : ""}`}>
              <div className="text-4xl font-black text-[#0b1940] mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
