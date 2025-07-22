"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReusableModal from "./modal/ReusableModal";

const categories = [
  "Full Stack",
  "UI Design",
  "AI Apps",
  "Open Source",
  "Experiments",
  "Client Projects",
];

const projects = [
  {
    title: "MindMate",
    image: "/assets/images/mindmate.jpg",
    description:
      "A mental health companion app offering breathing, journaling, and emotional check-ins.",
    tech: ["React", "Node.js", "MongoDB"],
    videoUrl: "/assets/videos/project_demo_video.mp4",
  },
  {
    title: "RideFlow",
    image: "/assets/images/ridehome.jpg",
    description:
      "Uber-like ride-sharing app with driver ratings, availability & real-time tracking.",
    tech: ["Next.js", "PostgreSQL", "Redis"],
  },
  {
    title: "DesignDeck",
    image: "/assets/images/nudgekit.jpg",
    description:
      "Fiverr-style platform for hiring creative designers on-demand.",
    tech: ["Next.js", "Prisma", "TailwindCSS"],
  },
  {
    title: "SkillSprint",
    image: "/assets/images/arraycase.jpg",
    description:
      "An upskilling platform with gamified coding challenges and progress tracking.",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "DevNoted",
    image: "/assets/images/arraycase.jpg",
    description:
      "Minimalist note-taking app with Markdown support and JWT auth.",
    tech: ["React", "Node.js", "Cloudinary"],
  },
  {
    title: "NudgeKit",
    image: "/assets/images/arraycase.jpg",
    description: "A/B testing tool for sticky banners and exit-intent modals.",
    tech: ["Golang", "React", "Redis"],
  },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section className="w-full bg-black text-white px-6 md:px-20 py-24">
      {/* Category Bar */}
      <div className="w-full bg-lime-400 text-black py-2 px-4 flex flex-wrap justify-center gap-4 font-semibold text-sm tracking-wide rounded-md mb-12">
        {categories.map((cat, i) => (
          <span key={i} className="hover:underline cursor-pointer">
            ★ {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-green-400 text-sm tracking-widest">
          ★ MY WORK PORTFOLIO
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          My Works Portfolio
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-green-400 transition cursor-pointer p-4 flex flex-col h-full"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedProject(proj)}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-white mb-1">
              {proj.title}
            </h3>
            <p className="text-sm text-white/70 mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-green-600/20 text-green-400 text-xs px-2 py-0.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ReusableModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          type="project"
          content={{
            title: selectedProject.title,
            description: selectedProject.description,
            techStack: selectedProject.tech,
            videoUrl: selectedProject.videoUrl,
          }}
        />
      )}
    </section>
  );
}
