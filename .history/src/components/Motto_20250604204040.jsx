import React from 'react';

function Motto() {
  return (
    <div className="h-[100vh] relative overflow-hidden">
      {/* Background image with dimmed brightness */}
      <img
        className="object-cover opacity-60 absolute top-0 left-0 w-full h-full -z-10"
        src="./images/sukuna.jpg"
        alt="Experience"
        loading="eager"
        fetchpriority="high"
      />

      {/* Top smoky gradient */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-[#0D0D0D] to-transparent z-0" />

      {/* Bottom smoky gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#0D0D0D] to-transparent z-0" />

      {/* Text content */}
      <div className="top-[28%] left-0 right-0 absolute flex flex-col items-center text-center px-4">
        <h5 className="text-sm pl-3 mb-12">M Y &nbsp; M O T T O</h5>
        <h2 className="text-[18vh] w-[60%] font-semibold tracking-tighter leading-[7vw]">
          GOOD DESIGN IS HONEST
        </h2>
        <h4 className="mt-6 pl-5">Dieter Rams</h4>
      </div>
    </div>
  );
}

export default Motto;
