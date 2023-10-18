import { getLikedSongById, likeSong } from '@/app/actions';
import LikeButtonInner from './LikeButtonInner';

const LikeButton = async ({ songId }: { songId: number }) => {
  const song = await getLikedSongById(songId);
  return (
    <div>
      <LikeButtonInner songId={songId} isLiked={!!song?.length} />
    </div>
  );
};

export default LikeButton;
