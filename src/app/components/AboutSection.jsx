"use client";

import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left image */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <img
          src="/assets/images/portrait_1.png" // Add your photo or a placeholder
          alt="Arghya Santra Portrait"
          className="rounded-lg grayscale object-cover w-full h-auto"
        />
      </motion.div>

      {/* Right content */}
      <motion.div
        className="flex flex-col gap-6 w-full md:w-1/2"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-green-400 text-sm tracking-widest">★ WHO I AM?</p>

        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Full Stack Developer
          <br />
          <span className="text-green-400">and System Design Mentor</span>
        </h2>

        <p className="text-sm text-gray-400">
          I’ve been crafting frontend workflows and scalable architectures for
          over 5 years — collaborating with product startups, building elegant
          UIs, and mentoring students in system design & DSA at ChaiCode.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-4 text-white/80 text-sm">
          <div>
            <p className="text-2xl font-bold text-white">5+</p>
            <p>Years of Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">50+</p>
            <p>Projects Completed</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">Mentor</p>
            <p>System Design, DSA</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">Freelancer</p>
            <p>@ ArrayCase</p>
          </div>
        </div>

        <div className="mt-6">
          <button className="flex items-center gap-2 text-green-400 hover:underline text-sm">
            More About <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
