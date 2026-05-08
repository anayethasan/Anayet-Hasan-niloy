import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaCode, FaGithub } from "react-icons/fa";
import { SiCodeforces, SiCodechef, SiLeetcode, SiHackerrank } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";
import profile from "../assets/profile.png";
import { platforms } from "../data/portfolio";

const platformIcons = {
  Codeforces: SiCodeforces,
  CodeChef: SiCodechef,
  LeetCode: SiLeetcode,
  HackerRank: SiHackerrank,
  CSES: FaCode,
  LightOJ: TbBrandCSharp,
  "Coding Ninjas": GiNinjaHeroicStance,
};

const phrases = ["Full Stack Developer", "Problem Solver", "ICPC Participant", "Backend Engineer", "Django Developer"];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = phrases[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
      } else if (del && text === "") {
        setDel(false);
        setIdx((i) => (i + 1) % phrases.length);
      } else {
        setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);
  return (
    <span className="font-mono neon-text">
      {text}
      <span className="animate-blink">▍</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-4">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">available for opportunities</span>
          </div>
          <h1 className="font-mono text-4xl md:text-5xl font-bold leading-tight">
            Software Engineer
            <br />
            <span className="text-gradient text-2xl md:text-3xl">& Competitive Programmer</span>
          </h1>
          <div className="mt-6 text-lg md:text-xl">
            <span className="text-muted-foreground">&gt; </span>
            <Typewriter />
          </div>
          <p className="mt-6 max-w-xl text-muted-foreground">
            A passionate Software Engineer focused on problem solving, scalable backend systems,
            modern frontend development, and competitive programming.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group relative overflow-hidden rounded-lg neon-border bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition hover:scale-105 glow-shadow">
              View Projects
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1ER1oFtKswVoOmVx6hbCc2_Am6ZUT3GNc"
              download
              className="inline-flex items-center gap-2 rounded-lg glass px-6 py-3 font-mono text-sm font-semibold text-foreground transition hover:scale-105 hover:border-primary"
            >
              <FaDownload /> Resume
            </a>
            <a
              href="https://github.com/anayethasan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg glass px-6 py-3 font-mono text-sm font-semibold text-foreground transition hover:scale-105 hover:border-primary"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[420px] md:h-130 flex items-center justify-center"
        >
          <div className="absolute inset-0 m-auto h-[300px] w-[300px] md:h-[360px] md:w-[360px] rounded-full bg-primary/20 blur-3xl" />
          <div className="relative h-52 w-52 md:h-64 md:w-64 rounded-full neon-border glow-shadow overflow-hidden z-10">
            <img src={profile} alt="Anayet Hossain Niloy" className="h-full w-full object-cover" width={768} height={768} />
          </div>

          {/* Orbit ring */}
          <div className="absolute inset-0 m-auto h-[380px] w-[380px] md:h-[480px] md:w-[480px] rounded-full border border-dashed border-primary/30" />

          {platforms.map((p, i) => {
            const Icon = platformIcons[p.name] || FaCode;
            const angle = (i / platforms.length) * Math.PI * 2;
            const r = 200;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                title={p.name}
                className="absolute z-20 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl glass neon-border animate-pulse-glow"
                style={{ left: `calc(50% + ${x}px - 28px)`, top: `calc(50% + ${y}px - 28px)` }}
                whileHover={{ scale: 1.25, rotate: 12 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon className="text-2xl text-primary" />
              </motion.a>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2 rounded-full glass neon-border px-4 py-2 animate-pulse-glow"
          >
            <HiSparkles className="text-primary" />
            <span className="font-mono text-xs md:text-sm font-semibold neon-text whitespace-nowrap">
              Pupil in Codeforces & 3☆ at CodeChef
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
