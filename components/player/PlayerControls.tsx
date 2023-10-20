'use client';
import { PiPlayFill, PiPauseFill } from 'react-icons/pi';
import { AiFillStepBackward } from 'react-icons/ai';
const PlayerControls = () => {
  const playing = false;
  return (
    <div className='flex-1 flex justify-center gap-4 items-center'>
      <button
        type='button'
        className='text-neutral-400 hover:text-white transition-colors'>
        <AiFillStepBackward size={22} />
      </button>
      <button type='button' className='bg-white text-black rounded-full p-1'>
        {playing ? <PiPauseFill size={22} /> : <PiPlayFill size={22} />}
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
