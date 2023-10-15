'use client';

import Link from "next/link";
import raq from './raq.jpg';
import dti from './dti.jpg'
import Image from "next/image";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const jumbotronVariants = {
  initial: {
      opacity: 0,
    y: 20, // Move it down slightly
  },
  animate: {
      opacity: 1,
    y: 0, // Move it back to its original position
      transition: {
      duration: 1, // Animation duration in seconds
      ease: 'easeInOut', // Animation easing function
      },
  },
  };

  const DesktopImage = () => {
    return (
      <Image
        src={dti}
        alt="Desktop Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        priority
      />
    );
  };

  const MobileImage = () => {
    return (
      <Image
        src={raq}
        alt="Mobile Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        priority 
      />
    );
  };

export default function requestquote() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
      <motion.section
        className="relative bg-gray-700 bg-blend-multiply h-screen flex items-center"
        initial="initial" 
        animate="animate" 
        variants={jumbotronVariants}
        >
        <Image
        src={raq}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        priority // Optional: Load the image with priority
        />
        {isMobile ? <MobileImage /> : <DesktopImage />}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="px-4 mx-auto relative text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Request a Quote
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla sunt quis eveniet, assumenda itaque ipsam ducimus voluptatem esse. Beatae eaque corporis facilis ad odit? Reiciendis doloribus nemo mollitia sapiente.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        
        </div>
        </div>
        </motion.section>
    );
};

