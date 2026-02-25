"use client";

import { useEffect, useState, useRef } from "react";

interface Glitter {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  delay: number;
}

/* Portfolio theme: brown-dark, brown-medium, brown-light, sage-green, mustard, grey-card */
const GLITTER_COLORS = [
  "#4a3428", "#5c4033", "#8b7355", "#6b5344", "#9ca88b",
  "#c9a227", "#e8e4e0", "#2d2d2d", "#a68b5e",
];

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [glitters, setGlitters] = useState<Glitter[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const glitterId = useRef(0);
  const lastGlitterTime = useRef(0);

  useEffect(() => {
    setIsPointerDevice(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isPointerDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });
      setIsVisible(true);

      const now = Date.now();
      const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);
      if (dist > 3 && now - lastGlitterTime.current > 25) {
        lastGlitterTime.current = now;
        lastPos.current = { x, y };

        const newGlitters: Glitter[] = [];
        const count = Math.min(3, Math.floor(dist / 8) + 1);
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const spread = 15 + Math.random() * 25;
          newGlitters.push({
            id: glitterId.current++,
            x: x + Math.cos(angle) * spread,
            y: y + Math.sin(angle) * spread,
            color: GLITTER_COLORS[Math.floor(Math.random() * GLITTER_COLORS.length)],
            size: 2 + Math.random() * 4,
            delay: Math.random() * 100,
          });
        }

        setGlitters((prev) => [...prev.slice(-40), ...newGlitters]);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [role='button'], input, textarea, select"));
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isPointerDevice]);

  useEffect(() => {
    if (glitters.length === 0) return;
    const timer = setTimeout(() => {
      setGlitters((prev) => prev.slice(-30));
    }, 600);
    return () => clearTimeout(timer);
  }, [glitters]);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Glitter particles */}
      {glitters.map((g) => (
        <div
          key={g.id}
          className="pointer-events-none fixed z-[9998] glitter-particle"
          style={{
            left: g.x,
            top: g.y,
            width: g.size,
            height: g.size,
            background: g.color,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 ${g.size * 1.5}px ${g.color}60`,
            animationDelay: `${g.delay}ms`,
          }}
        />
      ))}

      {/* Main cursor - concentric circles (target style) */}
      <div
        className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out flex items-center justify-center"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
        }}
      >
        <div
          className="relative flex items-center justify-center transition-all duration-200"
          style={{
            width: isHovering ? 66 : 58,
            height: isHovering ? 66 : 58,
          }}
        >
          {/* Outer glow / halo */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(232,228,224,0.5) 0%, rgba(232,228,224,0) 70%)",
              boxShadow: "0 0 32px 18px rgba(156,168,139,0.25)",
            }}
          />
          {/* Main body - cream circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: isHovering ? 32 : 28,
              height: isHovering ? 32 : 28,
              background: "#e8e4e0",
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.5), 0 1px 3px rgba(74,52,40,0.15)",
            }}
          />
          {/* Inner ring - sage/olive */}
          <div
            className="absolute rounded-full border-2"
            style={{
              width: isHovering ? 16 : 14,
              height: isHovering ? 16 : 14,
              borderColor: "#9ca88b",
              background: "transparent",
            }}
          />
          {/* Central dot - brown-dark */}
          <div
            className="absolute rounded-full"
            style={{
              width: isHovering ? 6 : 5,
              height: isHovering ? 6 : 5,
              background: "#4a3428",
            }}
          />
        </div>
      </div>
    </>
  );
}
