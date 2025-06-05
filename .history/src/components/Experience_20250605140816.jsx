import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.set(videoRef.current, { scale: 0.7, transformOrigin: "center center" });

    gsap.to(videoRef.current, {
      scale: 1,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        end: "top 10%",
        scrub: 5,
      },
    });
  }, []);

  return (
    <div className="pt-16 mb-12 flex justify-center items-center">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./video/reel.mp4" type="video/mp4" />
        Your browser doesn't support videos
      </video>
    </div>
  );
};

export default VideoComponent;
