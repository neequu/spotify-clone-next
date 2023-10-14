'use client';
import { useState } from 'react';
import HeaderNavButton from './HeaderNavButton';
import { PiUserCircle } from 'react-icons/pi';

const TheHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className='p-layout-p font-medium'>
      <div className='flex items-center md:justify-between justify-end'>
        <div className='hidden md:flex gap-2'>
          <HeaderNavButton />
          <HeaderNavButton forward={true} />
        </div>
        {isLoggedIn ? (
          <button
            type='button'
            className='py-1'
            onClick={() => setIsLoggedIn(false)}>
            <PiUserCircle size={24} />
          </button>
        ) : (
          <div className='flex items-center gap-3 md:gap-4 self-end'>
            <button
              type='button'
              className=''
              onClick={() => setIsLoggedIn(true)}>
              Sign in
            </button>
            <button
              type='button'
              className='bg-white text-black px-2 py-1 rounded-full'>
              Sign up
            </button>
          </div>
        )}
        {}
      </div>
    </header>
  );
};

export default TheHeader;
