import Spinner from "@/components/Spinner";
import React from "react";

const loading = () => {
  return (
    <div className="gradient-dark grid h-screen animate-pulse place-content-center">
      <Spinner />
    </div>
  );
};

export default loading;
