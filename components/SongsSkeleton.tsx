import React from 'react';

const SongsSkeleton = () => {
  return (
    <div className='flex gap-4'>
      <div className='w-[140px] bg-opacity-50 rounded h-[226px] bg-neutral-800 animate-pulse transition-[5ms]' />
      <div className='w-[140px] bg-opacity-50 rounded h-[226px] bg-neutral-800 animate-pulse transition-[5ms]' />
      <div className='w-[140px] bg-opacity-50 rounded h-[226px] bg-neutral-800 animate-pulse transition-[5ms]' />
      <div className='w-[140px] bg-opacity-50 rounded h-[226px] bg-neutral-800 animate-pulse transition-[5ms]' />
      <div className='w-[140px] bg-opacity-50 rounded h-[226px] bg-neutral-800 animate-pulse transition-[5ms]' />
    </div>
  );
};

export default SongsSkeleton;
