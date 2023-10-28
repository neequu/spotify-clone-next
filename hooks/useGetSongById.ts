'use client';

import { Database, Song } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetSongById = (id: number | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState<Song | undefined>(undefined);

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

  return { isLoading, song };
};

export default useGetSongById;
