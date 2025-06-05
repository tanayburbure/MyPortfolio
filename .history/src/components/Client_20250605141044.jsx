import React from 'react';
import Earth from '../components/Earth';
import AnimatedText from '../components/AnimatedText'; // Make sure the path is correct

const Client = () => {
  return (
    <div className="py-28">
      <div className="pl-[31.4vh] flex flex-col justify-center">
        <h5 className="text-xm mb-6">C L I E N T S</h5>

        <AnimatedText className="text-[9vh] w-[78%] tracking-tight font-medium leading-[4vw]">
          I worked with some of the most <span className="text-[#EB5939]">innovative</span> industry leaders.
        </AnimatedText>
      </div>

      <Earth />
    </div>
  );
};

export default Client;
