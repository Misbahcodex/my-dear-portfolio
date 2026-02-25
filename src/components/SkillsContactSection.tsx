"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateInView from "./AnimateInView";
import { skillIcons } from "@/lib/skills-data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden bg-[#dfdfdf]"
    >
      <div className="max-w-7xl mx-auto min-w-0">
        <AnimateInView variant="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4a3428] mb-16 text-center">
            Skills
          </h2>
        </AnimateInView>

        {/* Marquee - skill icons moving in a line */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee will-change-transform">
            {[...skillIcons, ...skillIcons].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 flex flex-col items-center gap-2"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gray-50 p-4 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-slate-600">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
