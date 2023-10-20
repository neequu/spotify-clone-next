'use client';
import useGetSongById from '@/hooks/useGetSongById';
import usePlayer from '@/hooks/usePlayer';
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import LikeButton from './buttons/liked/LikeButton';

export const revalidate = 0;

const ThePlayer = () => {
  // const player = usePlayer();
  // const { song, likedSong } = useGetSongById(player.activeId);
  // console.log(likedSong);
  // if (!song) return null;

  const likedSong = {
    id: 22,
    created_at: '2023-10-19T21:11:14.285065+00:00',
    title: 'test',
    artist: 'yeah',
    song_path: 'song-test-yeah-778lnxoft5k',
    image_path: 'image-test-yeah-778lnxoft5k',
    user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
  };
  const song = {
    id: 22,
    created_at: '2023-10-19T21:11:14.285065+00:00',
    title: 'test',
    artist: 'yeah',
    song_path: 'song-test-yeah-778lnxoft5k',
    image_path: 'image-test-yeah-778lnxoft5k',
    user_id: 'c3fcb383-0c2c-447f-a5f0-7ccdbf49ecba',
  };
  const supabaseClient = createClientComponentClient<Database>();
  const { data: songImage } = supabaseClient.storage
    .from('images')
    .getPublicUrl(song.image_path!);
  return (
    <footer className='md:col-span-2 z-50 sticky bottom-[64px] md:bottom-0 md:h-[80px] h-[52px] md:bg-black flex items-center px-4'>
      <div
        className='select-none overflow-hidden flex items-center gap-6'
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
    </footer>
  );
};

export default ThePlayer;
