import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  content: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel container */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Show current testimonial and next one on desktop */}
            {[currentTestimonial, testimonials[(currentIndex + 1) % testimonials.length]].map((t, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className={`group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.06] hover:border-[#c8f135]/30 transition-all duration-500 flex flex-col ${idx === 1 ? 'hidden md:flex' : ''}`}
              >
                {/* Accent corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#c8f135]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote icon */}
                <div className="mb-6">
                  <svg className="w-10 h-10 text-[#c8f135]/30 group-hover:text-[#c8f135]/50 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Star rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star 
                      key={s} 
                      className="w-5 h-5 fill-[#c8f135] text-[#c8f135] group-hover:scale-110 transition-transform duration-300" 
                      style={{ transitionDelay: `${s * 50}ms` }} 
                    />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-white/80 text-lg leading-relaxed mb-8 flex-grow">"{t.content}"</p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  {/* Avatar with initial */}
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c8f135] to-[#a0c820] flex items-center justify-center text-[#0b1940] font-black text-lg shadow-lg shadow-[#c8f135]/20">
                      {t.name.charAt(0)}
                    </div>
                    {/* Active status indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#0b1940]" />
                  </div>
                  
                  {/* Name and role */}
                  <div>
                    <div className="text-white font-bold text-base">{t.name}</div>
                    <div className="text-[#c8f135]/70 text-sm mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#c8f135]/50 transition-all flex items-center justify-center group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-[#c8f135] transition-colors" />
        </motion.button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#c8f135] w-8' 
                  : 'bg-white/20 hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToNext}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#c8f135]/50 transition-all flex items-center justify-center group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-[#c8f135] transition-colors" />
        </motion.button>
      </div>
    </div>
  );
}
