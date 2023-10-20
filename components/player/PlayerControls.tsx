'use client';
import {
  AiFillStepBackward,
  AiFillPauseCircle,
  AiFillPlayCircle,
} from 'react-icons/ai';
import { useState } from 'react';
import usePlayer from '@/hooks/usePlayer';

const PlayerControls = () => {
  const [playing, setPlaying] = useState(true);
  return (
    <div className='flex-1 flex justify-center gap-4 items-center'>
      <button
        type='button'
        className='text-neutral-400 hover:text-white transition-colors'>
        <AiFillStepBackward size={22} />
      </button>
      <button type='button' className='bg-white text-black rounded-full p-1'>
        {playing ? (
          <AiFillPauseCircle size={22} />
        ) : (
          <AiFillPlayCircle size={22} />
        )}
      </button>
      <button
        type='button'
        className='rotate-180 text-neutral-400 hover:text-white transition-colors'>
        <AiFillStepBackward size={22} />
      </button>
    </div>
  );
};

export default PlayerControls;
