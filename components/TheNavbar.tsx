'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { PiHouse, PiMagnifyingGlass } from 'react-icons/pi';

const TheNavbar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      { name: 'Home', active: pathname === '/', to: '/', icon: PiHouse },
      {
        name: 'Search',
        active: pathname === '/search',
        to: '/search',
        icon: PiMagnifyingGlass,
      },
    ],
    [pathname]
  );

  return <div className='bg-gray-main rounded'>TheNavbar</div>;
};

export default TheNavbar;
