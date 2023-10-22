import TheLibrary from '@/components/library/TheLibrary';
import PlaylistHorizontal from '@/components/songs/PlaylistHorizontal';

const page = () => {
  return (
    <main className='flex-1 md:px-layout-p px-2 gradient-dark'>
      <h1 className='xs:text-xl font-semibold mb-4'>Your library</h1>
      <PlaylistHorizontal
        name='Liked Songs'
        image='/images/liked-songs.png'
        to='/liked-songs'
      />
      <TheLibrary>
        <h1 className='xs:text-xl font-semibold mt-4 mb-4 md:mb-0'>
          Uploaded songs
        </h1>
      </TheLibrary>
    </main>
  );
};

export default page;
