"use client";

import AnimateInView from "./AnimateInView";

export default function AboutSection() {
  const skills = [
    { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)", "HTML5, CSS3, SCSS", "Responsive UI Design", "Component-based architecture", "Performance optimization", "Animations & UI polish", "Next.js (App Router & Pages Router)"], cardClass: "from-emerald-500/20 to-teal-500/20 border-emerald-400/30" },
    { title: "Backend", items: ["Supabase (Auth, Database, Storage)", "REST APIs", "Auth", "Basic backend integration (tRPC / API routes)", "Authentication flows", "Environment variables & production configs"], cardClass: "from-indigo-500/20 to-violet-500/20 border-indigo-400/30" },
    { title: "Tools", items: ["Git & GitHub", "Vercel deployment", "Figma → UI Implementation", "Debugging & performance tuning", "Clean code & folder structuring", "Agile-style feature iteration"], cardClass: "from-rose-500/20 to-pink-500/20 border-rose-400/30" },
  ];

  return (
    <section id="about" className="bg-[#2d2d2d] py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-hidden">
      <div className="relative max-w-7xl mx-auto pt-16 min-w-0">
        <AnimateInView variant="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            About Me
          </h2>
        </AnimateInView>

        {/* Professional summary - redesigned card */}
        <AnimateInView variant="fadeUp" delay={100} className="max-full mb-16">
          <div className=" p-8 ">
            <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-slate-100 leading-relaxed">
              I&apos;m a Full-Stack Web Developer who builds complete, production-ready web applications — from polished frontend interfaces to reliable backend integrations and deployments. I specialize in crafting modern, responsive user experiences using React, Next.js, and Tailwind CSS, while also handling authentication, APIs, databases, and environment configuration on the backend.
            </p>
            <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-slate-200/90 leading-relaxed mt-6">
              I&apos;ve worked on real-world products in fintech and business domains, shipping features used by real users. I enjoy taking projects from idea → design → development → deployment, owning the full lifecycle. I care deeply about clean architecture, performance, and scalability, and I&apos;m constantly improving how I structure code, manage state, and integrate services.
            </p>
          </div>
        </AnimateInView>

        {/* Skill cards - redesigned with animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skills.map((skill, index) => (
            <AnimateInView
              key={index}
              variant="scale"
              delay={150 + index * 80}
              className={`bg-gradient-to-br ${skill.cardClass} backdrop-blur-sm rounded-2xl p-6 border shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300`}
            >
              <h3 className="font-bold text-white text-lg flex justify-center mb-4 flex items-center gap-2">
                {skill.title}
              </h3>
              <ul className="space-y-2 ">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-100 text-sm md:text-base flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
