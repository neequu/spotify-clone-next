import TheHeader from '@/components/TheHeader';
import PlaylistHorizontal from '@/components/songs/PlaylistHorizontal';
import SongGrig from '@/components/songs/SongGrig';

export default function Home() {
  return (
    <main className='flex-1 md:px-layout-p px-2 pt-14 md:rounded overflow-hidden md:gradient-green gradient-dark'>
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
        <div className='md:mt-4 mt-2 h-[200vh]'>
          <SongGrig />
        </div>
      </section>
    </main>
  );
}
