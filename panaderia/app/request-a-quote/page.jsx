'use client';

import raq from './raq.jpg';
import dti from './dti.jpg'
import Image from "next/image";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Label, TextInput,Textarea, Button } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';


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


  const overlayStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px', 
    margin: '0 auto', 
    };

    const formStyles = {
      width: '100%', 
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
            <div style={overlayStyles} className="max-w-md">
              <form className="flex flex-col gap-4" style={formStyles} action="">
              <div className="mb-2 block">
                <Label
                  className='text-xl tracking-normal font-bold text-white'
                  htmlFor="email4"
                  value="Your email"
                />
                </div>
                <TextInput
                icon={HiMail}
                id="email4"
                placeholder="Your Email Here"
                required
                rightIcon={HiMail}
                type="email"
                />
                <div
                className="max-w-md"
                id="textarea"
                >
                <div className="mb-2 block">
                <Label
                className='text-xl tracking-normal font-bold text-white'
                htmlFor="comment"
                value="Your message"
                />
                </div>
                <Textarea
                  id="comment"
                  placeholder="Tell me more"
                  required
                  rows={4}
                />
              </div>
              <Button color="gray" className="inline-flex justify-center items-center py-3 px-5 text-2xl font-medium text-center text-white rounded-lg bg-transparent border border-white hover:bg-white hover:text-black hover:border-white transform scale-105 hover:scale-100 transition duration-200 ease-in-out">Submit</Button>
              </form>
            </div>
        </div>
        </motion.section>
    );
};

