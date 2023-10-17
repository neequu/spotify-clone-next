import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { Song } from '@/types/types';
import { Database } from '@/types/supabase';

const cookieStore = cookies();
const supabase = createServerComponentClient<Database>({
  cookies: () => cookieStore,
});

export async function getSongs() {
  try {
    const { data: songsData, error: songsError } = await supabase
      .from('songs')
      .select()
      .order('created_at', {
        ascending: false,
      });

    if (songsError) {
      throw new Error('error fetching songs');
    }

    return songsData || [];
  } catch (e: any) {
    console.log(e);
  }
}

export function getImage(song: Song) {
  const { data } = supabase.storage
    .from('images')
    .getPublicUrl(song.image_path);

  return data.publicUrl;
}

export default getImage;
