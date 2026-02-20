"use client";

export default function AboutSection() {
  const skills = [
    { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
    { title: "Backend", items: ["Supabase", "REST APIs", "Auth"] },
    { title: "Languages", items: ["JavaScript", "TypeScript", "HTML5/CSS3"] },
    { title: "Tools", items: ["Git & GitHub", "Figma", "Vercel"] },
    { title: "Architecture", items: ["Clean Code", "Scalable Structure"] },
    { title: "Deployment", items: ["Production Config", "Env Variables"] },
  ];

  return (
    <section id="about" className="relative bg-[#5c4033] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Striped background pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            rgba(74, 52, 40, 0.3) 40px,
            rgba(74, 52, 40, 0.3) 41px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 80px,
            rgba(107, 83, 68, 0.2) 80px,
            rgba(107, 83, 68, 0.2) 81px
          )`,
          backgroundColor: "#6b5344",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Dark blue decorative square */}
        <div className="relative mb-12">
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-white/90 z-10" />
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[#2c3e50] rotate-12 rounded-sm" />
        </div>

        {/* Professional summary text */}
        <div className="max-w-4xl mb-16">
          <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-white/95 leading-relaxed">
            I&apos;m a Full-Stack Web Developer who builds complete, production-ready web applications — from polished frontend interfaces to reliable backend integrations and deployments. I specialize in crafting modern, responsive user experiences using React, Next.js, and Tailwind CSS, while also handling authentication, APIs, databases, and environment configuration on the backend.
          </p>
          <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-white/95 leading-relaxed mt-6">
            I&apos;ve worked on real-world products in fintech and business domains, shipping features used by real users. I enjoy taking projects from idea → design → development → deployment, owning the full lifecycle. I care deeply about clean architecture, performance, and scalability, and I&apos;m constantly improving how I structure code, manage state, and integrate services.
          </p>
        </div>

        {/* Skill boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/95 rounded-lg p-6 shadow-lg border border-white/50 hover:shadow-xl transition-shadow"
            >
              <h3 className="font-semibold text-[#4a3428] text-lg mb-3">
                {skill.title}
              </h3>
              <ul className="space-y-1 text-[#5c4033]">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-sm md:text-base">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
