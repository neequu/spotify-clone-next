import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface NavbarItem {
  name: string;
  active: boolean;
  to: string;
  icon: IconType;
  activeIcon: IconType;
}
const NavbarItem = ({
  name,
  active,
  to,
  icon: Icon,
  activeIcon: IconActive,
}: NavbarItem) => {
  return (
    <div className=''>
      <Link
        className={twMerge(
          `flex items-center gap-4 text-neutral-400 font-semibold transition-colors hover:text-white`,
          active && 'text-white'
        )}
        href={to}>
        {active ? <IconActive size={28} /> : <Icon size={28} />}
        <span className='hidden md:block'>{name}</span>
      </Link>
    </div>
  );
};

export default NavbarItem;
