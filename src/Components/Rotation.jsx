import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Rotation = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  const { scrollYProgress: scrollDiv1 } = useScroll({
    target: div1Ref,
    offset: ["start end", "center center", "end start"]
  })  

  const { scrollYProgress: scrollDiv2 } = useScroll({
    target: div2Ref,
    offset: ["start end", "center center", "end start"]
  })

  const { scrollYProgress: scrollDiv3 } = useScroll({
    target: div3Ref,
    offset: ["start end", "center center", "end start"]
  })

  const rotateDiv1 = useTransform(scrollDiv1, [0, 0.5, 1], [-15, 0, 15])
  const rotateDiv2 = useTransform(scrollDiv2, [0, 0.5, 1], [-20, 0, 20])
  const rotateDiv3 = useTransform(scrollDiv3, [0, 0.5, 1], [-25, 0, 25])

  const opacityDiv1 = useTransform(scrollDiv1, [0, 0.5, 0.9], [0, 1, 0])
  const opacityDiv2 = useTransform(scrollDiv2, [0.2, 0.5, 0.9], [0, 1, 0])
  const opacityDiv3 = useTransform(scrollDiv3, [0.2, 0.5, 0.9], [0, 1, 1])

 

  return (
    <motion.div
      ref={containerRef}
      className="w-screen h-[300vh] flex flex-col items-center justify-center bg-black overflow-hidden no-scrollbar"
    >
      <motion.div className="grid grid-cols-12  w-full px-0">
        {/* Pre-seed Bootstrapped Section */}
        <div className="col-span-6 h-[80vh] flex flex-col justify-center items-start text-white space-y-6">
          <h2 className="text-4xl font-bold">Pre-seed Bootstrapped</h2>
          <p className="text-lg leading-relaxed">
            This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it’s worth the time and resources.
          </p>
          <p className="text-lg font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-span-6 h-[80vh] bg-gray-700 shadow-2xl relative flex items-center justify-end">
          <motion.div
            ref={div1Ref}
            className="w-[93%] h-[68%] bg-gradient-to-r from-gray-900 rounded-2xl via-gray-800 to-black  shadow-lg flex items-center justify-center text-white text-2xl font-semibold absolute -right-10 "
            style={{ rotate: rotateDiv1, opacity: opacityDiv1 }}
          >
            The Cross-Chain Stablecoin
          </motion.div>
        </div>

        <div className="col-span-6 h-[80vh] flex flex-col justify-center items-start text-white space-y-6">
          <h2 className="text-4xl font-bold">Pre-seed Bootstrapped</h2>
          <p className="text-lg leading-relaxed">
            This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it’s worth the time and resources.
          </p>
          <p className="text-lg font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-span-6 h-[80vh] bg-gray-700  shadow-2xl relative flex items-center justify-end">
          <motion.div
            ref={div2Ref}
            className="w-[93%] h-[68%] bg-gradient-to-r from-gray-900 rounded-2xl via-gray-800 to-black  shadow-lg flex items-center justify-center text-white text-2xl font-semibold absolute -right-13"
            style={{ rotate: rotateDiv2, opacity: opacityDiv2 }}
          >
            The Cross-Chain Stablecoin
          </motion.div>
        </div>

        <div className="col-span-6 h-[80vh] flex flex-col justify-center items-start text-white space-y-6">
          <h2 className="text-4xl font-bold">Pre-seed Bootstrapped</h2>
          <p className="text-lg leading-relaxed">
            This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it’s worth the time and resources.
          </p>
          <p className="text-lg font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-span-6 h-[80vh] bg-gray-700  shadow-2xl relative flex items-center justify-end">
          <motion.div
            ref={div3Ref}
            className="w-[93%] h-[68%] bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl font-semibold absolute -right-10"
            style={{ rotate: rotateDiv3, opacity: opacityDiv3, }}
          >
            The Cross-Chain Stablecoin
          </motion.div>
        </div>

      </motion.div>

    </motion.div>
  );
};

export default Rotation;
