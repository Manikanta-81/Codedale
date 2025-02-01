import React from 'react';
import Logo from "../assets/images/Logo1.png";
import firstImage from "../assets/images/1image.jpg";
import secondImage from "../assets/images/2image.jpg";
import thirdImage from "../assets/images/3image.jpg";

function MainNavbar() {
  return (
    <div className="w-full h-20 px-10 flex items-center justify-between border-b border-gray-200 cursor-pointer text-[16px] text-[#161616] font-sans font-semibold transition-colors duration-300 bg-[#faeeee] hover:bg-[#e0daff]">
      {/* Logo and Relume*/}
      <div className="w-[240px] h-[-34px]">
        <img 
          src={Logo} 
          alt="Logo" 
          className="w-[111px] h-[168px] object-contain"
        />
      </div>

      {/* Navigation Items */}
      <div className="hidden md:flex items-center gap-4">
        <div className="px-4 py-2 cursor-pointer text-[16px] text-[#161616] font-sans font-semibold hover:text-gray-600">Products</div>
        <div className="px-4 py-2 cursor-pointer text-[16px] text-[#161616] font-sans font-semibold hover:text-gray-600">Community</div>
        <div className="px-4 py-2 cursor-pointer text-[16px] text-[#161616] font-sans font-semibold hover:text-gray-600">Pricing</div>
        <div className="px-4 py-2 cursor-pointer text-[16px] text-[#161616] font-sans font-semibold hover:text-gray-600">Learn</div>
        <div className="px-4 py-2 cursor-pointer text-[16px] text-[#161616] font-sans font-semibold hover:text-gray-600">Contact Sales</div>
      </div>

      {/* Auth Section */}
      <div className="hidden md:flex items-center gap-4">
        <div className="px-4 py-2 cursor-pointer text-lg text-[#161616] font-sans hover:text-gray-600">Login</div>
        
        <button className="px-4 py-2 bg-black text-[#FFFFFF] rounded-md font-sans text-lg">
          Start for free
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center">
        <button className="text-black text-2xl">☰</button>
      </div>

      {/* Blue-bordered Box with Hover Effect */}
      <div className="border-l-2 border-r-2 border-b-2 border-blue-500 w-[97.5vw] h-[62vh] max-h-[46rem] mx-auto transition-all duration-300 absolute inset-[-1rem] top-[6rem]">
        
        {/* Content inside the box */}
        <div className="home-name-badge absolute top-[70px] left-[500px] flex items-center gap-2">
          <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-2xl">
            <div>
              <span 
                className="text-transparent bg-clip-text" 
                style={{
                  backgroundImage: 'linear-gradient(100deg, #FF7448, #FF4848 44%, #6248FF 92%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                400k+
              </span> Designers
              <span className="hide-mobile-landscape"> & Devs</span> Build with
              Relume
            </div>
            <div className="new-home-avatars flex items-center gap-1">
              <img src={firstImage} alt="Avatar 1" className="w-[18px] h-[18px] object-cover rounded-full shadow-lg" />
              <img src={secondImage} alt="Avatar 2" className="w-[18px] h-[18px] object-cover rounded-full shadow-lg" />
              <img src={thirdImage} alt="Avatar 3" className="w-[18px] h-[18px] object-cover rounded-full shadow-lg" />
            </div>
          </div>
        </div>

        {/* Heading inside the box */}
        <h2 className="text-center font-[Relative_Faux] text-[6.5rem] font-medium leading-[1.1] absolute top-[100px] left-[310px] ">
          Websites designed & 
        </h2>
        <h2 className="text-center font-[Relative_Faux] text-[6.5rem] font-medium leading-[1.1] absolute top-[200px] left-[360px]">
         built faster with AI
        </h2>
        <p className="text-[25px] absolute top-[350px] left-[390px] text-gray-600 font-sans text-md  ">Use AI as your design ally, not as a replacement. Effortlessly generate</p>
        <p className="text-[25px] absolute top-[380px] left-[430px] text-gray-600 font-sans text-md ">sitemaps and wireframes for marketing websites in minutes.</p>
      </div>
    </div>
  );
}

export default MainNavbar;  