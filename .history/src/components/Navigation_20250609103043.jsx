import React, { useRef, useState, useEffect } from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import MagneticWrapper from './MagneticWrapper';

function Navigation() {
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollTargets = {
    About: isLargeScreen ? 0 : 176,
    Work: isLargeScreen ? 187 : 93,
    Contact: isLargeScreen ? 645 : 660
  };

  useEffect(() => {
    const savedState = localStorage.getItem('isMusicPlaying');
    if (savedState !== null) {
      setIsMusicPlaying(savedState === 'true');
    } else {
      audioRef.current?.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      isMusicPlaying ? audioRef.current.play().catch(() => {}) : audioRef.current.pause();
    }
    localStorage.setItem('isMusicPlaying', isMusicPlaying.toString());
  }, [isMusicPlaying]);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMusic = () => {
    setIsMusicPlaying(prev => !prev);
  };

  const smoothScroll = (target) => {
    const startPosition = window.pageYOffset;
    const distance = target - startPosition;
    const duration = 1000;
    let startTime = null;

    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handleScroll = (section) => {
    const percentage = scrollTargets[section];
    const target = window.innerHeight * (percentage / 100);
    smoothScroll(target);
  };

  // Track active section
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      const aboutY = height * (scrollTargets.About / 100);
      const workY = height * (scrollTargets.Work / 100);
      const contactY = height * (scrollTargets.Contact / 100);

      if (scrollY >= contactY - 100) {
        setActiveSection("Contact");
      } else if (scrollY >= workY - 100) {
        setActiveSection("Work");
      } else {
        setActiveSection("About");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLargeScreen]);

  return (
    <div className='relative z-50 fixed h-full w-screen'>
      <audio ref={audioRef} src="/music/lovestory.mp3" loop />

      <div className='left absolute top-12 left-12'>
        <MagneticWrapper>
          <img
            className='w-12'
            src={`${import.meta.env.BASE_URL}images/logo.svg`}
            alt="Logo"
          />
        </MagneticWrapper>
      </div>

      <div className='absolute top-12 right-16 flex flex-col font-[font9] text-lg tracking-tight'>
        {["About", "Work", "Contact"].map((item) => (
          <button
            key={item}
            className={`nav-button no-mask transition-colors duration-300 ${
              activeSection === item ? "text-[#EB5939] font-semibold" : "text-[#958C7D] font-normal"
            }`}
            onClick={() => handleScroll(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="text-[2.5vh] text-[#EB5939] z-50 absolute top-[70vh] gap-8 left-[7.5vh] flex flex-col font-[font8]">
        <MagneticWrapper>
          <a href="https://www.facebook.com/tanay.burbure/" target="_blank" rel="noopener noreferrer" >
            <IoLogoFacebook />
          </a>
        </MagneticWrapper>
        <MagneticWrapper>
          <a href="https://www.instagram.com/tanay_burbure/" target="_blank" rel="noopener noreferrer" >
            <AiFillInstagram />
          </a>
        </MagneticWrapper>
        <MagneticWrapper>
          <a href="https://t.me/Tanayburbure" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
        </MagneticWrapper>
        <MagneticWrapper>
          <a href="https://www.linkedin.com/in/tanay-burbure-80401a271/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin />
          </a>
        </MagneticWrapper>
      </div>

      <div className='absolute top-[84vh] right-16 text-[2.5vh] font-[font9]'>
        <button
          className="no-mask"
          onClick={toggleMusic}
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            lineHeight: 1.2,
            width: "1.1em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className='text-[#2F2D29] hover:text-[#B7AB98]'>Sound</span>
          <span style={{
            fontWeight: 'medium',
            width: "1em",
            textAlign: "center",
            visibility: "hidden",
            height: 0,
            overflow: "hidden",
            position: "relative",
          }}>
            ON
          </span>
          <span style={{
            fontWeight: 'semibold',
            position: "absolute",
            marginTop: "5.2em",
          }}>
            {isMusicPlaying ? 'on' : 'off'}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
