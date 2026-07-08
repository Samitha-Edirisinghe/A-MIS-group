import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart",
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mjc2NDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Working with A'MIS Group was transformative. Their expertise helped us scale beyond our expectations — the attention to detail and innovative approach exceeded everything we hoped for.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, Digital Ventures",
    company: "Digital Ventures",
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mjc2NDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    content: "The commitment to excellence is unmatched. They delivered a product that exceeded our vision and delighted our users. A true partnership built on trust and exceptional results.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Innovate Labs",
    company: "Innovate Labs",
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mjc2NDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Professional, creative, and incredibly responsive. They took the time to understand our brand and delivered a solution that perfectly represents who we are.",
    rating: 5,
  },
];

const stats = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "500+", label: "Happy Clients" },
  { value: "100%", label: "Project Success" },
  { value: "24/7", label: "Support" },
];

export function Testimonials() {
  return (
    <section className="py-28 px-6 lg:px-16 bg-[#f7f8fa]" id="testimonials">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-[#c8f135]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#0b1940]/40 uppercase">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0b1940] tracking-tight leading-tight">
            What Our Clients<br /><span className="text-[#c8f135]">Say About Us.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-7 border border-gray-100 hover:border-[#c8f135]/30 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#c8f135] text-[#c8f135]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-[#c8f135]">
                  <ImageWithFallback src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[#0b1940] font-bold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-3xl font-black text-[#0b1940] mb-1">{s.value}</div>
              <div className="text-gray-400 text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
