"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";

type ToastProps = {
  toastId: number | string;
};

export function ToastContactForm({ toastId }: ToastProps) {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject, // ✅ include subject
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error("Toast EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-black text-white p-4 rounded-md w-[320px] shadow-lg border-l-4 border-green-400 border border-white/10">
      {/* Close Button */}
      <button
        onClick={() => toast.dismiss(toastId)}
        className="absolute top-2 right-2 text-white/40 hover:text-green-400 transition"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Title */}
      <p className="text-sm font-semibold mb-3 text-green-400">
        💬 Send a quick message
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Input
          placeholder="Message title"
          className="bg-white/5 text-sm"
          {...register("subject", { required: true })}
        />
        <Input
          placeholder="Your name"
          className="bg-white/5 text-sm"
          {...register("name", { required: true })}
        />
        <Input
          placeholder="Your email"
          className="bg-white/5 text-sm"
          {...register("email", { required: true })}
        />
        <Textarea
          placeholder="Your message"
          className="bg-white/5 text-sm"
          rows={3}
          {...register("message", { required: true })}
        />
        <Button
          size="sm"
          className="mt-2 flex items-center gap-2 hover:bg-green-500 hover:text-black transition"
          disabled={loading}
        >
          {loading && <Loader2 className="animate-spin w-4 h-4" />}
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
