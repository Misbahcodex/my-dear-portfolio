"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "MP Mutah",
    description: "A production business website with clean UI, performance optimization, and mobile responsiveness.",
    liveUrl: "https://www.mpmutah.com",
    codeUrl: null,
    image: "/projects/mpmutah.jpg",
  },
  {
    title: "Leona Lending",
    description: "A fintech/lending platform marketing website with a professional product feel.",
    liveUrl: "https://www.leonalending.com",
    codeUrl: null,
    image: "/projects/leonalending.jpg",
  },
  {
    title: "KSA Dev Auth",
    description: "An authentication-based full-stack demo showcasing login/signup flows.",
    liveUrl: "https://ksadevauth.vercel.app",
    codeUrl: null,
    image: "/projects/ksadevauth.jpg",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-[#e8e4e0] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      <div className="relative h-48 bg-[#d4cfc9] overflow-hidden">
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8b7355] to-[#6b5344] text-white/80 text-sm p-4 text-center">
            Add {project.image.split("/").pop()} to public folder
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#4a3428] mb-2">
          {project.title}
        </h3>
        <p className="text-[#5c4033] text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#4a3428] text-white rounded-full text-sm font-medium hover:bg-[#5c4033] transition-colors"
          >
            View Project
          </a>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#4a3428] text-[#4a3428] rounded-full text-sm font-medium hover:bg-[#4a3428] hover:text-white transition-colors"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="bg-[#2d2d2d] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
