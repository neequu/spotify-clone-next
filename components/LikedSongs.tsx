import { Song } from '@/types/supabase';
import SongMediaItem from './SongMediaItem';
import LikeButton from './buttons/liked/LikeButton';
import PlayButton from './buttons/play/PlayButton';

interface LikedSongsProps {
  likedSongs: Song[];
}

const LikedSongs = ({ likedSongs }: LikedSongsProps) => {
  const hasSongs = likedSongs && !!likedSongs.length;

  return (
    <section className='mt-8 md:mt-10 border-t border-neutral-800 pt-2'>
      <ul className='grid md:gap-1'>
        {hasSongs ? (
          likedSongs.map(async (song, idx) => (
            <SongMediaItem song={song} key={song.id}>
              <PlayButton
                song={song}
                songs={likedSongs}
                className='order-first w-10'>
                <div className='w-10'>{idx + 1}</div>
              </PlayButton>
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
