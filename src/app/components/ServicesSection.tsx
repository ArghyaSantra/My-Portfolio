"use client";

import {
  ArrowUpRight,
  Code2,
  Braces,
  LayoutDashboard,
  School,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ReusableModal from "./modal/ReusableModal";

const services = [
  {
    title: "Full Stack Development",
    icon: <Braces className="w-6 h-6" />,
    tags: ["Node.js", "React", "Next.js"],
    description:
      "Building fast, scalable full-stack applications from scratch.",
  },
  {
    title: "UI Engineering & Design Systems",
    icon: <LayoutDashboard className="w-6 h-6" />,
    tags: ["Tailwind CSS", "shadcn/ui", "Component Libraries"],
    description:
      "Creating reusable UI components and systems with pixel perfection.",
  },
  {
    title: "System Design Consulting",
    icon: <Code2 className="w-6 h-6" />,
    tags: ["Microservices", "Redis", "Rate Limiting"],
    description:
      "Designing high-performance systems for scale and reliability.",
  },
  {
    title: "Technical Mentorship",
    icon: <School className="w-6 h-6" />,
    tags: ["System Design", "DSA", "Interview Prep"],
    description:
      "Mentoring developers and students to crack interviews and grow technically.",
  },
];

export default function ServicesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleClick = (service: any) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  return (
    <section className="w-full bg-black text-white px-6 md:px-20 py-24">
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-green-400 text-sm tracking-widest">★ WHAT I DO?</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Services.
          </h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-white/80 text-sm hover:text-green-400 transition">
          View All Services <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="border border-white/10 rounded-lg p-6 flex flex-col gap-4 hover:border-green-400 transition cursor-pointer bg-white/5"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleClick(service)}
          >
            <div className="flex items-center justify-between">
              <div className="text-green-400">{service.icon}</div>
              <ArrowUpRight className="text-white/40 w-4 h-4" />
            </div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <div className="flex flex-wrap gap-3 text-sm text-white/60">
              {service.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-green-400 before:content-['★'] before:mr-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reusable Modal for Services */}
      {selectedService && (
        <ReusableModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="experience"
          content={{
            role: selectedService.title,
            company: "Freelance / Personal Work",
            summary: selectedService.description,
            techStack: selectedService.tags,
            projects: [],
          }}
        />
      )}
    </section>
  );
}
