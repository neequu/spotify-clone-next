import { Song } from '@/types/supabase';
import SongMediaItem from '../SongMediaItem';

interface LibrarySongListProps {
  userSongs: Song[] | undefined;
}

const LibrarySongList = ({ userSongs }: LibrarySongListProps) => {
  const hasSongs = userSongs && userSongs?.length;

  return (
    <ul
      className='flex flex-col overflow-y-auto flex-1 
      '>
      {hasSongs &&
        userSongs.map((song) => <SongMediaItem song={song} key={song.id} />)}
    </ul>
  );
};

// lg:max-h-[566px] md:max-h-[582px]
export default LibrarySongList;
