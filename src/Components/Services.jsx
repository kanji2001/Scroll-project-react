import { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";

export default function Services() {
  const scrollRef = useRef(null);

  const text = "We prove, design, implement, and market your idea with absolute transparency and efficiency in its core";
  const letters = text.split(" ");
  const [hoverStyles, setHoverStyles] = useState({});

  useEffect(() => {
    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, {
        damping: 0.05,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
      });

      scrollRef.current.style.overflowY = 'hidden';   

      return () => {
        scrollbar.destroy();
      };
    }
  }, []);

  const handleMouseMove = (e, id) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    // console.log(x)
    const y = e.clientY - top;
    // console.log(y)
    setHoverStyles((prev) => ({
      ...prev,
      [id]: {
        backgroundImage: `radial-gradient(circle 650px at ${x}px ${y}px, rgba(255, 255, 255, 0.08), transparent 20%)`,
        transition: "background-image 0.3s ease-out",
      },
    }));
  };

  const handleMouseLeave = (id) => {
    setHoverStyles((prev) => ({
      ...prev,
      [id]: {
        transition: "background-image 0.3s ease-in",
      },
    }));
  };

  return (
    
    <div id="smooth-wrapper" ref={scrollRef} className="w-full h-screen overflow-hidden">
      <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-6 sm:px-10 py-16">
        <h1 className="text-center text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold max-w-xl lg:max-w-2xl leading-snug">
          {letters.map((letter, i) => (
            <span key={i} className="inline-block mr-2">{letter}</span>
          ))}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 md:gap-x-10 mt-30 max-w-6xl w-full px-2">
          <div
            className="card bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:h-[320px] relative transition-all"
            style={hoverStyles[0]}
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <span className="text-3xl sm:text-4xl font-bold">$300m</span>
            <p className="text-sm sm:text-base">In funding clients raised owing to our design work</p>
          </div>

          <div
            className="card bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:h-[320px] relative transition-all"
            style={hoverStyles[1]}
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <span className="text-3xl sm:text-4xl font-bold">60+</span>
            <p className="text-sm sm:text-base">World’s biggest international design awards won</p>
          </div>

          <div
            className="card bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:h-[320px] relative transition-all"
            style={hoverStyles[2]}
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <span className="text-3xl sm:text-4xl font-bold">100M</span>
            <p className="text-sm sm:text-base">Active users experiencing our design every day via products we made</p>
          </div>

          <div
            className="card bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:h-[320px] relative transition-all"
            style={hoverStyles[3]}
            onMouseMove={(e) => handleMouseMove(e, 3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <span className="text-3xl sm:text-4xl font-bold">24%</span>
            <p className="text-sm sm:text-base">Of total marketing budget converted into sales with our branding & mechanics</p>
          </div>

          <div
            className="card bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:h-[320px] relative transition-all"
            style={hoverStyles[4]}
            onMouseMove={(e) => handleMouseMove(e, 4)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
            <span className="text-3xl sm:text-4xl font-bold">24%</span>
            <p className="text-sm sm:text-base">Of total marketing budget converted into sales with our branding & mechanics</p>
          </div>
          <div
            className="card bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:h-[320px] relative transition-all"
            style={hoverStyles[5]}
            onMouseMove={(e) => handleMouseMove(e, 5)}
            onMouseLeave={() => handleMouseLeave(5)}
          >
            <span className="text-3xl sm:text-4xl font-bold">24%</span>
            <p className="text-sm sm:text-base">Of total marketing budget converted into sales with our branding & mechanics</p>
          </div>
        </div>
      </div>
    </div>
  );
}
