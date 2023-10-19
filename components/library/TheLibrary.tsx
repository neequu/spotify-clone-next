import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { PiPlaylist } from 'react-icons/pi';

import LibrarySongList from './LibrarySongList';
import LibraryUploadButton from './LibraryUploadButton';
import { getSongsByUserId } from '@/app/actions';
import { Database } from '@/types/supabase';

const TheLibrary = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase.auth.getSession();
  const user = data.session?.user;

  const userSongs = await getSongsByUserId(user);

  return (
    <section className='bg-gray-main flex-1 rounded shadow p-layout-p hidden md:flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <div className='text-neutral-400 flex items-center gap-2 font-bold'>
          <PiPlaylist size={24} />
          Your library
        </div>
        <LibraryUploadButton user={user} />
      </div>
      {/* <LibrarySongList userSongs={userSongs} /> */}
    </section>
  );
};

export default TheLibrary;
