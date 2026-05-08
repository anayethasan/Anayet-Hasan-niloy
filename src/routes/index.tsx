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