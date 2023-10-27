import { getSongs } from '@/app/actions';
import Playlist from './Playlist';
import { SupabaseClient } from '@supabase/auth-helpers-nextjs';

const SongGrig = async ({ supabase }: { supabase: SupabaseClient }) => {
  const songs = await getSongs();
  return (
    <div className='grid grid-cols-songs md:grid-cols-songs-md lg:grid-cols-songs-lg place-content-start gap-4 pb-24'>
      {songs?.map((song) => (
        <Playlist song={song} songs={songs} key={song.id} supabase={supabase} />
      ))}
    </div>
  );
};

export default SongGrig;
