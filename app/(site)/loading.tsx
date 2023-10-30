import Spinner from "@/components/Spinner";
import React from "react";

const loading = () => {
  return (
    <div className="gradient-dark h-screen w-screen animate-pulse">
      <div className=" fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Spinner />
      </div>
    </div>
  );
};

export default loading;