import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search, MessageCircle, Mail, Phone } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const ACCENT = "#c8f135";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: "General",
    question: "What services does A'MIS Group offer?",
    answer: "A'MIS Group offers a comprehensive range of services including software development, web design & development, mobile app development, UI/UX design, graphic design, marketing services, professional photography, and video production through our three specialized studios: Creotech (technology & creative), Captura (photography), and Cinemix (video production)."
  },
  {
    category: "General",
    question: "How long has A'MIS Group been in business?",
    answer: "A'MIS Group has been delivering innovative digital solutions for over 8 years, with our specialized studios bringing together decades of combined experience in technology, photography, and video production."
  },
  {
    category: "General",
    question: "Where is A'MIS Group located?",
    answer: "Our main office is located at 179, Nagolla Rd, Matale, Sri Lanka. We serve clients globally and can work remotely or on-site depending on project requirements."
  },
  {
    category: "Services",
    question: "What technologies do you work with?",
    answer: "We work with modern, industry-standard technologies including React, Node.js, Python, TypeScript, Next.js, React Native, Flutter, AWS, Docker, and many more. We select the best technology stack based on your specific project requirements and long-term goals."
  },
  {
    category: "Services",
    question: "Do you offer custom software development?",
    answer: "Yes! Custom software development is one of our core services. We build scalable, enterprise-grade software solutions including web platforms, mobile apps, APIs, cloud-native applications, and backend systems tailored to your business needs."
  },
  {
    category: "Services",
    question: "Can you help with both design and development?",
    answer: "Absolutely. We provide end-to-end services from initial UI/UX design and user research through to full development, testing, and deployment. Our integrated approach ensures seamless collaboration between design and development teams."
  },
  {
    category: "Services",
    question: "What photography services does Captura provide?",
    answer: "Captura offers commercial photography, product photography, editorial & portrait photography, event coverage, corporate photography, and aerial drone photography. We handle everything from concept and shoot to retouching and delivery."
  },
  {
    category: "Services",
    question: "What video production services does Cinemix offer?",
    answer: "Cinemix specializes in brand films, documentaries, social media content, post-production, motion graphics, and corporate videos. We manage the full production process including scripting, storyboarding, filming, editing, color grading, and final delivery."
  },
  {
    category: "Pricing & Timeline",
    question: "How much do your services cost?",
    answer: "Project costs vary based on scope, complexity, timeline, and specific requirements. We provide transparent, detailed quotes after understanding your needs. Contact us for a free consultation and custom quote tailored to your project."
  },
  {
    category: "Pricing & Timeline",
    question: "How long does a typical project take?",
    answer: "Timeline depends on project complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. Photography and video projects typically range from 2-8 weeks. We provide detailed timelines during the discovery phase."
  },
  {
    category: "Pricing & Timeline",
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we offer ongoing support, maintenance, and continuous iteration services. We can provide monthly retainer packages or ad-hoc support based on your needs. We believe in building long-term partnerships with our clients."
  },
  {
    category: "Process",
    question: "What is your development process?",
    answer: "We follow a four-phase process: Discovery (understanding goals and requirements), Strategy (roadmap and planning), Build (iterative development with regular demos), and Launch (deployment with ongoing support). We maintain full transparency and open communication throughout."
  },
  {
    category: "Process",
    question: "How do you ensure project quality?",
    answer: "We maintain quality through code reviews, automated testing, usability testing, regular client demos, and adherence to industry best practices. Our experienced team ensures every deliverable meets the highest standards before handoff."
  },
  {
    category: "Process",
    question: "Can I see progress during development?",
    answer: "Absolutely! We provide weekly demos and maintain open communication channels. You'll have access to staging environments to review progress, provide feedback, and ensure the project is heading in the right direction."
  },
  {
    category: "Working Together",
    question: "Do you work with startups or only established companies?",
    answer: "We work with clients of all sizes — from ambitious startups to established enterprises. We tailor our approach and engagement model to fit your stage, budget, and goals."
  },
  {
    category: "Working Together",
    question: "Can you work with our existing team?",
    answer: "Yes! We're experienced in collaborating with in-house teams. We can augment your team, provide specialized expertise, or work independently — whatever works best for your organization."
  },
  {
    category: "Working Together",
    question: "Do you sign NDAs?",
    answer: "Absolutely. We understand the importance of confidentiality and are happy to sign NDAs before discussing your project details. Your intellectual property and business information are always protected."
  },
  {
    category: "Working Together",
    question: "What if I need to make changes during the project?",
    answer: "We expect and welcome feedback throughout the process. Minor adjustments are part of our iterative approach. For significant scope changes, we'll discuss timeline and budget implications transparently before proceeding."
  }
];

const categories = ["All", "General", "Services", "Pricing & Timeline", "Process", "Working Together"];

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#0b1940] pt-28 pb-20 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: ACCENT }} />
        
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200, 241, 53, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 241, 53, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-[2px]" style={{ background: ACCENT }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: ACCENT }}>
                Frequently Asked Questions
              </span>
              <span className="w-10 h-[2px]" style={{ background: ACCENT }} />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.92] tracking-tighter mb-6">
              How Can We<br />
              <span style={{ color: ACCENT }}>Help You?</span>
            </h1>
            
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Find answers to common questions about our services, process, and how we can help bring your vision to life.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 px-6 lg:px-16 border-b border-gray-100 sticky top-[72px] z-40 backdrop-blur-xl bg-white/95">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, i) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "text-[#0b1940]"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                }`}
                style={activeCategory === category ? { background: ACCENT } : {}}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-2xl font-black text-[#0b1940] mb-3">No results found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#c8f135]/30 transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-start justify-between gap-4 p-6 text-left"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-50 text-gray-400">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-black text-[#0b1940] leading-tight">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1"
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                          style={{ background: isOpen ? ACCENT : "#f7f8fa" }}
                        >
                          <ChevronDown
                            className="w-5 h-5 transition-colors"
                            style={{ color: isOpen ? "#0b1940" : "#9ca3af" }}
                          />
                        </div>
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2">
                            <p className="text-gray-500 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 lg:px-16 bg-[#f7f8fa]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0b1940] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(200, 241, 53, 0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(200, 241, 53, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: `${ACCENT}20` }}>
                <MessageCircle className="w-8 h-8" style={{ color: ACCENT }} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Still Have Questions?
              </h2>
              
              <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. Get in touch and we'll respond within one business day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-sm transition-all hover:brightness-110"
                  style={{ background: ACCENT, color: "#0b1940" }}
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </a>
                <a
                  href="tel:0762688365"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm border border-white/15 text-white hover:bg-white/8 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call: 076 268 8365
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
