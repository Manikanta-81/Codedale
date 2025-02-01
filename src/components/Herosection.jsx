import React from 'react';
import L1 from "../assets/images/L1.png";
import L2 from "../assets/images/L2.png";
import L3 from "../assets/images/L3.png";
import R1 from "../assets/images/R1.png";
import R2 from "../assets/images/R2.png";
import R3 from "../assets/images/R3.png";

function HeroSection() {
  return (
    <div className="w-[1268.8px] h-[504.18px] flex">
      {/* Left Div */}
      <div className="w-[204.29px] h-[496.13px] pr-8">
        {/* Image 1 */}
        <img
          src={L1}
          alt="Left Image 1"
          className="w-[204px] h-[128px] aspect-[51/32] object-cover mb-4"
          width={500}
          height={311}
        />
        
        {/* Image 2 */}
        <img
          src={L2}
          alt="Left Image 2"
          className="w-[204px] h-[128px] aspect-[51/32] object-cover mb-4"
          width={819}
          height={510}
        />
        
        {/* Image 3 */}
        <img
          src={L3}
          alt="Left Image 3"
          className="w-[204px] h-[128px] aspect-[51/32] object-cover"
          width={500}
          height={311}
        />
      </div>

      {/* Middle Div */}
      <div className="w-[960px] h-[496.13px] pb-16">
      </div>

      {/* Right Div */}
      <div className="w-[204.29px] relative">
  {/* Image 1 */}
  <img
    src={R1}
    alt="Right Image 1"
    className="w-[204px] h-[127.68px] object-cover mb-4 absolute right-[-270px] top-0"
  />
  {/* Image 2 */}
  <img
    src={R2}
    alt="Right Image 2"
    className="w-[204px] h-[127.68px] object-cover mb-4 absolute right-[-270px] top-[140px]"
  />
  {/* Image 3 */}
  <img
    src={R3}
    alt="Right Image 3"
    className="w-[204px] h-[127.68px] object-cover absolute right-[-270px] top-[280px]"
  />
</div>
    </div>
  );
}

export default HeroSection;