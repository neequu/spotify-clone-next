'use client';

import { Song } from '@/types/supabase';
import Image from 'next/image';
import useGetImageUrl from '@/hooks/useGetImageUrl';
import Link from 'next/link';

export const revalidate = 0;

interface PlayerSongProps {
  song: Song;
}

const PlayerSong = ({ song }: PlayerSongProps) => {
  const songImageUrl = useGetImageUrl(song);

  return (
    <div className=' flex items-center gap-6 overflow-hidden'>
      <div className='flex flex-1 items-center gap-3 sm:flex-initial'>
        <div className='relative aspect-square min-w-[36px] md:w-[52px]'>
          <Image
            src={songImageUrl}
            alt={song?.title || 'song cover image'}
            className='aspect-square rounded object-cover'
            fill
            sizes='52px'
            quality={60}
          />
        </div>
        <div className='grid gap-1'>
          <p
            className='w-full truncate text-[0.625rem] leading-tight md:text-[0.78125rem]'
            title={song.title || ''}>
            <Link
              href={`/songs/${song.id}`}
              className='border-b border-transparent outline-none transition-colors hover:border-neutral-500 focus:border-neutral-500'>
              {song.title}
            </Link>
          </p>
          <p
            className='w-full truncate text-[0.625rem] leading-tight text-neutral-400 md:text-[0.78125rem]'
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
