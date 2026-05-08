import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { qualifications } from "../data/portfolio";

export default function Qualifications() {
  return (
    <section id="qualifications" className="relative py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeader tag="journey" title="Qualifications" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary to-transparent" />
          {qualifications.map((q, i) => (
            <motion.div
              key={q.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`relative mb-10 md:w-1/2 pl-12 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute top-2 h-4 w-4 rounded-full bg-primary glow-shadow animate-pulse-glow ${
                  i % 2 === 0 ? "left-2 md:left-auto md:-right-2" : "left-2 md:-left-2"
                }`}
              />
              <div className="rounded-xl glass p-5 hover:neon-border transition">
                <p className="font-mono text-xs neon-text">{q.year}</p>
                <h3 className="mt-1 font-bold text-lg">{q.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{q.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
