import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Cards() {
  const ref = useRef(null);
  const { scrollYProgress: cards } = useScroll({ target: ref, offset: ["start 30%", "end 90%"] });
  const { scrollYProgress: texts } = useScroll({ target: ref, offset: ["start 65%", "end 220%"] });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 765);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slowScrollProgress = useTransform(cards, (value) => value * 0.9);

  const card1X = useTransform(slowScrollProgress, [0, 0.04, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.22, 0.24, 0.26, 0.3], [-380 ,-300, -250, -225, -200, -175, -150, -125, -100, -50, -30, 0]);
  const card1Rotate = useTransform(slowScrollProgress, [0.2, 0.3], [-10, 0]);
  const card1Opacity = useTransform(slowScrollProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1], [0, 0.3, 0.7, 0.75, 1, 1, 1]);

  const card2X = useTransform(slowScrollProgress, [0.3, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42, 0.44, 0.46, 0.48, 0.5 , 0.52, 0.54], [300, 275, 250, 225, 200 ,175, 150, 125, 100, 75 , 50 , 25, 0]);
  const card2Rotate = useTransform(slowScrollProgress, [0.3, 0.5], [15, 0]);
  const card2Opacity = useTransform(slowScrollProgress, [0, 0.2, 0.3, 0.5, 0.6], [0, 0.3, 0.5, 0.8, 1]);

  const card3X = useTransform(slowScrollProgress, [0.5, 0.6], [-150, 0]);
  const card3Rotate = useTransform(slowScrollProgress, [0.4, 0.8], [-10, 0]);
  const card3Opacity = useTransform(slowScrollProgress, [0, 0.5, 0.6, 0.7,  1], [0, 0.3, 0.6, 0.9, 1]);

  const card4X = useTransform(cards, [0.6, 0.63, 0.66, 0.7, 0.73, 0.76, 0.8, 0.83, 0.86, 0.9], [300, 275, 250, 200, 175, 125, 100, 75, 50, 0]);
  const card4Rotate = useTransform(cards, [0.6, 0.9], [11, 0]);
  const card4Opacity = useTransform(cards, [0, 0.5, 0.7, 0.8, 0.9, 1], [0, 0, 0.3, 0.6, 0.9, 1]);

  if (typeof window !== "undefined") {
    document.body.style.overflow = "scroll"; 
    document.body.style.scrollBehavior = "smooth"; 
  }

  const text = "We prove, design,implement, and market your idea with absolute transparency and efficiency in it's core";
  const letters = text.split(" ");

  return (
    <div ref={ref} className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-6 sm:px-10 py-16 overflow-hidden">
      <h1 className="text-center text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold max-w-xl lg:max-w-2xl leading-snug">
        {letters.map((letter, i) => {
          return (
            <motion.span 
              key={i}
              className="inline-block mr-1"
              style={{
                opacity: !isMobile ? useTransform(texts, [i / letters.length, (i + 1) / letters.length], [0, 1]) : useTransform(texts, [0, 0.05, 0.1, 0.15, 0.2, 0.25, 1], [0.1, 0.2, 0.4, 0.6, 0.8, 1 ,1]),
                transition: "opacity 0.3s ease"
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 md:gap-x-10 mt-30 max-w-6xl w-full px-2">  
        <motion.div
          className="bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:h-[320px]"
          style={{
            x: !isMobile ? card1X : 0, 
            rotate: !isMobile ? card1Rotate : 0, 
            opacity: !isMobile ? card1Opacity : 1
          }}
        >
          <span className="text-3xl sm:text-4xl font-bold">$300m</span>
          <p className="text-sm sm:text-base">In funding clients raised owing to our design work</p>
        </motion.div>

        <motion.div
          className="bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:h-[320px] sm:translate-y-20"
          style={{
            x: !isMobile ? card2X : 0, 
            rotate: !isMobile ? card2Rotate : 0, 
            opacity: !isMobile ? card2Opacity : 1
          }}
        >
          <span className="text-3xl sm:text-4xl font-bold">60+</span>
          <p className="text-sm sm:text-base">World’s biggest international design awards won</p>
        </motion.div>

        <motion.div
          className="bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:mt-3 sm:h-[320px] sm:-translate-y-10"
          style={{
            x: !isMobile ? card3X : 0, 
            rotate: !isMobile ? card3Rotate : 0, 
            opacity: !isMobile ? card3Opacity : 1
          }}
        >
          <span className="text-3xl sm:text-4xl font-bold">100M</span>
          <p className="text-sm sm:text-base">Active users experiencing our design every day via products we made</p>
        </motion.div>

        <motion.div
          className="bg-[#111] p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-[300px] sm:mt-12 sm:h-[320px]"
          style={{
            x: !isMobile ? card4X : 0, 
            rotate: !isMobile ? card4Rotate : 0, 
            opacity: !isMobile ? card4Opacity : 1
          }}
        >
          <span className="text-3xl sm:text-4xl font-bold">24%</span>
          <p className="text-sm sm:text-base">Of total marketing budget converted into sales with our branding & mechanics</p>
        </motion.div>
      </div>
    </div>
  );
}
