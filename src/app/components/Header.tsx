"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ToastContactForm } from "./ToastContactForm";

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "lifegallery", label: "Life Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = null;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            current = item.id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur border-b border-white/10"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-lg tracking-wide">
          Arghya.dev
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-green-400 transition ${
                activeId === id ? "text-green-400 font-semibold" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <Button
          size="sm"
          className="hidden md:block cursor-pointer hover:bg-green-500 hover:text-black transition"
          onClick={() =>
            toast.custom((t) => <ToastContactForm toastId={t.id} />)
          }
        >
          Let’s Talk
        </Button>
      </div>
    </motion.header>
  );
}
