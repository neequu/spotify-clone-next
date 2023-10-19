import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface NavbarItem {
  name: string;
  active: boolean;
  to: string;
  icon: IconType;
  activeIcon: IconType;
  className?: string;
}
const NavbarItem = ({
  name,
  active,
  to,
  icon: Icon,
  activeIcon: IconActive,
  className,
}: NavbarItem) => {
  return (
    <Link
      className={twMerge(
        `flex items-center gap-4 md:pr-[clamp(4rem,10vw,15rem)] text-neutral-400 font-semibold transition-colors hover:text-white`,
        active && 'text-white',
        className
      )}
      href={to}>
      {active ? <IconActive size={28} /> : <Icon size={28} />}
      <span className='hidden md:block'>{name}</span>
    </Link>
  );
};

export default NavbarItem;
