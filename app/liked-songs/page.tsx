import TheHeader from '@/components/TheHeader';
import Image from 'next/image';
import { getlikedSongs } from '../actions';
import LikedSongs from '@/components/liked-songs/LikedSongs';

const LikedSongsPage = async () => {
  const likedSongs = await getlikedSongs();

  const formattedString = () => {
    const len = likedSongs?.length;
    return `${len} ${len === 1 ? 'song' : 'songs'}`;
  };

  return (
    <div className='flex-1 flex flex-col rounded overflow-hidden bg-gray-main md:bg-gradient-to-b from-[#2070cccc] from-[40px] via-[#1050aa99] via-[100px]  to-gray-main to-[196px]'>
      <TheHeader />
      <main className='flex-1 md:px-layout-p px-2 md:mt-4 '>
        <div className='flex items-end gap-4'>
          <div className='relative flex-1 max-w-[200px] aspect-square shadow-xl'>
            <Image
              src='/images/liked-songs.png'
              alt='liked songs'
              fill
              className='md:rounded-md object-cover'
              priority
            />
          </div>
          <div>
            <p className='mb-4'>Playlist</p>
            <h1 className='text-6xl font-bold mb-6'>Liked Songs</h1>
            <p>{formattedString()}</p>
          </div>
        </div>
        <LikedSongs likedSongs={likedSongs} />
      </main>
    </div>
  );
};

export default LikedSongsPage;
