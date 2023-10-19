'use client';
import { PiHeartStraight, PiHeartStraightFill } from 'react-icons/pi';
import { likeSong, unlikeSong } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const revalidate = 0;

const LikeButtonInner = ({
  isLiked,
  songId,
}: {
  isLiked: boolean | undefined;
  songId: number;
}) => {
  const router = useRouter();

  const [liked, setLiked] = useState(isLiked);

  const handleLike = async () => {
    try {
      await likeSong(songId);
      toast.success('Added to library');
      router.refresh();
    } catch (e: any) {
      setLiked(false);
      toast.error(e.message);
    }
  };

  const handleRemoveLike = async () => {
    try {
      await unlikeSong(songId);
      toast.success('Removed from library');
      router.refresh();
    } catch (e: any) {
      setLiked(true);
      toast.error(e.message);
    }
  };

  const handleLikeButtonClick = () => {
    isLiked ? handleRemoveLike() : handleLike();
    setLiked(!isLiked);
  };

  return (
    <button
      onClick={handleLikeButtonClick}
      type='button'
      className={`${
        liked
          ? 'text-accent hover:scale-110'
          : 'text-neutral-400 hover:text-white'
      } absolute top-1/2 -translate-y-1/2 right-4 opacity-100 group-hover:opacity-100 transition`}>
      {liked ? <PiHeartStraightFill /> : <PiHeartStraight size={18} />}
    </button>
  );
};

export default LikeButtonInner;
