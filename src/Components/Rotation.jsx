import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Rotation = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

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
      className="w-screen h-[300vh] flex flex-col items-center justify-center bg-black overflow-hidden no-scrollbar px-0"
    >
      <motion.div className="grid grid-cols-1 md:grid-cols-12 w-full px-0">
        {/* First div */}
        <div className="md:col-span-6 h-auto md:h-[80vh] flex flex-col justify-center items-start text-white space-y-6 px-4 py-4 md:py-0 md:px-0 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">Pre-seed Bootstrapped</h2>
          <p className="text-base md:text-lg leading-relaxed">
            This is POC stage. You have a hypothetical product idea, you want's it done & tested properly to know whether it’s worth the time and resources.
          </p>
          <p className="text-base md:text-lg font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p>
        </div>
        <div className="md:col-span-6 h-auto md:h-[80vh] bg-[#171717] shadow-2xl relative flex items-center justify-center md:justify-end py-6 md:py-0 px-4 md:px-0 order-1 md:order-2">
          <motion.div
            ref={div1Ref}
            className="w-full md:w-[93%] h-[250px] md:h-[68%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white text-lg md:text-2xl font-semibold md:absolute md:-right-8 "
            style={{ rotate: rotateDiv1, opacity: opacityDiv1 }}
          >
            The Cross-Chain Stablecoin
          </motion.div>
        </div>

        {/* Second div */}
        <div className="md:col-span-6 h-auto md:h-[80vh] flex flex-col justify-center items-start text-white space-y-6 px-4 py-4 md:py-0 md:px-0 order-3 md:order-4">
          <h2 className="text-3xl md:text-4xl font-bold">Pre-seed Bootstrapped</h2>
          <p className="text-base md:text-lg leading-relaxed">
            This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it’s worth the time and resources.
          </p>
          <p className="text-base md:text-lg font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p>
        </div>
        <div className="md:col-span-6 h-auto md:h-[80vh] bg-[#171717] shadow-2xl relative flex items-center justify-center md:justify-end py-6 md:py-0 px-4 md:px-0 order-2 md:order-4">
          <motion.div
            ref={div2Ref}
            className="w-full md:w-[93%] h-[250px] md:h-[68%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white text-lg md:text-2xl font-semibold md:absolute md:-right-8 "
            style={{ rotate: rotateDiv2, opacity: opacityDiv2 }}
          >
            The Cross-Chain Stablecoin
          </motion.div>
        </div>

        {/* Third div */}
        <div className="md:col-span-6 h-auto md:h-[80vh] flex flex-col justify-center items-start text-white space-y-6 px-4 py-4 md:py-0 md:px-0 order-5 md:order-6">
          <h2 className="text-3xl md:text-4xl font-bold">Pre-seed Bootstrapped</h2>
          <p className="text-base md:text-lg leading-relaxed">
            This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it’s worth the time and resources.
          </p>
          <p className="text-base md:text-lg font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p>
        </div>
        <div className="md:col-span-6 h-auto md:h-[80vh] bg-[#171717] shadow-2xl relative flex items-center justify-center md:justify-end py-6 md:py-0 px-4 md:px-0 order-4 md:order-6">
          <motion.div
            ref={div3Ref}
            className="w-full md:w-[93%] h-[250px] md:h-[68%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white text-lg md:text-2xl font-semibold md:absolute md:-right-8 "
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
