"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[90vh] bg-[#4a3428] px-6 py-16 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Profile image area - rotated sage green square with pins */}
        <div className="relative flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Pins */}
            <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-white/90 z-10" />
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white/90 z-10" />
            {/* Sage green rotated square */}
            <div className="absolute inset-0 bg-[#9ca88b] rotate-12 rounded-sm shadow-xl">
              {/* Profile image container - inside rotated square */}
              <div className="absolute inset-3 overflow-hidden rounded-sm">
                {!imgError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-[#8b9a7a] flex items-center justify-center text-white/80 text-sm p-4 text-center">
                    Add profile.jpg to public folder
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Headline and sub-headline */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            Full-Stack Developer building modern web products from idea to production.
          </h1>
          <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-white/90 max-w-2xl">
            Highly responsive applications using React, Next.js, and TypeScript. Focused on clean UI, scalable architecture, and real-world impact.
          </p>
        </div>

        {/* About Me callout - mustard yellow rotated square */}
        <Link
          href="#about"
          className="hidden xl:flex relative flex-shrink-0 group"
        >
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white/90 z-10" />
          <div className="w-32 h-32 bg-[#c9a227] -rotate-12 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-[#4a3428] font-semibold text-lg rotate-12">
              About Me
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile About Me link */}
      <Link
        href="#about"
        className="xl:hidden absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-[#c9a227] text-[#4a3428] font-semibold rounded"
      >
        About Me
      </Link>
    </section>
  );
}
