'use client';

import PlayerControls from './player/PlayerControls';
import PlayerSong from './player/PlayerSong';
import { BsVolumeMute, BsVolumeUp } from 'react-icons/bs';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
export const revalidate = 0;

const ThePlayer = () => {
  const [volume, setVolume] = useState(50);
  const [prevVolume, setPrevVolume] = useState(volume);
  return (
    <footer className='md:col-span-2 z-50 sticky bottom-[64px] md:bottom-0 md:h-[80px] h-[52px] md:bg-black flex items-center px-4'>
      <PlayerSong />
      <PlayerControls />
      <div className='flex-1 flex justify-end gap-2'>
        <button
          type='button'
          onClick={() => {}}
          className=' text-neutral-400 hover:text-white transition-colors'>
          {volume === 0 ? <BsVolumeMute size={20} /> : <BsVolumeUp size={20} />}
        </button>
        <Slider
          className='max-w-[100px]'
          defaultValue={[volume]}
          max={100}
          step={1}
          // onChange={(e) => setVolume(e.target.value)}
        />
      </div>
    </footer>
  );
};

export default ThePlayer;
