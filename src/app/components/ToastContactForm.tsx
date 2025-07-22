"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type ToastProps = {
  toastId: number | string;
};

export function ToastContactForm({ toastId }: ToastProps) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted from toast →", data);
    toast.success("Message sent successfully!");
    reset();
    toast.dismiss(toastId);
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
        <Button size="sm" className="mt-2" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
