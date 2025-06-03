import React, { useEffect } from 'react'

const words = `I'm a visually skilled interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.`.split(' ')

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.5 }
    )

    const elements = document.querySelectorAll('.word-wrapper')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="h-screen pl-[31vh] pb-4 flex flex-col justify-center">
      <h5 className="text-xm font-semibold mb-6">A B O U T &nbsp; M E</h5>

      <div className="flex flex-wrap w-[77%] text-[9vh] font-semibold leading-[4.5vw]">
        {words.map((word, i) => (
          <span
            key={i}
            className="word-wrapper relative overflow-hidden mr-4 opacity-0 transition-all duration-700 delay-[150ms]"
          >
            <span className="block translate-y-[100%] transition-transform duration-700 word-inner">
              <span className="relative z-10 text-black">
                {word === 'visually' ? (
                  <span className="text-[#EB5939]">{word}</span>
                ) : (
                  word
                )}
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-[#EB5939] z-0 origin-left scale-x-100 transition-transform duration-700 shade"></span>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default About
