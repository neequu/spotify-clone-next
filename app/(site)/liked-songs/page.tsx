import Image from 'next/image';
import { getlikedSongs } from '../../actions';
import LikedSongs from '@/components/LikedSongs';

const LikedSongsPage = async () => {
  const likedSongs = await getlikedSongs();

  const formattedString = () => {
    const len = likedSongs?.length;
    return `${len} ${len === 1 ? 'song' : 'songs'}`;
  };

  return (
    // <div className='flex-1 flex flex-col rounded overflow-hidden bg-gray-main md:bg-gradient-to-b from-[#2070cccc] from-[45px] via-[#1050aa99] via-[150px]  to-gray-main to-[300px]'>
    // <TheHeader />
    <main className='flex-1 md:px-layout-p px-2 md:pt-4 bg-gray-main select-none'>
      <div className='flex items-end gap-4 flex-wrap'>
        <Image
          src='/images/liked-songs.png'
          alt='liked songs'
          width={180}
          height={180}
          className='md:rounded-md object-cover hidden md:block'
        />
        <div>
          <p className='mb-4'>Playlist</p>
          <h1 className='text-6xl font-bold mb-6'>Liked Songs</h1>
          <p>{formattedString()}</p>
        </div>
      </div>
      {/* todo: fix this */}
      <LikedSongs likedSongs={likedSongs} />
    </main>
    // </div>
  );
};

export default LikedSongsPage;
