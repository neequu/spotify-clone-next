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
    <main className='flex-1 md:px-layout-p px-2 md:pt-4 select-none gradient-purple'>
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
      <LikedSongs likedSongs={likedSongs} />
    </main>
  );
};

export default LikedSongsPage;
