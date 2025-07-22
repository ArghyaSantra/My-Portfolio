"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const formSchema = z.object({
  subject: z.string().min(6, "Subject must be at least 6 characters."),
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // e.g. service_abc123
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // e.g. template_xyz456
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          name: data.name,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // e.g. B7hf7uS...
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section className="w-full bg-black text-white px-6 md:px-20 py-24">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="rounded-full bg-green-400 text-black px-5 py-1 text-sm font-bold w-fit">
            ★ GET IN TOUCH
          </div>

          <h2 className="text-3xl font-bold leading-snug">
            Let’s build something{" "}
            <span className="text-green-400">awesome</span> together
          </h2>

          <p className="text-sm text-white/70 max-w-md">
            Whether it’s a freelance project, a collaboration, or just saying hi
            — I’d love to hear from you.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <Mail className="text-green-400 w-5 h-5" />
            <p className="text-white">arghyasantra103@gmail.com</p>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/ArghyaSantra"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="w-5 h-5 hover:text-green-400" />
            </a>
            <a
              href="https://linkedin.com/in/arghya-santra"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-green-400" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Input placeholder="Subject" {...form.register("subject")} />

          <Input placeholder="Your Name" {...form.register("name")} />
          <Input placeholder="Your Email" {...form.register("email")} />
          <Textarea
            placeholder="Your Message"
            rows={5}
            {...form.register("message")}
          />
          <Button type="submit" className="w-fit mt-2">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
