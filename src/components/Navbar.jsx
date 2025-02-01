import React from 'react';
import { FaReact } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="bg-[#161616] text-white px-[12px] py-0 flex justify-center items-center gap-2 font-sans text-[0.875rem] w-full h-[36px] mx-auto relative">
      <FaReact className="text-white text-[1.25rem]" />
      <p className="font-sans">Export your site to React</p>
      <p className="text-center underline cursor-pointer">Try it now</p>
    </div>
  );
}

export default Navbar;
