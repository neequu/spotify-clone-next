import { Song } from '@/types/supabase';
import SongMediaItem from './SongMediaItem';
import LikeButton from './buttons/liked/LikeButton';
import PlayButton from './buttons/PlayButton';

interface LikedSongsProps {
  likedSongs: Song[];
}

const LikedSongs = ({ likedSongs }: LikedSongsProps) => {
  const hasSongs = likedSongs && !!likedSongs.length;

  return (
    <section className='mt-8 border-t border-neutral-800 pt-2 md:mt-10'>
      <ul className='grid md:gap-1'>
        {hasSongs ? (
          likedSongs.map((song, idx) => (
            <SongMediaItem song={song} key={song.id}>
              <PlayButton
                song={song}
                songs={likedSongs}
                className='order-first hidden w-10 md:block'>
                <div className='w-10'>{idx + 1}</div>
              </PlayButton>
              <LikeButton songId={song.id} />
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
