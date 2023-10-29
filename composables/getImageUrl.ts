import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Song } from '@/types/supabase';

const getImageUrl = (song: Song) => {
  if (!song || !song.image_path) return '';

  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data: songImage } = supabase.storage
    .from('images')
    .getPublicUrl(song.image_path);

  return songImage.publicUrl;
};

export default getImageUrl;
