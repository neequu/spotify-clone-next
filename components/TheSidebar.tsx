import React from 'react';
import TheLibrary from './TheLibrary';
import TheNavbar from './TheNavbar';

const TheSidebar = () => {
  return (
    <div className='flex flex-col gap-layout-gap'>
      <TheNavbar />
      <TheLibrary />
    </div>
  );
};

export default TheSidebar;
