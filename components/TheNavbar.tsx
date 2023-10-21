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
    <nav className='md:bg-gray-main rounded lg:p-layout-p md:p-3 flex md:flex-col md:gap-5 gap-[clamp(1rem,12vw,6rem)] md:shadow '>
      {routes.map((route) => (
        <NavbarItem key={route.name} {...route} />
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
