import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import AnimatedText from '../components/AnimatedText';

function Experience() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax background */}
      <Parallax speed={-20}>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Exp.jpg')" }}
        />
      </Parallax>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col mt-12 justify-center">
        <h5 className="text-sm font-semibold mb-6 pl-[31vh] text-white">E X P E R I E N C E</h5>

        <AnimatedText className="text-[9vh] mb-20 pl-[31vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-white">
          Over <span className="text-[#EB5939]">two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Experience;
