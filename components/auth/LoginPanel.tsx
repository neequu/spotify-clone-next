"use client";
import useAuthModal from "@/hooks/useAuthModal";
import { Lock } from "lucide-react";

const LoginPanel = () => {
  const AuthModal = useAuthModal();

  return (
    <div className="flex items-center gap-3 self-end font-bold md:gap-4">
      <div className="hidden items-center gap-3 self-end font-bold md:flex md:gap-4">
        <button
          aria-label="sign in"
          onClick={AuthModal.onOpen}
          type="button"
          className="rounded-full bg-white  px-4 py-1 text-black transition-colors hover:bg-accent"
        >
          Sign In
        </button>
      </div>
      <button
        aria-label="login or sign up"
        onClick={AuthModal.onOpen}
        type="button"
        className="overflow-hidden rounded-full md:hidden"
      >
        <Lock className="h-6 w-6 bg-white p-1 text-black" />
      </button>
    </div>
  );
};

export default LoginPanel;
