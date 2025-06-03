import React, { useEffect, useRef } from 'react'

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-y-0');
          entry.target.classList.remove('translate-y-full');
        }
      });
    }, { threshold: 0.1 });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      words.forEach(word => observer.observe(word));
    }

    return () => observer.disconnect();
  }, []);

  const splitText = (text, isHighlighted = false) => {
    return text.split(' ').map((word, wordIndex) => (
      <span 
        key={wordIndex} 
        className="word inline-block overflow-hidden mr-2"
      >
        <span className="block translate-y-full transition-all duration-500 ease-out [.word:hover_&]:duration-200">
          {word.split('').map((char, charIndex) => (
            <span 
              key={charIndex} 
              className={`inline-block ${charIndex % 2 === 0 ? 'text-gray-800' : 'text-gray-400'} ${isHighlighted ? '!text-[#EB5939]' : ''}`}
            >
              {char}
            </span>
          ))}
        </span>
      </span>
    ));
  };

  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      <h2 
        ref={textRef}
        className='text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]'
      >
        {splitText("I'm a")}
        <span className="word inline-block overflow-hidden">
          <span className="block translate-y-full transition-all duration-500 ease-out [.word:hover_&]:duration-200">
            <span className='text-[#EB5939]'>visually skilled</span>
          </span>
        </span>
        {splitText("interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.")}
      </h2>
    </div>
  );
}

export default About;