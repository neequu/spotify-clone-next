import PlaylistHorizontal from '@/components/songs/PlaylistHorizontal';
import SongGrig from '@/components/songs/SongGrig';

export default function Home() {
  return (
    <main className='flex-1 md:px-layout-p px-2 md:pt-2 md:rounded overflow-hidden md:gradient-green gradient-dark'>
      <h1 className='md:text-2xl text-xl font-semibold'>Welcome back!</h1>
      <section className='mt-4 flex gap-4'>
        <PlaylistHorizontal
          name='Liked Songs'
          image='/images/liked-songs.png'
          to='/liked-songs'
        />
      </section>
      <section className='md:mt-8 mt-6'>
        <h2 className='text-xl font-semibold'>Newest songs</h2>
        <div className='md:mt-4 mt-2'>
          <SongGrig />
        </div>
      </section>
    </main>
  );
}
