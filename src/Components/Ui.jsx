import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Ui = () => {
  const containerRef = useRef(null);
  const box2Ref = useRef(null);
  const box4Ref = useRef(null);
  const box6Ref = useRef(null);

  const { scrollYProgress: scrollBox2 } = useScroll({
    target: box2Ref,
    offset: ["start end", "center center", "end start"],
  });

  const { scrollYProgress: scrollBox4 } = useScroll({
    target: box4Ref,
    offset: ["start end", "center center", "end start"],
  });

  const { scrollYProgress: scrollBox6 } = useScroll({
    target: box6Ref,
    offset: ["start end", "center center", "end start"],
  });

  const rotateBox2 = useTransform(scrollBox2, [0, 0.5, 1], [-15, 0, 15]);
  const rotateBox4 = useTransform(scrollBox4, [0, 0.5, 1], [-25, 0, 25]);
  const rotateBox6 = useTransform(scrollBox6, [0, 0.5, 1], [-35, 0, 0]);

  const opacityBox2 = useTransform(scrollBox2, [0, 0.5, 1], [0, 1, 0]);
  const opacityBox4 = useTransform(scrollBox4, [0, 0.5, 1], [0, 1, 0]);
  const opacityBox6 = useTransform(scrollBox6, [0, 0.5, 1], [0, 1, 1]);

  const yBox2 = useTransform(scrollBox2, [0, 0.5, 1], [100, 0, 100]);
  const yBox4 = useTransform(scrollBox4, [0, 0.5, 1], [180, 0, 100]);
  const yBox6 = useTransform(scrollBox6, [0, 0.5, 1], [280, 0, 1]);

  return (
    <motion.div
      ref={containerRef}
      className="w-screen h-[600vh] overflow-x-hidden overflow-y-hidden flex items-center justify-center bg-black"
    >
      <motion.div className="grid grid-cols-12 gap-x-4 gap-y-16 w-full px-0">
      <div className="col-span-5 flex flex-col justify-center items-start text-white space-y-6">
          <h2 className="text-4xl font-bold">Pre-seed Bootstrapped</h2>
          <p className="text-lg leading-relaxed">
            This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it’s worth the time and resources.
          </p>
          <p className="text-lg font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p>
        </div>
        <motion.div
          ref={box2Ref}
          className="col-span-7 bg-green-500 h-[100vh] w-full p-10 text-white text-center rounded-lg shadow-lg flex items-center justify-center"
          style={{
            rotate: rotateBox2,
            opacity: opacityBox2,
            y: yBox2,
            zIndex: 1,
          }}
        >
          Box 2
        </motion.div>

        <div className="col-span-5 flex flex-col justify-center items-start text-white space-y-6">
          <h2 className="text-4xl font-bold">Pre-seed Bootstrapped</h2>
          <p className="text-lg leading-relaxed">
            This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it’s worth the time and resources.
          </p>
          <p className="text-lg font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p>
        </div>
        <motion.div
          ref={box4Ref}
          className="col-span-7 bg-red-500 h-[100vh] w-full p-10 text-white text-center rounded-lg shadow-lg flex items-center justify-center"
          style={{
            rotate: rotateBox4,
            opacity: opacityBox4,
            y: yBox4,
            zIndex: 2,
          }}
        >
          Box 4
        </motion.div>

        <div className="col-span-5 flex flex-col justify-center items-start text-white space-y-6">
          <h2 className="text-4xl font-bold">Pre-seed Bootstrapped</h2>
          <p className="text-lg leading-relaxed">
            This is POC stage. You have a hypothetical product idea, you want it done & tested properly to know whether it’s worth the time and resources.
          </p>
          <p className="text-lg font-semibold">
            More than <span className="text-green-400">40%</span> of our clients on this stage get initial investment for MVPs.
          </p>
        </div>
        <motion.div
          ref={box6Ref}
          className="col-span-7 bg-blue-500 h-[100vh] w-full p-10 text-white text-center rounded-lg shadow-lg flex items-center justify-center"
          style={{
            rotate: rotateBox6,
            opacity: opacityBox6,
            y: yBox6,
            zIndex: 3,
          }}
        >
          Box 6
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Ui;
