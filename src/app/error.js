"use client";

import GobackButton from "@/components/GobackButton";

function error() {
  return (
    <div className="min-h-screen grid grid-cols-[48rem] content-center justify-center ">
      <h3 className="text-center font-bold text-3xl text-red-600 pb-4">
        Something went wrong,please try again!
      </h3>
      <div className="flex justify-center">
        <GobackButton />
      </div>
    </div>
  );
}

export default error;
