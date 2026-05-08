import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = ["Home", "About", "Skills", "Qualifications", "Projects", "CP", "Contact"];
const ids = ["home", "about", "skills", "qualifications", "projects", "cp", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass px-6 py-3">
        <button
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });

            window.history.pushState(null, "", " ");
          }}
          className="font-mono text-sm font-bold"
        >
          <span className="neon-text">&lt;</span>
          <span className="text-foreground">Anayet Hasan.Niloy</span>
          <span className="neon-text">/&gt;</span>
        </button>
        <nav className="hidden md:flex items-center gap-1">
          {items.map((label, i) => {
            const id = ids[i];
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();

                  document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                  });

                  window.history.pushState(null, "", " ");
                }}
                className="relative px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                {label}

                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg neon-border"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="menu"
        >
          ☰
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 rounded-xl glass p-3"
          >
            {items.map((label, i) => (
              <a
                key={ids[i]}
                href={`#${ids[i]}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
