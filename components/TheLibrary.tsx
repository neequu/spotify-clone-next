import { PiPlaylist, PiPlus } from 'react-icons/pi';
import LibrarySongList from './LibrarySongList';

const TheLibrary = () => {
  return (
    <section className='bg-gray-main flex-1 rounded shadow p-layout-p hidden md:flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <div className='text-neutral-400 flex items-center gap-2'>
          <PiPlaylist size={22} />
          Your library
        </div>
        <button
          type='button'
          className='text-neutral-400 hover:text-white transition-colors'>
          <PiPlus size={22} />
        </button>
      </div>
      <div className='mt-4'>
        <LibrarySongList />
      </div>
    </section>
  );
};

export default TheLibrary;
