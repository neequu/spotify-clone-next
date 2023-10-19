import { Song } from '@/types/supabase';
import LibrarySongItem from '../library/LibrarySongItem';
import LikeButton from '../LikeButton';

const LikedSongs = ({ likedSongs }: { likedSongs: Song[] | undefined }) => {
  const hasSongs = likedSongs && !!likedSongs.length;

  return (
    <section className='mt-8 grid gap-3'>
      <ul>
        {hasSongs ? (
          likedSongs.map((song) => (
            <LibrarySongItem song={song} key={song.id}>
              <LikeButton songId={song.id} key={song.id + 'btn'} />
            </LibrarySongItem>
          ))
        ) : (
          <div>You havent added anything yet</div>
        )}
      </ul>
    </section>
  );
};

export default LikedSongs;
