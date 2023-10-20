import { Song } from '@/types/supabase';
import LibrarySongItem from '../SongMediaItem';

interface LibrarySongListProps {
  userSongs: Song[] | undefined;
}

const LibrarySongList = ({ userSongs }: LibrarySongListProps) => {
  const hasSongs = userSongs && userSongs?.length;

  return (
    <ul className='grid gap-3'>
      {hasSongs &&
        userSongs.map((song) => <LibrarySongItem song={song} key={song.id} />)}
    </ul>
  );
};

export default LibrarySongList;
