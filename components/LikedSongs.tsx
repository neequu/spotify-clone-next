import { Song } from '@/types/supabase';
import SongMediaItem from './SongMediaItem';
import LikeButton from './buttons/liked/LikeButton';

interface LikedSongsProps {
  likedSongs: Song[];
}

const LikedSongs = ({ likedSongs }: LikedSongsProps) => {
  const hasSongs = likedSongs && !!likedSongs.length;

  return (
    <section className='mt-8 md:mt-10 border-t border-neutral-800 pt-2'>
      <ul className='grid md:gap-1'>
        {hasSongs ? (
          likedSongs.map(async (song) => (
            <SongMediaItem song={song} key={song.id}>
              <LikeButton key={song.id} songId={song.id} />
            </SongMediaItem>
          ))
        ) : (
          <div className='text-neutral-400'>You havent added anything yet</div>
        )}
      </ul>
    </section>
  );
};

export default LikedSongs;
