import { Song } from '@/types/types';
import LibrarySongItem from './LibrarySongItem';

interface LibrarySongListProps {
  userSongs: Song[];
}

const LibrarySongList = ({ userSongs }: LibrarySongListProps) => {
  return (
    <ul className='grid gap-3'>
      {userSongs.map((song) => (
        <LibrarySongItem song={song} key={song.id} />
      ))}
    </ul>
  );
};

export default LibrarySongList;
