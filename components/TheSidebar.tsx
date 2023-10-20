import TheLibrary from './library/TheLibrary';
import TheNavbar from './TheNavbar';

const TheSidebar = () => {
  return (
    <aside className='sticky md:top-2 z-50 md:h-[calc(100vh-8px)] h-[64px] bottom-0 flex items-center md:items-stretch justify-center md:justify-normal flex-col gap-layout-gap order-2 md:-order-none'>
      <TheNavbar />
      <TheLibrary />
    </aside>
  );
};

export default TheSidebar;
