'use client';
import MaskedTextReveal from './MaskedTextReveal'; // Adjust path

const HoverMaskText = () => {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <MaskedTextReveal>
        A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
      </MaskedTextReveal>

      <div className="flex h-full w-full items-center justify-center text-[#afa18f] text-[64px] leading-[66px] cursor-default">
        <p className="w-[1000px] p-10">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  );
};

export default HoverMaskText;
