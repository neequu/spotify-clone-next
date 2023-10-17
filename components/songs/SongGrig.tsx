import { getSongs } from '@/app/actions';
import Playlist from './Playlist';

const SongGrig = async () => {
  const songs = await getSongs();
  return (
    <div className='grid grid-cols-songs gap-6'>
      {songs?.map((song) => <Playlist songData={song} key={song.id} />)}
    </div>
  );
};

export default SongGrig;
