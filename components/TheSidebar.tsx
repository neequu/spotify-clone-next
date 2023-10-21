import TheLibrary from './library/TheLibrary';
import TheNavbar from './TheNavbar';

import { PiPlaylist } from 'react-icons/pi';

const TheSidebar = () => {
  return (
    <div className='h-full flex items-center md:items-stretch justify-center md:justify-normal flex-col gap-layout-gap'>
      <TheNavbar />
      <div className='bg-gray-main flex-1 rounded lg:p-layout-p md:p-3'>
        <div className='hidden md:block'>
          <TheLibrary>
            <div className='text-neutral-400 flex items-center gap-2 font-bold'>
              <PiPlaylist size={24} />
              <span className='hidden lg:block'>Your library</span>
            </div>
          </TheLibrary>
        </div>
      </div>
    </div>
  );
};

export default TheSidebar;
