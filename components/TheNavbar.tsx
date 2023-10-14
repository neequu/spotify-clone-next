'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
  PiHouse,
  PiMagnifyingGlass,
  PiHouseFill,
  PiMagnifyingGlassFill,
} from 'react-icons/pi';
import NavbarItem from './NavbarItem';

const TheNavbar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        name: 'Home',
        active: pathname === '/',
        to: '/',
        icon: PiHouse,
        activeIcon: PiHouseFill,
      },
      {
        name: 'Search',
        active: pathname === '/search',
        to: '/search',
        icon: PiMagnifyingGlass,
        activeIcon: PiMagnifyingGlassFill,
      },
    ],
    [pathname]
  );

  return (
    <nav className='bg-gray-main rounded p-layout-p flex flex-col gap-4 shadow'>
      {routes.map((r) => (
        <NavbarItem key={r.name} {...r} />
      ))}
    </nav>
  );
};

export default TheNavbar;
