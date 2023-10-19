'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
  PiHouse,
  PiMagnifyingGlass,
  PiHouseFill,
  PiMagnifyingGlassFill,
  PiPlaylist,
  PiPlaylistFill,
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
    <nav className='md:bg-gray-main rounded lg:p-layout-p md:p-2 flex md:flex-col gap-5 shadow justify-center'>
      {routes.map((r) => (
        <NavbarItem key={r.name} {...r} />
      ))}
      <NavbarItem
        name='Library'
        active={pathname === '/library'}
        to='/library'
        icon={PiPlaylist}
        activeIcon={PiPlaylistFill}
        className='md:hidden'
      />
    </nav>
  );
};

export default TheNavbar;
