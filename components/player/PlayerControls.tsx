'use client';

import { useEffect, useState } from 'react';
import Pause from '../icons/Pause';
import Play from '../icons/Play';
import StepBack from '../icons/StepBack';
import { Slider } from '../ui/slider';

const PlayerControls = ({
  playing,
  handlePlay,
  onPlayNext,
  onPlayPrevious,
  duration,
}: {
  playing: boolean;
  handlePlay: () => void;
  onPlayNext: () => void;
  onPlayPrevious: () => void;
  duration: number;
}) => {
  const [time, setTime] = useState(0);

  const maxTime = duration / (1000 * 60);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime((p) => p + 1);
    }, 1000);

    console.log(time);

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return (
    <div className='flex flex-col justify-center sm:flex-1'>
      <div className='flex justify-center gap-3 items-center'>
        <button
          aria-label='previous song'
          type='button'
          className='text-neutral-400 hover:text-white transition-colors hidden sm:block'
          onClick={onPlayPrevious}>
          <StepBack />
        </button>
        <button
          aria-label='pause or play song'
          onClick={handlePlay}
          type='button'>
          {playing ? <Pause /> : <Play />}
        </button>
        <button
          aria-label='next song'
          type='button'
          className='text-neutral-400 hover:text-white transition-colors rotate-180 hidden sm:block'
          onClick={onPlayNext}>
          <StepBack />
        </button>
      </div>
      <div className='hidden sm:flex select-none gap-2 text-neutral-300 text-[0.65rem] items-center'>
        <span>0</span>
        <Slider
          min={0}
          max={maxTime}
          className='w-full h-5'
          // onChange={}
          // step={1}
          value={[time]}
        />
        <span>{maxTime.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default PlayerControls;
