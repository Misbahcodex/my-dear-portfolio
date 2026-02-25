"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "fadeUpStagger";

interface AnimateInViewProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}

export default function AnimateInView({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = "transition-all duration-700 ease-out";
  const variantClasses: Record<Variant, string> = {
    fadeUp: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    fadeIn: visible ? "opacity-100" : "opacity-0",
    slideLeft: visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
    slideRight: visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
    scale: visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    fadeUpStagger: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
  };

  return (
    <div
      ref={ref}
      className={`${baseClass} ${variantClasses[variant]} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
