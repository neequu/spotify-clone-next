'use client';
import usePlaySong from '@/hooks/usePlaySong';
import { Song } from '@/types/supabase';
import { PiPlayFill } from 'react-icons/pi';

const PlayButton = ({ song, songs }: { song: Song; songs: Song[] }) => {
  const onPlay = usePlaySong(songs);
  return (
    <button
      type='button'
      onClick={(e) => {
        e.preventDefault();
        onPlay(song.id);
      }}
      className='
      group-hover:opacity-100 opacity-0 
      group-hover:translate-y-0 translate-y-2
      hover:scale-105 transition
      absolute
    text-black bg-accent 
    rounded-full 
      p-2
    bottom-2
    right-2'
      aria-label={`play ${song.title} by ${song.title}`}>
      <PiPlayFill size={20} />
    </button>
  );
};

export default PlayButton;
