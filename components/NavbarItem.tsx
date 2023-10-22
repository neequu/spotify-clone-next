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
      className={`flex items-center gap-4 md:pr-[clamp(4rem,14vw,15rem)] text-neutral-400 font-semibold transition-colors hover:text-white
      ${active && 'text-white'} ${className}`}
      href={to}>
      {active && ActiveIcon ? <ActiveIcon /> : <Icon />}
      <span className='hidden md:block'>{name}</span>
    </Link>
  );
};

export default NavbarItem;
