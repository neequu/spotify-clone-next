import TheLibrary from './library/TheLibrary';
import TheNavbar from './TheNavbar';

const TheSidebar = () => {
  return (
    <aside className='flex flex-col gap-layout-gap order-2 md:-order-none'>
      <TheNavbar />
      <TheLibrary />
    </aside>
  );
};

export default TheSidebar;
