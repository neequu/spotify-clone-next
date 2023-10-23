import { getLikedSongById } from '@/app/actions';
import LikeButtonInner from './LikeButtonInner';

export const revalidate = 0;

interface LikeButtonProps {
  songId: number;
}

const LikeButton = async ({ songId }: LikeButtonProps) => {
  const likedSong = await getLikedSongById(songId);
  return <LikeButtonInner likedSong={!!likedSong} songId={songId} />;
};

export default LikeButton;
