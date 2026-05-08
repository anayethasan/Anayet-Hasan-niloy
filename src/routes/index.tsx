import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Qualifications from "../components/Qualifications";
import Projects from "../components/Projects";
import CompetitiveProgramming from "../components/CompetitiveProgramming";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import CursorGlow from "../components/CursorGlow";
import Loader from "../components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anayet Hossain Niloy — Software Engineer & Competitive Programmer" },
      { name: "description", content: "Portfolio of Anayet Hossain Niloy — full stack engineer, ICPC participant, and competitive programmer building scalable systems." },
      { property: "og:title", content: "Anayet Hossain Niloy — Software Engineer" },
      { property: "og:description", content: "Full stack engineer & competitive programmer. ICPC Participant — Ranked 72." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground grid-bg">
      <Loader />
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Qualifications />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
