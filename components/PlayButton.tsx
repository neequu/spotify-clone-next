'use client';
import usePlayer from '@/hooks/usePlayer';
import { PiPlayFill } from 'react-icons/pi';

const PlayButton = ({ songId }: { songId: number }) => {
  const player = usePlayer();
  return (
    <button
      type='button'
      onClick={(e) => {
        e.preventDefault();
        player.setId(songId);
      }}
      className='
      group-hover:opacity-100 opacity-0 
      hover:scale-105 transition
      absolute
    text-black bg-accent 
    rounded-full 
      p-2
    bottom-2
    right-2'>
      <PiPlayFill size={20} />
    </button>
  );
};

export default PlayButton;
