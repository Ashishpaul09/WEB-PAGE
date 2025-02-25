import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaRocket } from "react-icons/fa"; // Icons for Careers and Join Us
import bg1 from "../assets/bg_1.jpg";
import bg2 from "../assets/bg_2.jpg";
import bg3 from "../assets/bg_3.jpg";

const slides = [
  {
    image: bg1,
    heading: "THE NEXT BIG THING",
    subheading: "WHERE YOU NEED TO BE...",
  },
  {
    image: bg2,
    heading: "THE GAME CHANGERS",
    subheading: "PACE WITH US",
  },
  {
    image: bg3,
    heading: "JOIN OUR SUCCESS STORY",
    subheading: "BUILD THE FUTURE TOGETHER",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showJoinUs, setShowJoinUs] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setShowJoinUs(false);
      setTimeout(() => setShowJoinUs(true), 1200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Funny animation variants for heading
  const headingVariants = {
    initial: {
      opacity: 0,
      y: 100,
      scale: 0.5,
      rotate: Math.random() * 180 - 90,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 1.5,
      rotate: Math.random() * 180 - 90,
      transition: { duration: 0.6, ease: "backIn" },
    },
  };

  // Funny animation variants for subheading
  const subheadingVariants = {
    initial: { opacity: 0, x: "-150%", skewX: 30 },
    animate: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: { duration: 0.8, delay: 0.3, type: "spring", stiffness: 150, damping: 8 },
    },
    exit: { opacity: 0, x: "150%", skewX: -30, transition: { duration: 0.6 } },
  };

  // Icon animation variants for Careers button
  const careersIconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
      scale: [1, 1.3, 1],
      rotate: [0, 15, -15, 0],
      transition: { duration: 0.4, repeat: Infinity, ease: "easeInOut" },
    },
    tap: {
      scale: 0.8,
      rotate: 360,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  // Faster icon animation variants for Join Us button
  const joinUsIconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.2, ease: "easeOut" }, // Faster initial pop-in
    },
    hover: {
      scale: [1, 1.4, 1], // Slightly bigger pulse
      rotate: [0, 20, -20, 0], // Faster, wilder wobble
      transition: { duration: 0.25, repeat: Infinity, ease: "easeInOut" }, // Quicker hover
    },
    tap: {
      scale: 0.7, // More dramatic squash
      rotate: 720, // Double spin for extra fun
      transition: { duration: 0.15, ease: "easeOut" }, // Super fast tap
    },
  };

  return (
    <section
      className="h-screen flex flex-col justify-center items-start px-6 md:px-16 text-left bg-cover bg-center relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="z-10 max-w-3xl space-y-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[currentSlide].heading}
            variants={headingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg"
            whileHover={{
              scale: 1.05,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.3, repeat: Infinity },
            }}
          >
            {slides[currentSlide].heading}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={slides[currentSlide].subheading}
            variants={subheadingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-lg md:text-2xl text-gray-200 mb-8 drop-shadow-md"
          >
            {slides[currentSlide].subheading}
          </motion.p>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          {currentSlide === 0 && (
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.6 }}
              whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 400, damping: 15 } }}
              whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <motion.span
                variants={careersIconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
              >
                <FaBriefcase />
              </motion.span>
              <span>Careers</span>
            </motion.button>
          )}

          {showJoinUs && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 5, delay: 0.8 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(12, 77, 182, 0.8)" }}
              whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <motion.span
                variants={joinUsIconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
              >
                <FaRocket />
              </motion.span>
              <span>Join Us</span>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
