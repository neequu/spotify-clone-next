import {
  User,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { Database } from '@/types/supabase';
import { Song } from '@/types/types';
// create cookies and supabase server client
const supabase = createServerComponentClient<Database>({
  cookies,
});
// get all songs from database
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
// get songs of logged in user
export async function getSongsByUserId(user: User | undefined) {
  try {
    if (!user) return;

    const { data: songsData, error: songsError } = await supabase
      .from('songs')
      .select()
      .eq('user_id', user.id)
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
// get songs of logged in user
export async function getSongsByTitle(query: string) {
  if (!query) return [];
  try {
    const { data: songsData, error: songsError } = await supabase
      .from('songs')
      .select()
      .ilike('title', `%${query.toLowerCase()}%`)
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
// get static url of image from a song
export function getImage(song: Song) {
  const { data } = supabase.storage
    .from('images')
    .getPublicUrl(song.image_path!);

  return data.publicUrl;
}

//
