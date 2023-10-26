'use client';
import { usePathname } from 'next/navigation';
import { Home, HomeFill } from '@/components/icons/house';
import { Search, SearchFill } from '@/components/icons/search';

import NavbarItem from './NavbarItem';
import { ListMusic } from 'lucide-react';

const routes = [
  { name: 'Home', to: '/', icon: Home, activeIcon: HomeFill },
  { name: 'Search', to: '/search', icon: Search, activeIcon: SearchFill },
];

const TheNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className='md:bg-gray-main rounded w-full justify-center lg:p-layout-p md:p-3 flex md:flex-col md:gap-5 gap-[clamp(2.5rem,12vw,6rem)] md:shadow h-[64px] md:h-[initial] items-center md:items-start'>
      {routes.map((route) => (
        <NavbarItem
          active={pathname === route.to}
          key={route.name}
          {...route}
        />
      ))}
      <NavbarItem
        name='Library'
        active={pathname === '/library'}
        to='/library'
        icon={ListMusic}
        className='md:hidden'
      />
    </nav>
  );
};

export default TheNavbar;
