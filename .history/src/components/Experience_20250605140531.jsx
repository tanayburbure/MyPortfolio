import React from 'react';
import VideoComponent from './VideoComponent'; // make sure path is correct
import AnimatedText from './AnimatedText'; // reuse the component we created

function Experience() {
  return (
    <div className='flex flex-col mt-12 justify-center'>
      <h5 className='text-sm font-semibold mb-6 pl-[31vh]'>E X P E R I E N C E</h5>

      <AnimatedText className="text-[9vh] mb-20 pl-[31vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]">
        Over <span className='text-[#EB5939]'>two years</span> of Experience in interactive design and working with some of the most talented people in the business.
      </AnimatedText>

      <VideoComponent />
    </div>
  );
}

export default Experience;
