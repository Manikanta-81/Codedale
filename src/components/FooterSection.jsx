import React from 'react';

function FooterSection() {
  return (
    <div 
      className="w-[800px] h-[84px] p-[4px_4px_8px_4px] rounded-lg mx-auto" // Added mx-auto here
      style={{
        background: 'linear-gradient(to right, #6248FF, #FF7448, #6248FF)'
      }}
    >
      <div className="w-[792px] h-[72px] bg-white p-3 flex justify-between rounded-md">

        <div className="w-[605.4px] h-[48px] pt-2 pl-2">
          <p className="text-gray-500 text-md">
            Describe your company in one or two..
          </p>
        </div>

        {/* Generate Button */}
        <div className="w-[146.6px] h-[48px] relative">
          <button 
            className="w-full h-full bg-[#6248FF] hover:shadow-md transition-shadow 
                      pl-[48px] pr-[20px] py-[9px] relative rounded-md"
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2 animate-pulse">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                  fill="white"
                />
              </svg>
            </div>
            <span className="text-white font-medium">Generate</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;