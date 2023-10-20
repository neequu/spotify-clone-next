'use client';

import { Database, Song } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

const useGetSongById = (id: number | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState<Song | undefined>(undefined);
  const [likedSong, setLikedSong] = useState<{
    created_at: string;
    song_id: number;
    user_id: string;
  } | null>(null);
  const supabaseClient = createClientComponentClient<Database>();

  useEffect(() => {
    if (!id) return;

    const getSong = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabaseClient
          .from('songs')
          .select()
          .eq('id', id)
          .single();

        if (error) {
          toast.error(error.message);
        }

        setSong(data as Song);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };

    getSong();
  }, [id, supabaseClient]);

  useEffect(() => {
    if (!song) return;

    const getLikedSongById = async () => {
      setIsLoading(true);
      try {
        const {
          data: { session },
        } = await supabaseClient.auth.getSession();
        if (!session) return null;

        const { data, error } = await supabaseClient
          .from('liked_songs')
          .select()
          .eq('user_id', session?.user.id)
          .eq('song_id', song.id)
          .maybeSingle();

        if (error) {
          toast.error(error.message);
        }

        setLikedSong(data);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };

    getLikedSongById();
  }, [song, supabaseClient]);

  // return useMemo(
  //   () => ({
  //     isLoading,
  //     song,
  //     likedSong,
  //   }),
  //   [isLoading, song, likedSong]
  // );
  return {
    isLoading,
    song,
    likedSong,
  };
};

export default useGetSongById;
