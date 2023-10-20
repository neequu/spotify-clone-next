'use client';

import PlayerControls from './player/PlayerControls';
import PlayerSong from './player/PlayerSong';
import { BsVolumeMute, BsVolumeUp } from 'react-icons/bs';

export const revalidate = 0;

const ThePlayer = () => {
  const muted = false;
  return (
    <footer className='md:col-span-2 z-50 sticky bottom-[64px] md:bottom-0 md:h-[80px] h-[52px] md:bg-black flex items-center px-4'>
      <PlayerSong />
      <PlayerControls />
      <span className='flex-1 flex justify-end'>
        <button
          type='button'
          className=' text-neutral-400 hover:text-white transition-colors'>
          {muted ? <BsVolumeMute /> : <BsVolumeUp />}
        </button>
      </span>
    </footer>
  );
};

export default ThePlayer;
