import { getLikedSongById } from '@/app/actions';
import LikeButtonInner from './LikeButtonInner';
export const revalidate = 0;

const LikeButton = async ({ songId }: { songId: number }) => {
  const song = await getLikedSongById(songId);
  return <LikeButtonInner songId={songId} isLiked={!!song?.length} />;
};

export default LikeButton;
