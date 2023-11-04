"use server";
import { User } from "@supabase/auth-helpers-nextjs";
import { Database, Song } from "@/types/supabase";

// create supabase action client
const getSupabaseClient = async () => {
  const cookies = (await import("next/headers")).cookies;

  const createServerActionClient = (
    await import("@supabase/auth-helpers-nextjs")
  ).createServerActionClient;
  return createServerActionClient<Database>({ cookies });
};

// get all songs from database
export async function getSongs() {
  const supabase = await getSupabaseClient();
  try {
    const { data: songsData, error: songsError } = await supabase
      .from("songs")
      .select()
      .order("created_at", {
        ascending: false,
      });

    if (songsError) {
      throw new Error("error fetching songs");
    }
    const revalidatePath = (await import("next/cache")).revalidatePath;

    revalidatePath("/");
    return songsData || [];
  } catch (e: any) {}
}
// get song by id
export async function getSongById(id: number) {
  const supabase = await getSupabaseClient();
  try {
    const { data: songsData, error: songsError } = await supabase
      .from("songs")
      .select()
      .eq("id", id)
      .single();

    if (songsError) {
      throw new Error("error fetching a song with id " + id);
    }

    return songsData;
  } catch (e) {}
}
// get songs of logged in user
export async function getSongsByUserId(user: User | undefined) {
  const supabase = await getSupabaseClient();
  try {
    if (!user) return;
    // todo: remove
    await new Promise((r) => setTimeout(r, 100000));
    const { data: songsData, error: songsError } = await supabase
      .from("songs")
      .select()
      .eq("user_id", user.id)
      .order("created_at", {
        ascending: false,
      });

    if (songsError) {
      throw new Error("error fetching users songs");
    }
    return songsData || [];
  } catch (e: any) {}
}
// get songs by title
export async function getSongsByTitle(query: string) {
  const supabase = await getSupabaseClient();
  if (!query) return [];
  try {
    const { data: songsData, error: songsError } = await supabase
      .from("songs")
      .select()
      .ilike("title", `%${query.toLowerCase()}%`)
      .order("created_at", {
        ascending: false,
      });
    if (songsError) {
      throw new Error("error fetching songs by title");
    }

    return songsData || [];
  } catch (e: any) {}
}
// get user's liked songs
export async function getLikedSongById(id: number) {
  const supabase = await getSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) return null;

    const { data: songData, error: songsError } = await supabase
      .from("liked_songs")
      .select()
      .eq("user_id", session?.user.id)
      .eq("song_id", id)
      .maybeSingle();
    if (songsError) {
      throw new Error("error fetching liked songs");
    }

    return songData || null;
  } catch (e: any) {
    console.log(e);
    return null;
  }
}
// add song to liked song db
export async function likeSong(songId: number) {
  const supabase = await getSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) {
      throw new Error(`You don't have acess to like the song`);
    }

    const { error } = await supabase.from("liked_songs").insert({
      song_id: songId,
      user_id: session?.user.id!,
    });

    if (error) {
      throw new Error("error liking a song");
    }

    // revalidatePath(location.pathname)
    return { message: "ok" };
  } catch (e: any) {
    console.log(e);
    return { error: e.message };
  }
}
// remove song from liked song db
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
      .from("liked_songs")
      .delete()
      .eq("user_id", session.user.id)
      .eq("song_id", songId);

    if (error) {
      throw new Error("error unliking a song");
    }

    return { message: "ok" };
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
      .from("liked_songs")
      .select("*, songs(*)")
      .eq("user_id", session.user.id)
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      throw new Error("error gettin liked songs");
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
// add song to songs db
export async function submitSong(prev: any, formData: FormData) {
  const supabase = await getSupabaseClient();
  const song = formData.get("song");
  const image = formData.get("image");
  const title = formData.get("title") as string;
  const artist = formData.get("artist") as string;

  const uniqid = (await import("uniqid")).default;
  const uniqueId = uniqid();

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!song || !image || !session) {
      throw new Error("missing fields or not logged in");
    }

    const { data: songData, error: songError } = await supabase.storage
      .from("songs")
      .upload(`song-${title}-${artist}-${uniqueId}`, song);

    const { data: imageData, error: imageError } = await supabase.storage
      .from("images")
      .upload(`image-${title}-${artist}-${uniqueId}`, image);

    const { error: uploadError } = await supabase.from("songs").insert({
      title: title,
      artist: artist,
      image_path: imageData?.path,
      song_path: songData?.path,
      user_id: session.user?.id,
    });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const revalidatePath = (await import("next/cache")).revalidatePath;
    revalidatePath("/");
    return { message: "success" };
  } catch (e: any) {
    console.log(e);
    return { error: e.message };
  }
}
