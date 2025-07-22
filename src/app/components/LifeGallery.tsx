"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import ReusableModal from "./modal/ReusableModal";

const categories = ["All", "Food", "Art", "Music", "Photography"];

const images = [
  { src: "/assets/images/food.png", category: "Food" },
  { src: "/assets/images/photography_1.png", category: "Music" },
  { src: "/assets/images/books.png", category: "Art" },
  { src: "/assets/images/photography_2.png", category: "Photography" },
  // Add more if needed
];

export default function LifeGallery() {
  const [active, setActive] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  const handleImageClick = (img: any) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  return (
    <section id="life" className="py-20 px-6 md:px-20 bg-black text-white">
      {/* Title & Subtitle */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Life Beyond Code
        </h2>
        <p className="text-white/70 max-w-xl">
          A glimpse into the things that inspire me beyond the screen.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex gap-3 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={clsx(
              "px-4 py-1 rounded-full text-sm transition font-medium border",
              active === cat
                ? "bg-green-500 text-black"
                : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((img, i) => (
          <motion.div
            key={`${img.src}-${i}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleImageClick({ imageUrl: img.src })}
          >
            <Image
              src={img.src}
              alt={`${img.category} photo`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <ReusableModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="image"
          content={selectedImage}
        />
      )}
    </section>
  );
}
