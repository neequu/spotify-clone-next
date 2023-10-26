import { Song } from '@/types/supabase';
import SongMediaItem from '../SongMediaItem';

interface LibrarySongListProps {
  userSongs: Song[] | undefined;
}

const LibrarySongList = ({ userSongs }: LibrarySongListProps) => {
  const hasSongs = userSongs && userSongs?.length;

  return (
    <ul className='md:overflow-auto md:h-screen pb-[20vh]'>
      {hasSongs &&
        userSongs.map((song) => <SongMediaItem song={song} key={song.id} />)}
    </ul>
  );
};

export default LibrarySongList;
