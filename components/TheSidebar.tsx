import { ListMusic } from "lucide-react";

import TheLibrary from "./library/TheLibrary";
import TheNavbar from "./TheNavbar";

const TheSidebar = () => {
  return (
    <>
      <TheNavbar />
      <div className="hidden rounded bg-gray-main md:block md:p-3 lg:p-layout-p">
        <TheLibrary>
          <div className="flex items-center gap-2 font-bold text-neutral-400">
            <ListMusic strokeWidth="1.5" />
            <span className="hidden lg:block">Your library</span>
          </div>
        </TheLibrary>
      </div>
    </>
  );
};

export default TheSidebar;
