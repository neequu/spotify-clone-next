import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function getSongs() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
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
