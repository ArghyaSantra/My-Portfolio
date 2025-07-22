"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlayCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import ReusableModal from "./modal/ReusableModal";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-12">
      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-xl">
        <motion.p
          className="text-sm text-green-400 tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          👋 SAY HELLO OR WAVE
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I'M ARGHYA SANTRA
          <br />
          <span className="text-green-400">FULL STACK ENGINEER</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I help startups and creators build beautiful, scalable, and performant
          products — from design to deployment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button className="text-md">
            View Works <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Button>

          <button
            className="flex items-center gap-2 text-sm text-white/80 hover:text-green-400 transition"
            onClick={() => setIsOpen(true)}
          >
            <PlayCircleIcon className="w-5 h-5" />
            Play Intro
          </button>
        </motion.div>

        {/* Stats */}
        <div className="flex gap-6 mt-10 text-sm text-white/70">
          <div>
            <p className="text-xl font-bold text-white">5+</p>
            <p>Years Experience</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">20+</p>
            <p>Freelance Projects</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">Mentor</p>
            <p>System Design, DSA</p>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <motion.div
        className="rounded-full overflow-hidden max-w-xs w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src="/assets/images/portrait_2.png"
          alt="Arghya Santra"
          className="w-full object-cover grayscale"
        />
      </motion.div>

      {/* ReusableModal for Intro Video */}
      <ReusableModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        type="project"
        content={{
          title: "Intro Video",
          description: "Welcome to my portfolio!",
          techStack: [],
          videoUrl: "/assets/videos/project_demo_video.mp4", // 🔁 Replace with your actual intro video path
        }}
      />
    </section>
  );
}
