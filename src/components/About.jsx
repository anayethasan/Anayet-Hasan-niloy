import { motion } from "framer-motion";
import { SectionHeader, Counter } from "./Section";
import { stats } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="about-me" title="About Me" />
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl glass p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-muted-foreground">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span className="ml-2">~/about.sh</span>
            </div>
            <pre className="font-mono text-sm md:text-base leading-relaxed text-foreground/90 whitespace-pre-wrap">
{`$ hi i am
> Anayet Hossain Niloy

$ passion at
> I love turning hard problems into elegant code.
> Algorithms, data structures, and clean
> architecture are my playground.

$ ls --skills
> backend/  frontend/  competitive-programming/
> DSA/  systems/  problem solver/

$ echo "mindset"
> Engineer first. Ship reliable, scalable,
> well-tested software with empathy for users
> and teammates.`}
            </pre>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-xl glass p-6 text-center hover:neon-border transition"
              >
                <div className="text-3xl md:text-4xl font-bold neon-text font-mono">
                  <Counter to={s.value} suffix="+" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
