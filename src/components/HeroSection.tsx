"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[75vh] bg-gray-100 overflow-x-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-w-0">
          {/* Profile image - responsive, constrains to viewport */}
          <div className="relative flex-shrink-0 w-full max-w-[480px] sm:max-w-[420px] lg:max-w-[680px] xl:max-w-[680px] animate-hero-in opacity-0">
            {!imgError ? (
              <Image
                src="/profile-image.svg"
                alt="Profile"
                width={512}
                height={512}
                className="w-full h-full object-contain"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="aspect-square bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                profile-image.svg
              </div>
            )}
          </div>

          {/* Headline - flex layout: stacks on mobile, side-by-side on desktop */}
          <div className="flex-1 text-center lg:text-left min-w-0 w-full animate-hero-in opacity-0 stagger-2">
            <h1 className="font-[family-name:var(--font-lora)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4a3428] leading-tight mb-4 lg:mb-6">
              Full-Stack Developer crafting sleek, scalable, and high-performance web experiences.
            </h1>
            <p className="font-[family-name:var(--font-lora)] text-base sm:text-lg md:text-xl text-[#5c4033] max-w-2xl mx-auto lg:mx-0">
              Highly responsive applications using React, Next.js and TypeScript. Focused on UI perfection and performance.
            </p>
          </div>
        </div>
      </div>

      {/* About Me - responsive positioning */}
      
    </section>
  );
}
