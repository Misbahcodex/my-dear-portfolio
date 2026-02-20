"use client";

import { contactEmail } from "@/lib/portfolio-data";

export default function FooterSection() {
  return (
    <footer className="bg-[#4a3428] py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-32 h-8 bg-gradient-to-r from-[#6b5344] to-[#8b7355] rounded" />
        <div className="flex items-center gap-4 text-white/90">
          <span className="text-sm">Portfolio</span>
          <span className="text-white/50">•</span>
          <a
            href={`mailto:${contactEmail}`}
            className="text-sm hover:text-white transition-colors"
          >
            {contactEmail}
          </a>
        </div>
      </div>
      <p className="text-center text-white/60 text-sm mt-8">
        © {new Date().getFullYear()} Full-Stack Developer. Built with Next.js, React & Tailwind.
      </p>
    </footer>
  );
}
