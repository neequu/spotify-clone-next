import PlaylistHorizontal from '@/components/songs/PlaylistHorizontal';
import SongGrig from '@/components/songs/SongGrig';
import TheHeader from '@/components/TheHeader';

export default function Home() {
  return (
    <div className='flex-1 flex flex-col rounded overflow-hidden bg-gray-main md:bg-gradient-to-b from-accent-dark from-[45px] via-[#30705599] via-[130px]  to-gray-main to-[300px]'>
      <TheHeader />
      <main className='flex-1 md:px-layout-p px-2 md:mt-4'>
        <h1 className='md:text-2xl text-xl font-semibold'>Welcome back!</h1>
        <section className='mt-4 flex gap-4'>
          <PlaylistHorizontal
            name='Liked Songs'
            image='/images/liked-songs.png'
            to='/liked-songs'
          />
          <PlaylistHorizontal
            name='Liked Songs'
            image='/images/liked-songs.png'
            to='/liked-songs'
          />
        </section>
        <section className='md:mt-8 mt-6'>
          <h2 className='text-xl font-semibold'>Newest songs</h2>
          <div className='md:mt-4 mt-2'>{/* <SongGrig /> */}</div>
        </section>
      </main>
    </div>
  );
}
