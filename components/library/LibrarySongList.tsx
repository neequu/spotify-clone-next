import { Song } from '@/types/types';
import LibrarySongItem from './LibrarySongItem';

interface LibrarySongListProps {
  userSongs: Song[] | undefined;
}

const LibrarySongList = ({ userSongs }: LibrarySongListProps) => {
  const hasSongs = userSongs && userSongs?.length;

  if (!hasSongs) {
    return <div>no songs</div>;
  }

  return (
    <ul className='grid gap-3'>
      {userSongs.map((song) => (
        <LibrarySongItem song={song} key={song.id} />
      ))}
    </ul>
  );
};

export default LibrarySongList;
