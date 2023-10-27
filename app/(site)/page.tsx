import PlaylistHorizontal from '@/components/songs/PlaylistHorizontal';
import SongGrig from '@/components/songs/SongGrig';

import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className='md:px-4 px-2 md:rounded pt-[60px] pb-[64px] md:pb-0 md:gradient-green gradient-dark flex-1 overflow-auto h-screen'>
      <h1 className='md:text-2xl xs:text-xl font-semibold'>
        {session ? 'Welcome back!' : 'Welcome new comer!'}
      </h1>
      <section className='mt-4 flex gap-4'>
        <PlaylistHorizontal
          name='Liked Songs'
          image='/images/liked-songs.png'
          to='/liked-songs'
          hasSession={!!session}
        />
      </section>
      <section className='md:mt-8 mt-6'>
        <h2 className='xs:text-xl font-semibold'>Newest songs</h2>
        <div className='md:mt-4 mt-2 '>
          <Suspense fallback={<div>loading...</div>}>
            <SongGrig supabase={supabase} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
