import Spinner from "@/components/Spinner";
import React from "react";

const loading = () => {
  return (
    <div className="gradient-dark fixed inset-0 z-10 grid animate-pulse place-content-center">
      <Spinner />
    </div>
  );
};

export default loading;
