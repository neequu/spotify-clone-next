'use client';
import { BiPause, BiPlay, BiSkipNext } from 'react-icons/bi';

const PlayerControls = ({ playing }: { playing: boolean }) => {
  return (
    <div className='flex-1 flex justify-center gap-3 items-center'>
      <button
        type='button'
        className='text-neutral-400 hover:text-white transition-colors rotate-180'>
        <BiSkipNext size={34} />
      </button>
      <button type='button' className='bg-white text-black rounded-full '>
        {playing ? <BiPause size={30} /> : <BiPlay size={30} />}
      </button>
      <button
        type='button'
        className='text-neutral-400 hover:text-white transition-colors'>
        <BiSkipNext size={34} />
      </button>
    </div>
  );
};

export default PlayerControls;
