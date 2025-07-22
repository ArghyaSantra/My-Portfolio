"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: "project" | "experience" | "image";
  content: any;
};

export default function ReusableModal({
  isOpen,
  onClose,
  type,
  content,
}: ModalProps) {
  console.log({ content });
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur z-50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center z-[999]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-black border border-white/10 rounded-xl p-6 text-white shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-green-400 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Render Based on Type */}
            {type === "project" && (
              <div>
                <Dialog.Title className="text-2xl font-bold mb-2">
                  {content.title}
                </Dialog.Title>{" "}
                <p className="text-sm text-white/70 mb-4">
                  {content.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {content.techStack?.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-green-600/20 text-green-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {content.videoUrl && (
                  <video
                    controls
                    className="w-full rounded-lg mt-4"
                    src={content.videoUrl}
                  />
                )}
              </div>
            )}

            {type === "experience" && (
              <div>
                <Dialog.Title className="text-2xl font-bold mb-2">
                  {`${content.role} @ ${content.company}`}
                </Dialog.Title>
                <p className="text-sm text-white/70 mb-4">{content.summary}</p>
                <ul className="list-disc pl-5 mb-4 text-white/80 text-sm">
                  {content.projects?.map((proj: string, i: number) => (
                    <li key={i}>{proj}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 text-sm">
                  {content.techStack?.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-green-600/20 text-green-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {type === "image" && (
              <div className="w-full h-full">
                <Dialog.Title className="text-2xl font-bold mb-2">
                  {"Image Preview"}
                </Dialog.Title>
                <img
                  src={content.imageUrl}
                  alt="Gallery full screen"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
