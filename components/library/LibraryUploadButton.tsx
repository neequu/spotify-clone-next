"use client";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { User } from "@supabase/auth-helpers-nextjs";
import { Plus } from "lucide-react";

interface LibraryUploadButtonProps {
  user: User | undefined;
}

const LibraryUploadButton = ({ user }: LibraryUploadButtonProps) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const handleClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    // todo: check for subscription
    return uploadModal.onOpen();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="add song"
      className="rounded-full text-neutral-400 outline-none transition-colors hover:text-white focus-visible:shadow-focus"
    >
      <Plus className="w-5" />
    </button>
  );
};

export default LibraryUploadButton;
