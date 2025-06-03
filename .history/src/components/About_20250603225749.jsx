import React, { useEffect } from 'react';

const words = `I'm a visually skilled interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.`.split(' ');

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll('.word-reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>

      <div className='flex flex-wrap w-[77%]'>
        {words.map((word, i) => (
          <span
            key={i}
            className={`word-reveal relative overflow-hidden text-[9vh] font-semibold leading-[4.5vw] mr-3 opacity-0 translate-y-10 transition-all duration-700 delay-[${i * 100}ms]`}
          >
            <span className='relative z-10'>
              {word === 'visually' ? (
                <span className='text-[#EB5939]'>{word}</span>
              ) : (
                word
              )}
            </span>
            <span className='absolute top-0 left-0 w-full h-full bg-[#EB5939] translate-y-full transition-transform duration-700 ease-in-out z-0'></span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default About;
