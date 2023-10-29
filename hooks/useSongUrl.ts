import { Database, Song } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const useSongUrl = (song: Song | undefined) => {
  if (!song || !song.song_path) return '';
  const supabaseClient = createClientComponentClient<Database>();

  const { data: songUrl } = supabaseClient.storage
    .from('songs')
    .getPublicUrl(song.song_path);

  return songUrl.publicUrl;
};

export default useSongUrl;
