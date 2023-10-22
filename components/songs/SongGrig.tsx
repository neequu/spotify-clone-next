import { getSongs } from '@/app/actions';
import Playlist from './Playlist';

const SongGrig = async () => {
  const songs = await getSongs();
  return (
    <div className='grid grid-cols-songs md:grid-cols-songs-md place-content-start gap-4'>
      {songs?.map((song) => (
        <Playlist song={song} songs={songs} key={song.id} />
      ))}
    </div>
  );
};

export default SongGrig;
