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
      className='select-none overflow-hidden flex items-center gap-6 flex-1 sm:pr-0 pr-4'
      key={song.id}>
      <div className='flex items-center gap-3 flex-1 sm:flex-initial'>
        <div className='w-12 md:w-[52px] aspect-square relative'>
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
            className='w-full truncate leading-none text-[0.78125rem] select-none'
            title={song.title || ''}>
            {song.title}
          </p>
          <p
            className='w-full leading-none truncate select-none text-[0.78125rem] text-neutral-400'
            title={song.artist || ''}>
            {song.artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerSong;
