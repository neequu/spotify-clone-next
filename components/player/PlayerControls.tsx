'use client';

import { useEffect, useState } from 'react';
import Pause from '../icons/Pause';
import Play from '../icons/Play';
import StepBack from '../icons/StepBack';
import { Slider } from '../ui/slider';
import { Song } from '@/types/supabase';

const PlayerControls = ({
  playing,
  handlePlay,
  onPlayNext,
  onPlayPrevious,
  duration,
  song,
}: {
  playing: boolean;
  handlePlay: () => void;
  onPlayNext: () => void;
  onPlayPrevious: () => void;
  song: Song;
  duration: number;
}) => {
  const [time, setTime] = useState(0);
  const maxTime = duration / 1000;

  useEffect(() => {
    if (Math.floor(maxTime) > time) return;
    onPlayNext();
  }, [time]);

  const checkKey = (k: KeyboardEvent) => {
    if (k.code !== 'Space') return;

    handlePlay();
  };
  useEffect(() => {
    document.addEventListener('keydown', checkKey);

    return () => document.removeEventListener('keydown', checkKey);
  }, []);

  useEffect(() => {
    let timer: any;

    if (playing) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 0.03);
      }, 30);
    }

    return () => clearInterval(timer);
  }, [playing]);

  function formatTime(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // format
    const formattedTime: string = `${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
  }

  return (
    <div className='flex flex-col justify-center sm:flex-1'>
      <div className='flex justify-center gap-3 items-center'>
        <button
          aria-label='previous song'
          type='button'
          className='outline-none focus:shadow-focus rounded-full text-neutral-400 hover:text-white transition-colors hidden sm:block'
          onClick={onPlayPrevious}>
          <StepBack />
        </button>
        <button
          aria-label='pause or play song'
          onClick={handlePlay}
          className='outline-none focus:shadow-focus rounded-full'
          type='button'>
          {playing ? <Pause /> : <Play />}
        </button>
        <button
          aria-label='next song'
          type='button'
          className='outline-none focus:shadow-focus rounded-full text-neutral-400 hover:text-white transition-colors rotate-180 hidden sm:block'
          onClick={onPlayNext}>
          <StepBack />
        </button>
      </div>
      <div className='hidden sm:flex select-none text-neutral-300 text-[0.625rem] items-center'>
        <span className='w-10 flex justify-start'>{formatTime(time)}</span>
        <Slider
          min={0}
          max={Math.floor(maxTime)}
          className='w-full h-5'
          value={[time]}
          defaultValue={[time]}
        />
        <span className='w-10 flex justify-end'>{formatTime(maxTime)}</span>
      </div>
    </div>
  );
};

export default PlayerControls;
