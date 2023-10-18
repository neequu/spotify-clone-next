'use client';
import { PiHeartStraight } from 'react-icons/pi';

const LikeButton = () => {
  return (
    <button
      type='button'
      className='text-neutral-400 absolute top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover:opacity-100 transition hover:text-white'>
      <PiHeartStraight size={18} />
    </button>
  );
};

export default LikeButton;
