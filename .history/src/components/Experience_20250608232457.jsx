import React, { useEffect, useState } from 'react';
import AnimatedText from '../components/AnimatedText';
import { IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

function Experience() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.05);
        animationFrameId = null;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="bg-fixed w-full bg-center bg-cover min-h-[110vh] relative"
      style={{
        backgroundImage: "url('/images/satoru.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 0.8,
        backgroundPositionY: `calc(120% + ${offsetY}px)`
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col mt-12 pt-60">
        <h5 className="mb-8 font-semibold shadow-lg font-sm font-[font14] tracking-widest pl-[31vh]">
          E X P E R I E N C E
        </h5>

        <AnimatedText className="text-[9vh] font-[font9] tracking-tight cursor-expand mb-20 pl-[31vh] tracking-tighter w-[77%] font-semibold leading-[4.3vw] text-white">
          Over  <span className="text-[#EB5939] font-[font11] tracking-wide">two years</span>of Experience in interactive design and working with some of the most talented people in the business.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Experience;
