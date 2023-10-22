import TheLibrary from '@/components/library/TheLibrary';
import PlaylistHorizontal from '@/components/songs/PlaylistHorizontal';

const page = () => {
  return (
    <main className='flex-1 md:px-4 px-2 gradient-dark pt-[60px] overflow-auto h-screen pb-[64px] md:pb-0'>
      <h1 className='xs:text-xl font-semibold mb-4'>Your library</h1>
      <div className='flex'>
        <PlaylistHorizontal
          name='Liked Songs'
          image='/images/liked-songs.png'
          to='/liked-songs'
        />
      </div>
      <TheLibrary>
        <h1 className='xs:text-xl font-semibold mt-6'>Uploaded songs</h1>
      </TheLibrary>
    </main>
  );
};

export default page;
