'use server';
import { User } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database, Song } from '@/types/supabase';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import uniqid from 'uniqid';
import { revalidatePath } from 'next/cache';

const getSupabaseClient = async () =>
  createServerActionClient<Database>({ cookies });

// get all songs from database
export async function getSongs() {
  const supabase = createServerActionClient<Database>({ cookies });
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
    revalidatePath('/');
    return songsData || [];
  } catch (e: any) {
    console.log(e);
  }
}
// get songs of logged in user
export async function getSongsByUserId(user: User | undefined) {
  const supabase = await getSupabaseClient();
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
  const supabase = await getSupabaseClient();
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
  const supabase = await getSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return null;

    const { data: songData, error: songsError } = await supabase
      .from('liked_songs')
      .select()
      .eq('user_id', session?.user.id)
      .eq('song_id', id)
      .maybeSingle();
    if (songsError) {
      throw new Error('error fetching liked songs');
    }

    return songData || null;
  } catch (e: any) {
    console.log(e);
    return null;
  }
}
export async function likeSong(songId: number) {
  const supabase = await getSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) {
      throw new Error(`You don't have acess to like the song`);
    }

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
    return { error: e.message };
  }
}
// remove like from a song
export async function unlikeSong(songId: number) {
  const supabase = await getSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) {
      throw new Error(`You don't have acess to unlike the song`);
    }

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
    return { error: e.message };
  }
}
// get liked songs
export async function getlikedSongs() {
  const supabase = await getSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return [];

    const { data, error } = await supabase
      .from('liked_songs')
      .select('*, songs(*)')
      .eq('user_id', session.user.id)
      .order('created_at', {
        ascending: false,
      });

    if (error) {
      throw new Error('error unliking a song');
    }

    if (!data.length) return [];

    const likedSongs = data.map((i) => ({
      ...i.songs,
    }));

    return (likedSongs as Song[]) || [];
  } catch (e: any) {
    console.log(e);
    return [];
  }
}

export async function submitSong(formData: FormData) {
  const supabase = await getSupabaseClient();
  const song = formData.get('song');
  const title = formData.get('title') as string;
  const artist = formData.get('artist') as string;
  const image = formData.get('image');

  const uniqueId = uniqid();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!song || !image || !session) {
      throw new Error('missing fields or not logged in');
    }

    const { data: songData, error: songError } = await supabase.storage
      .from('songs')
      .upload(`song-${title}-${artist}-${uniqueId}`, song);

    const { data: imageData, error: imageError } = await supabase.storage
      .from('images')
      .upload(`image-${title}-${artist}-${uniqueId}`, image);

    const { error: uploadError } = await supabase.from('songs').insert({
      title: title,
      artist: artist,
      image_path: imageData?.path,
      song_path: songData?.path,
      user_id: session.user?.id,
    });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    revalidatePath('/');
  } catch (e: any) {
    console.log(e);
    return { error: e.message };
  }
}
