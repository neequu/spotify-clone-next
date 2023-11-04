import { ListMusic } from "lucide-react";

import TheLibrary from "./library/TheLibrary";
import TheNavbar from "./TheNavbar";
import { Suspense } from "react";
import LibrarySkeleton from "./skeletongs/LibrarySkeleton";

const TheSidebar = () => {
  return (
    <>
      <TheNavbar />
      <div className="hidden w-full rounded bg-gray-main md:block md:p-3 lg:p-layout-p">
        <Suspense
          fallback={
            <div className="h-full">
              <LibrarySkeleton amount={4} />
            </div>
          }
        >
          <TheLibrary>
            <div className="flex items-center gap-2 font-bold text-neutral-400">
              <ListMusic strokeWidth="1.5" />
              <span className="hidden lg:block">Your library</span>
            </div>
          </TheLibrary>
        </Suspense>
      </div>
    </>
  );
};

export default TheSidebar;
