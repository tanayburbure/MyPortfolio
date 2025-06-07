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
        opacity: 0.7,
        backgroundPositionY: `calc(120% + ${offsetY}px)`
      }}
    >
      {/* Background overlay (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Social Icons */}
      <div className="text-[2.5vh] z-50 absolute top-[67vh] left-12 flex flex-col gap-6">
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <IoLogoFacebook />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col mt-12 pt-60">
        <h5 className="text-sm font-semibold mb-6 pl-[31vh] text-white">
          E X P E R I E N C E
        </h5>

        <AnimatedText className="text-[9vh] mb-20 pl-[31vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-white">
          Over <span className="text-[#EB5939]">two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Experience;
