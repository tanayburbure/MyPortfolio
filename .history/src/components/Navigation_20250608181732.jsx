import React, { useRef, useState, useEffect } from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import MagneticWrapper from './MagneticWrapper';

function Navigation() {
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Optional: Load saved state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('isMusicPlaying');
    if (savedState === 'true') {
      setIsMusicPlaying(true);
      audioRef.current?.play().catch(() => { });
    }
  }, []);

  // Play or pause audio on state change
  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(() => { });
      } else {
        audioRef.current.pause();
      }
    }
    localStorage.setItem('isMusicPlaying', isMusicPlaying.toString());
  }, [isMusicPlaying]);

  const toggleMusic = () => {
    setIsMusicPlaying(prev => !prev);
  };

  return (
    <div className='relative z-50 fixed h-full w-screen no-mask'>
      <audio ref={audioRef} src="/video/relaxed.mp3" loop />

      <div className='left absolute top-12 left-12'>
        <MagneticWrapper>
          <img
            className='w-12'
            src={`${import.meta.env.BASE_URL}images/logo.svg`}
            alt="Logo"
          />
        </MagneticWrapper>
      </div>

      <div className='absolute top-12 right-16 flex flex-col'>
        <button className='nav-button no-mask'>About</button>
        <button className='nav-button no-mask'>Work</button>
        <button className='nav-button no-mask'>Contact</button>
      </div>

      <div className="text-[2.5vh] text-[#EB5939] z-50 absolute top-[70vh] gap-8 left-[7.5vh] flex flex-col">
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

      <div className='absolute top-[84vh] right-16 text-[2.4vh]'>
  <button
    className="no-mask"
    onClick={toggleMusic}
    style={{
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      lineHeight: 1.2,
      width: "1.2em", // Fixed width
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <span>Sound</span>
    <span style={{
      fontWeight: 'medium',
      width: "1em", // Fixed width for ON/OFF
      textAlign: "center",
      visibility: "hidden", // Hidden measurement
      height: 0, // Hidden measurement
      overflow: "hidden", // Hidden measurement
      position: "relative", // For absolute child
    }}>
      ON {/* Hidden measurement */}
    </span>
    <span style={{
      fontWeight: 'semibold',
      position: "absolute",
      marginTop: "5.2em", // Position below "Sound"
    }}>
      {isMusicPlaying ? 'ON' : 'OFF'}
    </span>
  </button>
</div>
    </div>
  );
}

export default Navigation;
