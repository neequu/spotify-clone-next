import TheLibrary from './library/TheLibrary';
import TheNavbar from './TheNavbar';

import { PiPlaylist } from 'react-icons/pi';

const TheSidebar = () => {
  return (
    <div className='h-full flex flex-col items-center md:items-stretch justify-center md:justify-normal gap-layout-gap'>
      <TheNavbar />
      <div className='bg-gray-main rounded flex-1 lg:p-layout-p md:p-3 hidden md:flex'>
        <TheLibrary>
          <div className='text-neutral-400 flex items-center gap-2 font-bold'>
            <PiPlaylist size={24} />
            <span className='hidden lg:block'>Your library</span>
          </div>
        </TheLibrary>
      </div>
    </div>
  );
};

export default TheSidebar;
