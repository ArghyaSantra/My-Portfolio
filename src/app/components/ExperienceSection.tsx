"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReusableModal from "./modal/ReusableModal";
import {
  ArrowUpRight,
  Code,
  Figma,
  Github,
  Server,
  GitBranch,
} from "lucide-react";

const experiences = [
  {
    role: "Freelance Full Stack Engineer",
    company: "ArrayCase",
    period: "Oct 2024 – Present",
    summary: "Delivering scalable full-stack solutions for startups.",
    projects: [
      "Developed client dashboards using Next.js & Tailwind CSS",
      "Integrated MongoDB & Redis for performant data flows",
      "Set up CI/CD with GitHub Actions and deployed to Vercel",
    ],
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Redis",
      "GitHub Actions",
    ],
  },
  {
    role: "Mentor",
    company: "ChaiCode",
    period: "May 2024 – Present",
    summary: "Mentoring college students in System Design and DSA.",
    projects: [
      "Create bilingual video content",
      "Design real-world mini projects on caching, load balancing, etc.",
    ],
    techStack: ["Python", "DSA", "System Design", "LLMs", "YouTube"],
  },
  {
    role: "Senior Software Engineer",
    company: "Tekion Corp",
    period: "Jan 2022 – Mar 2024",
    summary: "Worked on digital retailing platform in automotive domain.",
    projects: [
      "Built reusable UI component library in React",
      "Implemented server-side rendering with Next.js",
      "Integrated REST APIs and optimized frontend performance",
    ],
    techStack: ["React", "Redux", "Next.js", "Jest", "Bitbucket"],
  },
  {
    role: "Senior Software Engineer",
    company: "Temenos India",
    period: "Jul 2021 – Jan 2022",
    summary: "Led UI initiatives in banking and wealth platforms.",
    projects: [
      "Architected and built scalable components in Angular",
      "Coordinated feature delivery with cross-functional teams",
      "Mentored juniors and improved code review processes",
    ],
    techStack: ["Angular", "RxJS", "Node.js", "JIRA", "Bitbucket"],
  },
  {
    role: "Software Engineer",
    company: "Temenos India",
    period: "Jul 2019 – Jul 2021",
    summary: "Worked on banking and wealth management platforms.",
    projects: [
      "Created Angular-based dashboards for e-signing flows",
      "Collaborated with backend team for GraphQL integration",
    ],
    techStack: ["Angular", "Node.js", "GraphQL", "JIRA", "GitLab"],
  },
];

const tools = [
  { name: "VS Code", icon: <Code className="w-5 h-5" /> },
  { name: "Figma", icon: <Figma className="w-5 h-5" /> },
  { name: "GitHub", icon: <Github className="w-5 h-5" /> },
  { name: "Postman", icon: <Server className="w-5 h-5" /> },
  { name: "Docker", icon: <GitBranch className="w-5 h-5" /> },
];

export default function ExperienceSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const handleOpen = (experience: any) => {
    setSelected(experience);
    setIsOpen(true);
  };

  return (
    <section className="w-full bg-black text-white px-6 md:px-20 py-24">
      <div className="mb-10 text-center">
        <p className="text-green-400 text-sm tracking-widest">
          ★ EXPERIENCE & MENTORSHIP
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          My Work Experience
        </h2>
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="border border-white/10 bg-white/5 rounded-lg p-6 hover:border-green-400 transition cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleOpen(exp)}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <ArrowUpRight className="w-4 h-4 text-white/40" />
            </div>
            <p className="text-sm text-white/70">{exp.company}</p>
            <p className="text-xs text-white/50">{exp.period}</p>
          </motion.div>
        ))}
      </div>

      {/* Tools Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-12"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center gap-2"
          >
            <div className="bg-white/10 p-3 rounded-full">{tool.icon}</div>
            <p className="text-sm text-white/80">{tool.name}</p>
          </div>
        ))}
      </motion.div>

      {/* Modal */}
      {selected && (
        <ReusableModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="experience"
          content={selected}
        />
      )}
    </section>
  );
}
