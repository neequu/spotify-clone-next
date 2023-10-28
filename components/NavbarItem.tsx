import Link from 'next/link';

interface NavbarItem {
  name: string;
  active: boolean;
  to: string;
  icon: any;
  activeIcon?: any;
  className?: string;
}
const NavbarItem = ({
  name,
  active,
  to,
  icon: Icon,
  activeIcon: ActiveIcon,
  className,
}: NavbarItem) => {
  return (
    <Link
      className={`flex items-center gap-4 lg:pr-48 md:pr-24 text-neutral-400 font-semibold transition-colors hover:text-white outline-none focus:shadow-focus rounded
      ${active && 'text-white'} ${className}`}
      href={to}>
      {active && ActiveIcon ? <ActiveIcon /> : <Icon />}
      <span className='hidden md:block'>{name}</span>
    </Link>
  );
};

export default NavbarItem;
