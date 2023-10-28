"use client";
import { Heart, HeartFill } from "@/components/icons/heart";
import { likeSong, unlikeSong } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuthModal from "@/hooks/useAuthModal";

export const revalidate = 0;

interface LikeButtonInnerProps {
  songId: number;
  likedSong: boolean;
}

const LikeButtonInner = ({ songId, likedSong }: LikeButtonInnerProps) => {
  const authModal = useAuthModal();
  const router = useRouter();
  const [liked, setLiked] = useState(likedSong);

  useEffect(() => {
    setLiked(likedSong);
  }, [likedSong]);

  const handleLike = async () => {
    try {
      const res = await likeSong(songId);
      if (res.error) {
        authModal.onOpen();
        throw new Error(res.error);
      }
      toast.success("Added to library");
      router.refresh();
    } catch (e: any) {
      setLiked(false);
      toast.error(e.message);
    }
  };

  const handleRemoveLike = async () => {
    try {
      const res = await unlikeSong(songId);
      if (res.error) {
        authModal.onOpen();
        throw new Error(res.error);
      }
      toast.success("Removed from library");
      router.refresh();
    } catch (e: any) {
      setLiked(true);
      toast.error(e.message);
    }
  };

  const handleLikeButtonClick = () => {
    liked ? handleRemoveLike() : handleLike();
    setLiked((p) => !p);
  };

  return (
    <button
      onClick={handleLikeButtonClick}
      type="button"
      aria-label="like"
      className={`ml-auto rounded-full focus:outline-none focus-visible:shadow-focus ${
        liked
          ? "text-accent hover:scale-110"
          : "text-neutral-400 hover:text-white"
      } transition`}
    >
      {liked ? <HeartFill /> : <Heart />}
    </button>
  );
};

export default LikeButtonInner;
