import Link from 'next/link';

interface NavbarItem {
  name: string;
  active: boolean;
  to: string;
  icon: any;
  className?: string;
}
const NavbarItem = ({
  name,
  active,
  to,
  icon: Icon,
  className,
}: NavbarItem) => {
  return (
    <Link
      className={`flex items-center gap-4 md:pr-[clamp(4rem,14vw,15rem)] text-neutral-400 font-semibold transition-colors hover:text-white
      ${active && 'text-white'} ${className}`}
      href={to}>
      <Icon strokeWidth={active ? '2' : '1'} />
      <span className='hidden md:block'>{name}</span>
    </Link>
  );
};

export default NavbarItem;
