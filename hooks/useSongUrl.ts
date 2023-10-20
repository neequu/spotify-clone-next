import { Database, Song } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const useSongUrl = (song: Song | undefined) => {
  if (!song) return null;
  const supabaseClient = createClientComponentClient<Database>();

  const { data: songImage } = supabaseClient.storage
    .from('songs')
    .getPublicUrl(song.image_path!);

  return songImage;
};

export default useSongUrl;
