"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/projects-data";
import Navbar from "@/components/Navbar";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-[#e8e4e0] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
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
        <p className="text-[#5c4033] text-sm mb-4">{project.description}</p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white border border-[#4a3428] text-[#4a3428] rounded-full text-sm font-medium hover:bg-[#f5f0e8] transition-colors"
          >
            View Project
          </a>
          <a
            href={project.codeUrl || project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#4a3428] text-white rounded-full text-sm font-medium hover:bg-[#5c4033] transition-colors"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <main
          className="py-20 px-4 sm:px-6 md:px-12 lg:px-24"
          style={{
            backgroundImage: "url(/skills-bg.svg)",
            backgroundRepeat: "repeat",
            backgroundColor: "#5a4a3e",
            minHeight: "calc(100vh - 4rem)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                All Projects
              </h1>
              <Link
                href="/"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-colors"
              >
                ← Back to Home
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
