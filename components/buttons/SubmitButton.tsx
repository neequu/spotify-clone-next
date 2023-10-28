"use client";
import { CircleDashed } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-label="upload song"
      aria-disabled={pending}
      disabled={pending}
      className="
            w-full 
            rounded-md
            border
            border-transparent
            bg-accent2
            py-[2px] 
            text-sm
            font-light
            transition-colors
            hover:bg-accent2-dark
            disabled:cursor-not-allowed
            disabled:bg-gray-500
            md:py-2
          "
    >
      <span className="flex items-center justify-center overflow-hidden">
        {pending ? (
          <CircleDashed className="h-5 animate-spin" />
        ) : (
          "Upload song"
        )}
      </span>
    </button>
  );
}
