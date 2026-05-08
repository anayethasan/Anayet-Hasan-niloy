import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { SectionHeader } from "./Section";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeader tag="get-in-touch" title="Contact" subtitle="Open to opportunities, collaborations, or just a good conversation about algorithms." />
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass p-6"
          >
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-muted-foreground">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span className="ml-2">~/contact.sh</span>
            </div>
            <pre className="font-mono text-sm leading-relaxed">
{`$ ./reach-out --channels`}
            </pre>
            <div className="mt-4 space-y-3">
              {[
                { icon: FaEnvelope, label: "mdneloy256@gmail.com", href: "mailto:mdneloy256@email.com" },
                { icon: FaGithub, label: "github.com/anayethasan", href: "https://github.com/anayethasan" },
                { icon: FaLinkedin, label: "linkedin.com/in/Anayet Hasan Niloy", href: "https://www.linkedin.com/in/anayet-hasan-niloy/" },
                { icon: FaFacebook, label: "facebook.com/Anayet Hasan Niloy", href: "https://www.facebook.com/Anayet.hasan.niloy/" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-primary/10 hover:neon-border transition group"
                >
                  <Icon className="text-primary text-xl group-hover:scale-110 transition" />
                  <span className="font-mono text-sm">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass p-6 space-y-4"
          >
            <div>
              <label className="font-mono text-xs text-muted-foreground">name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-lg bg-input border border-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary focus:neon-border transition"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground">email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-lg bg-input border border-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary focus:neon-border transition"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground">message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg bg-input border border-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary focus:neon-border transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg neon-border bg-primary px-6 py-3 font-mono text-sm font-bold text-primary-foreground hover:scale-[1.02] transition glow-shadow"
            >
              ./send_message.sh
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
