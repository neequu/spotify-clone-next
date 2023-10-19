import { Database, Song } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const useLoadSong = (song: Song) => {
  const supabaseClient = createClientComponentClient<Database>();

  if (!song || !song?.song_path) return '';

  const { data } = supabaseClient.storage
    .from('songs')
    .getPublicUrl(song.song_path);

  return data.publicUrl;
};

export default useLoadSong;
