import Link from 'next/link';
import React from 'react';
import { PiPlayFill } from 'react-icons/pi';

interface PlaylistProps {
  to: string;
}

const Playlist = ({ to }: PlaylistProps) => {
  return (
    <Link href={to}>
      <div className='flex flex-col group items-center relative bg-gray-md bg-opacity-30 backdrop-blur-40 w-60 p-1.5 rounded gap-4 hover:backdrop-brightness-110 transition'>
        Playlist
        <button
          type='button'
          className='group-hover:opacity-100 opacity-0 hover:scale-105  absolute top-1/2 right-4 -translate-y-1/2 transition text-black bg-accent rounded-full p-1.5'>
          <PiPlayFill size={12} />
        </button>
      </div>
    </Link>
  );
};

export default Playlist;
