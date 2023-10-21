import { Song } from '@/types/supabase';
import LibrarySongItem from '../SongMediaItem';

interface LibrarySongListProps {
  userSongs: Song[] | undefined;
}

const LibrarySongList = ({ userSongs }: LibrarySongListProps) => {
  const hasSongs = userSongs && userSongs?.length;

  return (
    <ul className='grid gap-3 items-start overflow-y-scroll flex-1 lg:max-h-[566px] md:max-h-[582px] p-[0px!important]'>
      {hasSongs &&
        userSongs.map((song) => <LibrarySongItem song={song} key={song.id} />)}
    </ul>
  );
};

export default LibrarySongList;
