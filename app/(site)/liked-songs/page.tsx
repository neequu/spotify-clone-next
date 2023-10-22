import Image from 'next/image';
import { getlikedSongs } from '../../actions';
import LikedSongs from '@/components/LikedSongs';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const LikedSongsPage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/');
  }

  const likedSongs = await getlikedSongs();

  const formattedString = () => {
    const len = likedSongs?.length;
    return `${len} ${len === 1 ? 'song' : 'songs'}`;
  };

  return (
    <main className='flex-1 md:px-4 px-2 select-none md:gradient-purple gradient-purple-mobile pt-[60px] overflow-auto h-screen pb-[64px] md:pb-0'>
      <div className='flex items-end gap-4'>
        <Image
          src='/images/liked-songs.png'
          alt='liked songs'
          width={160}
          height={160}
          className='md:rounded-md object-cover hidden md:block'
        />
        <div>
          <p className='mb-4 md:mb-6 hidden md:block'>Playlist</p>
          <h1 className='md:text-[clamp(2rem,5vw,3.75rem)] font-bold md:mb-8 text-xl'>
            Liked Songs
          </h1>
          <p className='text-xs md:text-base text-neutral-300 md:text-white'>
            {formattedString()}
          </p>
        </div>
      </div>
      <LikedSongs likedSongs={likedSongs} />
    </main>
  );
};

export default LikedSongsPage;
