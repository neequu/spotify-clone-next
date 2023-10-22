import { ListMusic } from 'lucide-react';

import TheLibrary from './library/TheLibrary';
import TheNavbar from './TheNavbar';

const TheSidebar = () => {
  return (
    <div className='flex flex-col items-center md:items-stretch justify-center gap-layout-gap'>
      <TheNavbar />
      <div className='bg-gray-main rounded lg:p-layout-p md:p-3 hidden md:flex'>
        <TheLibrary>
          <div className='text-neutral-400 flex items-center gap-2 font-bold'>
            <ListMusic strokeWidth='1.5' />
            <span className='hidden lg:block'>Your library</span>
          </div>
        </TheLibrary>
      </div>
    </div>
  );
};

export default TheSidebar;
