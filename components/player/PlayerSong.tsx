'use client';

import { Song } from '@/types/supabase';
import Image from 'next/image';
import LikeButton from '../buttons/liked/LikeButton';
import usePlayer from '@/hooks/usePlayer';
import useCoverImageUrl from '@/hooks/useCoverImageUrl';

export const revalidate = 0;

interface PlayerSongProps {
  song: Song;
  likedSong: {
    created_at: string;
    song_id: number;
    user_id: string;
  } | null;
}

const PlayerSong = ({ song, likedSong }: PlayerSongProps) => {
  const songImage = useCoverImageUrl(song);
  return (
    <div
      className='select-none overflow-hidden flex flex-1 items-center gap-6'
      key={song.id}>
      <div className='flex items-center gap-3'>
        <div className='w-12 md:w-[52px] aspect-square relative'>
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
        <div className='grid gap-1'>
          <p
            className='w-full
      truncate
      leading-none
      text-[0.78125rem]
      select-none'
            title={song.title || ''}>
            {song.title}
          </p>
          <p
            className='
      w-full 
      leading-none
      truncate 
      select-none
      text-[0.78125rem] text-neutral-400'
            title={song.artist || ''}>
            {song.artist}
          </p>
        </div>
      </div>
      <LikeButton key={song.id} likedSong={likedSong} songId={song.id} />
    </div>
  );
};

export default PlayerSong;
