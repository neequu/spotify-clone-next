'use server';
import { User } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';

const supabase = createServerActionClient<Database>({
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
      throw new Error('error fetching all songs');
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
      throw new Error('error fetching songs by title');
    }

    return songsData || [];
  } catch (e: any) {
    console.log(e);
  }
}
// get user's  liked songs
export async function getLikedSongById(id: number) {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return [];

    const { data: songData, error: songsError } = await supabase
      .from('liked_songs')
      .select()
      .eq('user_id', session?.user.id)
      .eq('song_id', id);
    // .single();

    if (songsError) {
      throw new Error('error fetching liked songs');
    }

    return songData || [];
  } catch (e: any) {
    console.log(e);
  }
}
export async function likeSong(songId: number) {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return [];

    const { error } = await supabase.from('liked_songs').insert({
      song_id: songId,
      user_id: session?.user.id!,
    });

    if (error) {
      throw new Error('error liking a song');
    }

    // revalidatePath(location.pathname)
    return { message: 'ok' };
  } catch (e: any) {
    console.log(e);
  }
}
// remove like from a song
export async function unlikeSong(songId: number) {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return [];

    const { error } = await supabase
      .from('liked_songs')
      .delete()
      .eq('user_id', session.user.id)
      .eq('song_id', songId);

    if (error) {
      throw new Error('error unliking a song');
    }

    return { message: 'ok' };
  } catch (e: any) {
    console.log(e);
  }
}
// get liked songs
export async function getlikedSongs() {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return [];

    const { data, error } = await supabase
      .from('liked_songs')
      .select('*, songs(*)')
      .eq('user_id', session.user.id);

    if (error) {
      throw new Error('error unliking a song');
    }

    if (!data.length) return [];

    return data.map((i) => ({
      ...i.songs,
    }));
  } catch (e: any) {
    console.log(e);
  }
}
