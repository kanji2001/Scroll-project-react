import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Rotation = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const thirdDivRef = useRef(null);

  const { scrollYProgress: firstDivProgress } = useScroll({
    target: firstDivRef,
    offset: ["start 88%", "end 22%"],
    layoutEffect: false,
  });
  const { scrollYProgress: secondDivProgress } = useScroll({
    target: secondDivRef,
    offset: ["start 88%", "end 12%"],
    layoutEffect: false,
  });
  const { scrollYProgress: thirdDivProgress } = useScroll({
    target: thirdDivRef,
    offset: ["start 88%", "end 12%"],
    layoutEffect: false,
  });
  
  const firstH2Opacity = useTransform(firstDivProgress, [0, 0.05, 0.1, 0.15, 0.2, 0.7, 0.7, 0.8, 1], [0, 0.01, 0.2, 0.3,  1, 1, 0.7, 0.1, 0]);
  const firstPOpacity = useTransform(firstDivProgress, [0, 0.05, 0.1, 0.15, 0.25, 0.7, 0.8, 0.9, 1], [0, 0, 0, 0.1, 1, 1, 0.6, 0.1, 0]);
  const firstP2Opacity = useTransform(firstDivProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.7, 0.9, 0.93, 0.96 , 1], [0, 0, 0, 0.1, 1, 0.9, 0.9, 0.4, 0.2, 0.05]);

  const secondH2Opacity = useTransform(secondDivProgress, [0, 0.05, 0.1, 0.15, 0.2, 0.7, 0.7, 0.8, 1], [0, 0.01, 0.2, 0.3,  1, 1, 0.7, 0.1, 0]);
  const secondPOpacity = useTransform(secondDivProgress, [0, 0.05, 0.1, 0.15, 0.25, 0.7, 0.8, 0.9, 1], [0, 0, 0, 0.1, 1, 1, 0.2, 0, 0]);
  const secondP2Opacity = useTransform(secondDivProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.8, 0.9, 0.93 , 1], [0, 0, 0, 0.1, 1, 1, 0.9, 0.2, 0.1, 0.05]);

  const thirdH2Opacity = useTransform(thirdDivProgress, [0, 0.05, 0.1, 0.15, 0.2, 0.6, 0.7, 0.8, 0.9], [0, 0.01, 0.2, 0.3,  1, 1, 0.7, 0.1, 0]);
  const thirdPOpacity = useTransform(thirdDivProgress, [0, 0.05, 0.1, 0.15, 0.25, 0.7, 0.85, 0.9, 1], [0, 0, 0, 0.1, 1, 1, 0.1, 0.1, 0]);
  const thirdP2Opacity = useTransform(thirdDivProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.7, 0.8, 0.93, 0.96 , 1], [0, 0, 0, 0.1, 1, 0.9, 0.9, 0, 0.2, 0.05]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 765);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 765);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress: scrollDiv1 } = useScroll({
    target: div1Ref,
    offset: ["start end", "center center", "end start"],
  });

  const { scrollYProgress: scrollDiv2 } = useScroll({
    target: div2Ref,
    offset: ["start end", "center center", "end start"],
  });

  const { scrollYProgress: scrollDiv3 } = useScroll({
    target: div3Ref,
    offset: ["start end", "center center", "end start"],
  });

  const rotateDiv1 = useTransform(
    scrollDiv1,
    [0, 0.5, 1],
    isMobile ? [0, 0, 0] : [-15, 0, 15]
  );
  const rotateDiv2 = useTransform(
    scrollDiv2,
    [0, 0.5, 1],
    isMobile ? [0, 0, 0] : [-20, 0, 20]
  );
  const rotateDiv3 = useTransform(
    scrollDiv3,
    [0, 0.5, 1],
    isMobile ? [0, 0, 0] : [-25, 0, 0]
  );

  const opacityDiv1 = useTransform(
    scrollDiv1,
    [0, 0.5, 0.9],
    isMobile ? [1, 1, 1] : [0, 1, 0]
  );
  const opacityDiv2 = useTransform(
    scrollDiv2,
    [0.2, 0.5, 0.9],
    isMobile ? [1, 1, 1] : [0, 1, 0]
  );
  const opacityDiv3 = useTransform(
    scrollDiv3,
    [0.2, 0.5, 0.9],
    isMobile ? [1, 1, 1] : [0, 1, 1]
  );

  return (
    <motion.div
      ref={containerRef}
      className="w-screen h-[300vh] lg:h-[400vh] md:h-[360vh] flex flex-col items-center justify-center bg-black overflow-hidden no-scrollbar px-0"
    >
      <motion.div className="grid grid-cols-1 md:grid-cols-12 w-full px-0">
        {/* First div */}
        <motion.div ref={firstDivRef} className="md:col-span-6 h-auto md:h-[60vh] lg:h-[70vh] flex flex-col justify-center items-start text-white space-y-6 px-4 py-4 md:py-0 md:px-10 order-2 md:order-1">
        <motion.h2 className="text-3xl md:text-xl lg:text-3xl font-bold" style={{ opacity: firstH2Opacity }}>
            Pre-seed Bootstrapped
          </motion.h2>
          <motion.p className="text-base md:text-sm lg:text-xl leading-relaxed" style={{ opacity: firstPOpacity }}>
            This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it’s worth the time and resources.
          </motion.p>
          <motion.p className="text-base md:text-sm lg:text-xl font-semibold" style={{opacity : firstP2Opacity}} >
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </motion.p>
        </motion.div>
        <div className="md:col-span-6 h-auto lg:h-[70vh] md:h-[60vh] bg-[#171717] shadow-2xl relative flex items-center justify-center md:justify-end py-6 md:py-0 px-4 md:px-0 order-1 md:order-2">
          <motion.div
            ref={div1Ref}
            className="w-full md:w-[94%] lg:w-[92%] h-[250px] md:h-[70%] lg:h-[75%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white text-lg lg:text-3xl md:text-xl font-semibold md:absolute md:-right-6 lg:-right-12 "
            style={{ rotate: rotateDiv1, opacity: opacityDiv1 }}
          >
            The Cross-Chain Stablecoin
          </motion.div>
        </div>

        {/* Second div */}
        <motion.div ref={secondDivRef} className="md:col-span-6 h-auto lg:h-[70vh] md:h-[60vh] flex flex-col justify-center items-start text-white space-y-6 px-4 py-4 md:py-0 md:px-10 order-3 md:order-4">
        <motion.h2 className="text-3xl md:text-2xl lg:text-3xl font-bold" style={{ opacity: secondH2Opacity }}>
            Seed Stage
          </motion.h2>
          <motion.p className="text-base md:text-md lg:text-xl leading-relaxed" style={{ opacity: secondPOpacity }}>
            Your idea is validated, and you're looking for funding to build an MVP that attracts investors and early adopters.
          </motion.p>
          <motion.p className="text-base md:text-sm lg:text-xl font-semibold" style ={{opacity: secondP2Opacity}}>
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </motion.p>
        </motion.div>
        <div className="md:col-span-6 h-auto lg:h-[70vh] md:h-[60vh] bg-[#171717] shadow-2xl relative flex items-center justify-center md:justify-end py-6 md:py-0 px-4 md:px-0 order-2 md:order-4">
          <motion.div
            ref={div2Ref}
            className="w-full md:w-[94%] lg:w-[92%] h-[250px] md:h-[70%] lg:h-[75%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white text-lg lg:text-3xl md:text-xl font-semibold md:absolute md:-right-6 lg:-right-12 "
            style={{ rotate: rotateDiv2, opacity: opacityDiv2 }}
          >
            The Cross-Chain Stablecoin
          </motion.div>
        </div>

        {/* Third div */}
        <motion.div ref={thirdDivRef}  className="md:col-span-6 h-auto lg:h-[70vh] md:h-[60vh] flex flex-col justify-center items-start text-white space-y-6 px-4 py-4 md:py-0 md:px-10 order-5 md:order-6">
        <motion.h2 className="text-3xl md:text-2xl lg:text-3xl font-bold" style={{ opacity: thirdH2Opacity }}>
            Series A
          </motion.h2>
          <motion.p className="text-base md:text-md lg:text-xl leading-relaxed" style={{ opacity: thirdPOpacity }}>
            Your MVP has traction, and you’re raising funds to scale operations and expand market reach.
          </motion.p>
          <motion.p className="text-base md:text-sm lg:text-xl font-semibold" style={{opacity : thirdP2Opacity}}>
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </motion.p>
        </motion.div>
        <div className="md:col-span-6 h-auto lg:h-[70vh] md:h-[60vh] bg-[#171717] shadow-2xl relative flex items-center justify-center md:justify-end py-6 md:py-0 px-4 md:px-0 order-4 md:order-6">
          <motion.div
            ref={div3Ref}
            className="w-full md:w-[94%] lg:w-[92%] h-[250px] md:h-[70%] lg:h-[75%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white lg:text-3xl md:text-xl font-semibold md:absolute md:-right-6 lg:-right-12 "
            style={{ rotate: rotateDiv3, opacity: opacityDiv3 }}
          >
            The Cross-Chain Stablecoin
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Rotation;
