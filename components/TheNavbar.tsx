"use client";
import { usePathname } from "next/navigation";
import { Home, HomeFill } from "@/components/icons/house";
import { Search, SearchFill } from "@/components/icons/search";

import NavbarItem from "./NavbarItem";
import { ListMusic } from "lucide-react";

const routes = [
  { name: "Home", to: "/", icon: Home, activeIcon: HomeFill },
  { name: "Search", to: "/search", icon: Search, activeIcon: SearchFill },
];

const TheNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex h-[64px] w-full items-center justify-center gap-[clamp(2.5rem,12vw,6rem)] rounded md:h-[initial] md:flex-col md:items-start md:gap-5 md:bg-gray-main md:p-3 md:shadow lg:p-layout-p">
      {routes.map((route) => (
        <NavbarItem
          active={pathname === route.to}
          key={route.name}
          {...route}
        />
      ))}
      <NavbarItem
        name="Library"
        active={pathname === "/library"}
        to="/library"
        icon={ListMusic}
        className="md:hidden"
      />
    </nav>
  );
};

export default TheNavbar;
