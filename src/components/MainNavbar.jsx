import React from 'react';
import logo from "../assets/images/Logo.png";
import RelumeImage from "../assets/images/Relume.png"; 

function MainSection() {
  return (
    <div className="bg-[#e4e2df] font-sans hover:bg-[#E0DAFF] transition-all duration-300">
      <div className="grid grid-cols-[0.5fr_1fr_0.5fr] gap-0 justify-between items-center w-[1090.4px] h-[80px] mx-auto">

        <div className="flex items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-auto w-[37px] mb-0 flex-shrink-0" />
          {/* Relume Logo */}
          <img src={RelumeImage} alt="Relume Image " className="h-auto w-[111px] mb-0 -ml-1 flex-shrink-0" />
        </div>

        {/* Center: Navigation Links */}
        <div className="flex justify-center items-center gap-4 relative">
            
          {/* Products Dropdown */}
          <div className="group relative">
            <p className="cursor-pointer hover:bg-[var(--light-grey-1)] px-2 py-1 rounded-md flex items-center">
              Products
              <span className="ml-2 text-xl transition-transform group-hover:rotate-180">{`↓`}</span> 
            </p>
            {/* Dropdown Menu */}
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 rounded-md mt-1 w-40">
              <p className="py-1 hover:bg-[var(--light-grey-1)]">Option 1</p>
              <p className="py-1 hover:bg-[var(--light-grey-1)]">Option 2</p>
              <p className="py-1 hover:bg-[var(--light-grey-1)]">Option 3</p>
            </div>
          </div>

          {/* Community Dropdown */}
          <div className="group relative">
            <p className="cursor-pointer hover:bg-[var(--light-grey-1)] px-2 py-1 rounded-md flex items-center">
              Community
              <span className="ml-2 text-xl transition-transform group-hover:rotate-180">{`↓`}</span> 
            </p>

            {/* Dropdown Menu */}
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 rounded-md mt-1 w-40">
              <p className="py-1 hover:bg-[var(--light-grey-1)]">Option A</p>
              <p className="py-1 hover:bg-[var(--light-grey-1)]">Option B</p>
              <p className="py-1 hover:bg-[var(--light-grey-1)]">Option C</p>
            </div>
          </div>

          <p className="cursor-pointer hover:bg-[var(--light-grey-1)] px-2 py-1 rounded-md">Pricing</p>
          <p className="cursor-pointer hover:bg-[var(--light-grey-1)] px-2 py-1 rounded-md">Learn</p>
          <p className="cursor-pointer hover:bg-[var(--light-grey-1)] px-2 py-1 rounded-md">Contact Sales</p>
        </div>

        {/* Right side: Login and Start for Free buttons */}
        <div className="flex justify-end items-center gap-4">
          <button className="text-sm py-2 px-4 bg-transparent hover:bg-[var(--light-grey-1)] text-black rounded-md">
            Login
          </button>

          {/* Start for Free button */}
          <button className="text-sm py-2 px-4 bg-black text-white border border-black rounded-md">
            Start for Free
          </button>
        </div>
      </div>

      {/* Blue line box with border only on left, right, and bottom */}
      <div className="border-l-2 border-r-2 border-b-2 border-blue-500 w-[97.5vw] h-[78vh] max-h-[46rem] mx-auto transition-all duration-300 absolute inset-[-1rem] top-auto bottom-auto">
        {/* Content inside the box */}
        
      </div>
    </div>
  );
}

export default MainSection;
