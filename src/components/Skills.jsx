import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./Section";
import { skills } from "../data/portfolio";

const categories = ["All", ...Object.keys(skills)];

export default function Skills() {
  const [active, setActive] = useState("All");
  const list =
    active === "All"
      ? Array.from(new Set(Object.values(skills).flat()))
      : skills[active];

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="tech-stack" title="Skills & Tools" subtitle="Languages, frameworks, and tools I use to ship." />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 font-mono text-xs transition ${
                active === c ? "neon-border bg-primary/10 neon-text" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {list.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="group rounded-xl glass p-4 text-center cursor-default hover:neon-border transition"
              >
                <p className="font-mono text-sm text-foreground group-hover:neon-text transition">{s}</p>
                <div className="mt-3 h-1 w-full rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${70 + Math.random() * 30}%` }}
                    transition={{ duration: 1, delay: i * 0.04 }}
                    viewport={{ once: true }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
