import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const socials = [
  {
    Icon: FaGithub,
    link: "https://github.com/anayethasan",
  },
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/anayet-hasan-niloy/",
  },
  {
    Icon: FaFacebook,
    link: "https://www.facebook.com/Anayet.hasan.niloy/",
  },
];
export default function Footer() {
  return (
    <footer className="relative py-10 px-4 border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="neon-text">©</span> {new Date().getFullYear()} Anayet Hossain Niloy
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with <span className="neon-text">React</span>,{" "}
          <span className="neon-text">JavaScript</span> & <span className="neon-text">Passion</span>
        </p>
        <div className="flex gap-3">
          {socials.map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg glass p-2.5 hover:neon-border hover:scale-110 transition"
            >
              <Icon className="text-primary" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
