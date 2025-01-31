import React from 'react';
import { FaReact } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="bg-black text-white px-3 py-0.5 flex justify-center items-center gap-2 font-[Relative] text-[0.875rem] w-full h-[36px] mx-auto relative">
      <FaReact className="text-white text-[1.25rem]" />
      <p className="font-sans">Export your site to React</p>
      <p className="font- text-center underline cursor-pointer">
        Try it now
      </p>
    </div>
  );
}

export default Navbar;
