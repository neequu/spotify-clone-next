import LibrarySongList from './LibrarySongList';
import LibraryUploadButton from './LibraryUploadButton';

import { getSongsByUserId } from '@/app/actions';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';
interface TheLibraryProps {
  children?: React.ReactNode;
}

const TheLibrary = async ({ children }: TheLibraryProps) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase.auth.getSession();

  const user = data.session?.user;
  const userSongs = (await getSongsByUserId(user)) || [];

  return (
    <section className='grid gap-3'>
      <div className='flex justify-between items-center'>
        {children}
        <LibraryUploadButton user={user} />
      </div>
      {!data.session || error ? (
        <div className='text-sm text-neutral-400'>
          You need to sign in to use your library
        </div>
      ) : (
        <LibrarySongList userSongs={userSongs} />
      )}
    </section>
  );
};

export default TheLibrary;
