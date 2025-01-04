"use client";

import { useState } from "react";

function TextSlicer({ children, title }) {
  const [shorten, setShorten] = useState(false);

  function expandText() {
    setShorten(!shorten);
  }
  return (
    <div className="border-t-2 border-b-2 border-black px-8 py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-[18px] font-semibold text-black">{title}</h3>
        <button
          onClick={expandText}
          className="text-black text-[25px] font-semibold"
        >
          {shorten ? "-" : "+"}
        </button>
      </div>
      {shorten && <p className="italic opacity-70 gr">{children}</p>}
    </div>
  );
}

export default TextSlicer;
