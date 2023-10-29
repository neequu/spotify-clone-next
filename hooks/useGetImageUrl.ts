import { Database, Song } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const useGetImageUrl = (song: Song) => {
  const supabaseClient = createClientComponentClient<Database>();

  const { data: songImage } = supabaseClient.storage
    .from('images')
    .getPublicUrl(song.image_path!);

  return songImage.publicUrl;
};

export default useGetImageUrl;
