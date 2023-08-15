"use client";

import { Loader } from "@/components/loader";

const Loading = () => {
  return (
    <div className="w=[100vw] h-[100vh]">
      <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
        <Loader />
      </div>
    </div>
  );
};

export default Loading;
