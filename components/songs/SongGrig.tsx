import { getSongs } from '@/app/actions';
import Playlist from './Playlist';

const SongGrig = async () => {
  const songs = await getSongs();
  return (
    <div className='grid grid-cols-songs gap-4'>
      {songs?.map((song) => (
        <Playlist song={song} songs={songs} key={song.id} />
      ))}
    </div>
  );
};

export default SongGrig;
