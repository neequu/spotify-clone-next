'use client';

import { Song } from '@/types/supabase';
import Image from 'next/image';
import useCoverImageUrl from '@/hooks/useCoverImageUrl';

export const revalidate = 0;

interface PlayerSongProps {
  song: Song;
}

const PlayerSong = ({ song }: PlayerSongProps) => {
  const songImage = useCoverImageUrl(song);

  return (
    <div
      className='select-none overflow-hidden flex items-center gap-6'
      key={song.id}>
      <div className='flex items-center gap-3 flex-1 sm:flex-initial'>
        <div className='min-w-[36px] md:w-[52px] aspect-square relative'>
          <Image
            src={songImage.publicUrl}
            alt={song?.title || 'song cover image'}
            className='rounded aspect-square object-cover'
            fill
            quality={60}
          />
        </div>
        <div className='grid gap-1'>
          <p
            className='w-full truncate leading-tight md:text-[0.78125rem] text-[0.625rem] select-none'
            title={song.title || ''}>
            {song.title}
          </p>
          <p
            className='w-full leading-tight truncate select-none md:text-[0.78125rem] text-[0.625rem] text-neutral-400'
            title={song.artist || ''}>
            {song.artist}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PlayerSong;
