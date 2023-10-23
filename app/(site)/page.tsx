import PlaylistHorizontal from '@/components/songs/PlaylistHorizontal';
import SongGrig from '@/components/songs/SongGrig';

export default async function Home() {
  return (
    <main className='md:px-4 px-2 md:rounded pt-[60px] pb-[64px] md:pb-0 md:gradient-green gradient-dark flex-1 overflow-auto h-screen'>
      <h1 className='md:text-2xl xs:text-xl font-semibold'>Welcome back!</h1>
      <section className='mt-4 flex gap-4'>
        <PlaylistHorizontal
          name='Liked Songs'
          image='/images/liked-songs.png'
          to='/liked-songs'
        />
      </section>
      <section className='md:mt-8 mt-6'>
        <h2 className='xs:text-xl font-semibold'>Newest songs</h2>
        <div className='md:mt-4 mt-2 '>
          <SongGrig />
        </div>
      </section>
    </main>
  );
}
