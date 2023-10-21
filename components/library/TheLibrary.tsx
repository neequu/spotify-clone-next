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

  if (!data.session || error) {
    return <div>You need to sign in to use your library</div>;
  }
  const user = data.session.user;
  const userSongs = (await getSongsByUserId(user)) || [];

  return (
    <section className={`md:flex flex-col gap-6`}>
      <div className='flex justify-between items-center'>
        {children}
        <LibraryUploadButton user={user} />
      </div>
      <LibrarySongList userSongs={userSongs} />
    </section>
  );
};

export default TheLibrary;
