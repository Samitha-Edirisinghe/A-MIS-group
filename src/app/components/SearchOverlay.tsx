import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowUpRight, FileText, Layers, Briefcase, Image, Film, Phone } from "lucide-react";
import { searchContent, type SearchItem } from "../data/searchIndex";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Page":             FileText,
  "Studio":           Layers,
  "Creotech Service": Briefcase,
  "Captura Service":  Image,
  "Cinemix Service":  Film,
  "Portfolio":        Layers,
  "Contact":          Phone,
};

const CATEGORY_COLORS: Record<string, string> = {
  "Page":             "#0b1940",
  "Studio":           "#c8f135",
  "Creotech Service": "#c8f135",
  "Captura Service":  "#38bdf8",
  "Cinemix Service":  "#a78bfa",
  "Portfolio":        "#f97316",
  "Contact":          "#10b981",
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    setResults(searchContent(query));
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, results.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && results[activeIndex]) {
        navigate(results[activeIndex].href);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, activeIndex, onClose]);

  const navigate = (href: string) => {
    window.location.hash = href.replace("#", "");
    onClose();
  };

  const popular: SearchItem[] = [
    { title: "A'MIS Creotech", description: "Technology & Creative Services", href: "#/creotech", category: "Studio", tags: [] },
    { title: "A'MIS Captura",  description: "Professional Photography",       href: "#/captura",  category: "Studio", tags: [] },
    { title: "A'MIS Cinemix",  description: "Cinematic Video Production",     href: "#/cinemix",  category: "Studio", tags: [] },
    { title: "Our Services",   description: "All studio services",            href: "#/services", category: "Page",   tags: [] },
    { title: "Portfolio",      description: "Our selected work",              href: "#/portfolio", category: "Page",  tags: [] },
    { title: "Contact Us",     description: "Start your project",            href: "#/contact",  category: "Page",   tags: [] },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 backdrop-blur-md px-4 pt-[10vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input row */}
            <div className="flex items-center gap-3 px-4 sm:px-5 py-4 border-b border-gray-100">
              <Search className="w-5 h-5 text-[#c8f135] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, services, portfolio…"
                className="flex-1 text-base sm:text-lg text-[#0b1940] placeholder-gray-300 outline-none bg-transparent min-w-0"
              />
              {query && (
                <button onClick={() => setQuery("")} className="shrink-0 text-gray-300 hover:text-gray-500 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
              <button onClick={onClose} className="shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-[#c8f135] flex items-center justify-center transition-colors text-[#0b1940]">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {/* Results */}
              {results.length > 0 && (
                <div className="py-2">
                  <div className="px-4 sm:px-5 py-2">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
                      {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
                    </span>
                  </div>
                  {results.map((item, i) => {
                    const Icon = CATEGORY_ICONS[item.category] ?? FileText;
                    const color = CATEGORY_COLORS[item.category] ?? "#0b1940";
                    const isActive = i === activeIndex;
                    return (
                      <button
                        key={`${item.href}-${item.title}`}
                        onClick={() => navigate(item.href)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`w-full flex items-center gap-4 px-4 sm:px-5 py-3 text-left transition-colors duration-100 ${isActive ? "bg-gray-50" : "hover:bg-gray-50"}`}
                      >
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                          <Icon className="w-4 h-4" style={{ color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[#0b1940] font-bold text-sm truncate">{item.title}</span>
                            <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded shrink-0" style={{ background: `${color}18`, color }}>
                              {item.category}
                            </span>
                          </div>
                          <p className="text-gray-400 text-xs truncate">{item.description}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-300 shrink-0" />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* No results */}
              {query.trim() && results.length === 0 && (
                <div className="py-12 text-center">
                  <Search className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                  <p className="text-gray-400 font-semibold text-sm">No results for "{query}"</p>
                  <p className="text-gray-300 text-xs mt-1">Try searching for a service, studio, or page name.</p>
                </div>
              )}

              {/* Popular / default state */}
              {!query.trim() && (
                <div className="py-3">
                  <div className="px-4 sm:px-5 py-2">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">Quick Links</span>
                  </div>
                  {popular.map((item) => {
                    const Icon = CATEGORY_ICONS[item.category] ?? FileText;
                    const color = CATEGORY_COLORS[item.category] ?? "#0b1940";
                    return (
                      <button
                        key={item.href + item.title}
                        onClick={() => navigate(item.href)}
                        className="w-full flex items-center gap-4 px-4 sm:px-5 py-3 text-left hover:bg-gray-50 transition-colors duration-100"
                      >
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                          <Icon className="w-4 h-4" style={{ color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[#0b1940] font-bold text-sm">{item.title}</div>
                          <div className="text-gray-400 text-xs">{item.description}</div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-300 shrink-0" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 sm:px-5 py-3 border-t border-gray-100 flex items-center gap-4 text-[11px] text-gray-300">
              <span><kbd className="font-mono bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded text-[10px]">↑↓</kbd> navigate</span>
              <span><kbd className="font-mono bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded text-[10px]">↵</kbd> open</span>
              <span><kbd className="font-mono bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded text-[10px]">Esc</kbd> close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
