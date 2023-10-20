'use client';
import { PiHeartStraight, PiHeartStraightFill } from 'react-icons/pi';
import { likeSong, unlikeSong } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const revalidate = 0;

interface LikeButtonProps {
  likedSong: {
    created_at: string;
    song_id: number;
    user_id: string;
  } | null;
  songId: number;
}

const LikeButton = ({ likedSong, songId }: LikeButtonProps) => {
  const router = useRouter();
  const [liked, setLiked] = useState(!!likedSong);

  useEffect(() => {
    setLiked(!!likedSong);
  }, [likedSong]);

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
    liked ? handleRemoveLike() : handleLike();
    setLiked((p) => !p);
  };

  return (
    <button
      onClick={handleLikeButtonClick}
      type='button'
      className={`${
        liked
          ? 'text-accent hover:scale-110'
          : 'text-neutral-400 hover:text-white'
      } transition`}>
      {liked ? <PiHeartStraightFill /> : <PiHeartStraight size={18} />}
    </button>
  );
};

export default LikeButton;
