import Playlist from '@/components/Playlist';
import PlaylistHorizontal from '@/components/PlaylistHorizontal';
import TheHeader from '@/components/TheHeader';

export default function Home() {
  return (
    <div className='flex-1 flex flex-col rounded overflow-hidden bg-gradient-to-b from-accent-dark from-1% via-[#30705599] via-4%  to-gray-main to-[24%]'>
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
        <section className='mt-8'>
          <h2 className='text-xl font-semibold'>Newest songs</h2>
          <div className='flex gap-4 flex-wrap mt-4'>
            <Playlist to='/' />
            <Playlist to='/' />
            <Playlist to='/' />
            <Playlist to='/' />
          </div>
        </section>
      </main>
    </div>
  );
}
