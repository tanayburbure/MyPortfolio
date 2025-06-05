import React from 'react';
import AnimatedText from '../components/AnimatedText'; // adjust path if needed

function Experience() {
  return (
    <div
      className="bg-fixed  w-full bg-center bg-cover min-h-screen"
      style={{ backgroundImage: "url('/images/Exp.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-0" />

      {/* Content */}
      <div className="z-10 flex flex-col mt-12 pt-52">
        <h5 className="text-sm font-semibold mb-6 pl-[31vh]">E X P E R I E N C E</h5>

        <AnimatedText className="text-[9vh] mb-20 pl-[31vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]">
          Over <span className="text-[#EB5939]">two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Experience;
