import Link from "next/link";

interface NavbarItemProps {
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
}: NavbarItemProps) => {
  return (
    <Link
      className={`flex items-center gap-4 rounded text-sm font-semibold text-neutral-400 outline-none transition-colors hover:text-white focus-visible:shadow-focus md:pr-24 lg:pr-48 lg:text-base
      ${active && "text-white"} ${className}`}
      href={to}
    >
      {active && ActiveIcon ? <ActiveIcon /> : <Icon />}
      <span className="hidden md:block">{name}</span>
    </Link>
  );
};

export default NavbarItem;
