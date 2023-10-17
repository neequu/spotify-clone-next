'use client';
import React from 'react';
import { PiPlayFill } from 'react-icons/pi';

const PlayButton = () => {
  return (
    <button
      type='button'
      onClick={() => {}}
      className='
      group-hover:opacity-100 opacity-0 
      hover:scale-105 transition
      absolute
    text-black bg-accent 
    rounded-full 
    p-2
    bottom-2
    right-2'>
      <PiPlayFill size={20} />
    </button>
  );
};

export default PlayButton;
