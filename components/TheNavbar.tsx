'use client';
import { usePathname } from 'next/navigation';

import { Home, Search, ListMusic } from 'lucide-react';
import NavbarItem from './NavbarItem';

const routes = [
  { name: 'Home', to: '/', icon: Home },
  { name: 'Search', to: '/search', icon: Search },
];

const TheNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className='md:bg-gray-main rounded lg:p-layout-p md:p-3 flex md:flex-col md:gap-5 gap-[clamp(1rem,12vw,6rem)] md:shadow '>
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
