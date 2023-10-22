'use client';

import Pause from '../icons/Pause';
import Play from '../icons/Play';
import StepBack from '../icons/StepBack';

const PlayerControls = ({
  playing,
  handlePlay,
}: {
  playing: boolean;
  handlePlay: () => void;
}) => {
  return (
    <div className='flex-1 flex justify-center gap-3 items-center'>
      <button
        aria-label='previous song'
        type='button'
        className='text-neutral-400 hover:text-white transition-colors'>
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
        className='text-neutral-400 hover:text-white transition-colors rotate-180'>
        <StepBack />
      </button>
    </div>
  );
};

export default PlayerControls;
