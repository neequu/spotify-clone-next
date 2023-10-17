import { Database } from '@/types/supabase';
import { Song } from '@/types/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getImage = (song: Song) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { data } = supabase.storage
    .from('images')
    .getPublicUrl(song.image_path);

  return data.publicUrl;
};

export default getImage;
