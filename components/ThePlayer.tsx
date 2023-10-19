'use client';

import useGetSongById from '@/hooks/useGetSongById';
import usePlayer from '@/hooks/usePlayer';
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';

const ThePlayer = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  if (!song) return null;

  const supabaseClient = createClientComponentClient<Database>();
  const { data: songImage } = supabaseClient.storage
    .from('images')
    .getPublicUrl(song.image_path!);

  return (
    <footer className='md:col-span-2 sticky bottom-[64px] md:bottom-0 md:h-[80px] h-[52px] md:bg-black flex items-center px-4'>
      <div className='select-none overflow-hidden flex items-center gap-3'>
        <div className='w-11 md:w-12 aspect-square relative'>
          <Image
            src={songImage.publicUrl}
            alt={song?.title || 'song cover image'}
            className='rounded aspect-square object-cover'
            priority
            fill
            sizes='10vw'
            quality={60}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <p
            className='max-w-[176px] 
            truncate
          text-sm
          select-none'
            title={song?.title || ''}>
            {song?.title}
          </p>
          <p
            className='max-w-[176px] 
            truncate 
            select-none
            text-sm text-neutral-400'
            title={song?.artist || ''}>
            {song?.artist}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ThePlayer;
