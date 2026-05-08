import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lines = [
  "$ initializing Niloy.exe ...",
  "$ loading skills: DSA, Problem solving, C++, python, OOP, React, Node.js, express.js, My SQL",
  "$ rendering portfolio ... done ✓",
  "$ initializing neon engine ✓",
  "$ welcome, recruiter.",
];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= lines.length) {
      const t = setTimeout(() => setDone(true), 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown((s) => s + 1), 350);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
            className="fixed inset-0 z-200 flex items-center justify-center bg-background"
        >
          <div className="w-full max-w-lg p-6 font-mono text-sm">
            {lines.slice(0, shown).map((l, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === shown - 1 ? "neon-text" : "text-muted-foreground"}
              >
                {l}
              </motion.p>
            ))}
            <span className="neon-text animate-blink">▍</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
