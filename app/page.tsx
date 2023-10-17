import PlaylistHorizontal from '@/components/songs/PlaylistHorizontal';
import SongGrig from '@/components/songs/SongGrig';
import TheHeader from '@/components/TheHeader';

export default function Home() {
  return (
    <div className='flex-1 flex flex-col rounded overflow-hidden bg-gradient-to-b from-accent-dark from-[45px] via-[#30705599] via-[130px]  to-gray-main to-[300px]'>
      <TheHeader />
      <main className='flex-1 px-4 pt-4'>
        <h1 className='text-2xl font-semibold'>Welcome back!</h1>
        <section className='mt-4'>
          <PlaylistHorizontal
            name='Liked Songs'
            image='/images/liked-songs.png'
            to='/liked-songs'
          />
        </section>
        <section className='mt-8 h-[500vh]'>
          <h2 className='text-xl font-semibold'>Newest songs</h2>
          <div className='mt-4'>
            <SongGrig />
          </div>
        </section>
      </main>
    </div>
  );
}
