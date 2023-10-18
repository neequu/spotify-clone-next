import Image from 'next/image';
import Link from 'next/link';
import PlayButton from '../PlayButton';

import { Song } from '@/types/types';
import { getImage } from '@/app/actions';

interface PlaylistProps {
  songData: Song;
}

const Playlist = async ({ songData }: PlaylistProps) => {
  const image = await getImage(songData);
  return (
    <Link href={`/songs/${songData.id}`} className='w-min'>
      <div
        className='md:max-w-40 max-w-20 aspect-square 
      grid 
      group 
      bg-gray-md bg-opacity-30 backdrop-blur-40 hover:bg-neutral-800 transition
      md:p-2 md:pb-9 pb-5
      rounded'>
        <div className='relative max-w-[220px] aspect-square'>
          <Image
            src={image}
            alt={songData.title || 'song cover art'}
            fill
            className='md:rounded-md object-cover'
            priority
          />
          <PlayButton />
        </div>
        <div className='flex flex-col w-full mt-3'>
          <p
            className='
            md:w-[144px] 
            w-[100px] 
            truncate font-bold
            text-sm
            md:text-base
            mb-0.5'
            title={songData.title || ''}>
            {songData.title}
          </p>
          <p
            className='
            md:w-[144px] 
            w-[100px] 
            truncate
            md:text-sm 
            text-xs
            text-neutral-400'
            title={songData.artist || ''}>
            {songData.artist}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Playlist;
