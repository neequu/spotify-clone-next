import Spinner from "@/components/Spinner";
import React from "react";

const loading = () => {
  return (
    <div>
      <div className="gradient-dark grid h-screen animate-pulse place-content-center">
        <Spinner />
      </div>
    </div>
  );
};

export default loading;
