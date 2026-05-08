import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-100 h-96 w-96 rounded-full opacity-30 blur-3xl transition-transform duration-150 ease-out"
      style={{
        left: pos.x - 192,
        top: pos.y - 192,
        background: "radial-gradient(circle, var(--neon) 0%, transparent 70%)",
      }}
    />
  );
}
