import { ListMusic } from 'lucide-react';

import TheLibrary from './library/TheLibrary';
import TheNavbar from './TheNavbar';

const TheSidebar = () => {
  return (
    <>
      <TheNavbar />
      <div className='bg-gray-main rounded lg:p-layout-p md:p-3 hidden md:block'>
        <TheLibrary>
          <div className='text-neutral-400 font-bold flex items-center gap-2'>
            <ListMusic strokeWidth='1.5' />
            <span className='hidden lg:block'>Your library</span>
          </div>
        </TheLibrary>
      </div>
    </>
  );
};

export default TheSidebar;
