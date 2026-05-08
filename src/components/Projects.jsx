import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SectionHeader } from "./Section";
import { projects } from "../data/portfolio";

const cats = ["All", "Full Stack", "Backend", "Frontend", "Competitive Programming Tools"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="work" title="My Projects" subtitle="Selected things I've built end-to-end." />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 font-mono text-xs transition ${
                filter === c ? "neon-border bg-primary/10 neon-text" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative overflow-hidden rounded-2xl glass p-6 hover:neon-border transition"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative">
                  <div className="font-mono text-xs neon-text mb-2">{p.category}</div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a href={p.live} className="inline-flex items-center gap-1.5 rounded-lg neon-border bg-primary/10 px-3 py-1.5 text-xs font-mono neon-text hover:bg-primary/20 transition">
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a href={p.github} className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-1.5 text-xs font-mono text-foreground hover:border-primary transition">
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
