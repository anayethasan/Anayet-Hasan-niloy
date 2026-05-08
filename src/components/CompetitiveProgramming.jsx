import { motion } from "framer-motion";
import { HiTrophy } from "react-icons/hi2";
import { SectionHeader, Counter } from "./Section";
import { cpStats } from "../data/portfolio";

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="competitive-programming" title="Competitive Programming" subtitle="Years of grinding contests, algorithms, and data structures." />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass neon-border p-8 mb-10 text-center glow-shadow"
        >
          <HiTrophy className="mx-auto text-5xl text-primary animate-pulse-glow" />
          <h3 className="mt-4 text-2xl md:text-3xl font-bold font-mono neon-text">
            ICPC Participant — Ranked 72
          </h3>
          <p className="mt-2 text-muted-foreground">Regional contest highlight • Team representative</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cpStats.map((s, i) => (
            <motion.div
              key={s.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-xl glass p-6 hover:neon-border transition"
            >
              <p className="font-mono text-xs text-muted-foreground">{s.platform}</p>
              {s.rating > 0 ? (
                <p className="mt-2 text-3xl font-bold neon-text font-mono">
                  <Counter to={s.rating} />
                </p>
              ) : (
                <p className="mt-2 text-3xl font-bold neon-text font-mono">—</p>
              )}
              <p className="mt-1 text-xs text-primary font-mono">{s.label}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Solved</p>
                <p className="text-xl font-mono font-bold">
                  <Counter to={s.solved} suffix="+" />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
