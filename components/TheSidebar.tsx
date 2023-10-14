import TheLibrary from './TheLibrary';
import TheNavbar from './TheNavbar';

const TheSidebar = () => {
  return (
    <aside className='flex flex-col gap-layout-gap'>
      <TheNavbar />
      <TheLibrary />
    </aside>
  );
};

export default TheSidebar;
