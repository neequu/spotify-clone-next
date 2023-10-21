'use client';
import { BiPause, BiPlay, BiSkipNext } from 'react-icons/bi';

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
        type='button'
        className='text-neutral-400 hover:text-white transition-colors rotate-180'>
        <BiSkipNext size={34} />
      </button>
      <button
        onClick={handlePlay}
        type='button'
        className={`bg-white text-black rounded-full grid place-content-center ${
          playing ? 'p-[1px]' : 'pl-[2px] py-[1px]'
        }`}>
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
