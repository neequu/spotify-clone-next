'use client';
import usePlaySong from '@/hooks/usePlaySong';
import { Song } from '@/types/supabase';
import { Play } from 'lucide-react';

const PlayButton = ({ song, songs }: { song: Song; songs: Song[] }) => {
  const onPlay = usePlaySong(songs);
  return (
    <button
      type='button'
      onClick={(e) => {
        e.preventDefault();
        onPlay(song.id);
      }}
      className='hover:brightness-110 absolute group-hover:opacity-100 opacity-0 group-hover:bottom-2 bottom-0 right-2 transition-[bottom_filter] text-black bg-accent rounded-full p-2'
      aria-label={`play ${song.title} by ${song.artist}`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 256 256'>
        <path
          fill='currentColor'
          d='M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128Z'></path>
      </svg>
    </button>
  );
};

export default PlayButton;
