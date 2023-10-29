import { Song } from '@/types/supabase';
import SongMediaItem from '../SongMediaItem';

interface LibrarySongListProps {
  userSongs: Song[] | undefined;
}

const LibrarySongList = ({ userSongs }: LibrarySongListProps) => {
  const hasSongs = userSongs && userSongs?.length;

  return (
    <ul className='pb-[22vh] md:h-[78vh] md:overflow-auto'>
      {hasSongs ? (
        userSongs.map((song) => <SongMediaItem song={song} key={song.id} />)
      ) : (
        <p className='text-neutral-400'>You haven&#39;t added any songs yet!</p>
      )}
    </ul>
  );
};

export default LibrarySongList;
