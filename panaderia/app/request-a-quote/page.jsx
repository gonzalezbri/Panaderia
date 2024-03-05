'use client';

import raq from './raq.jpg';
import dti from './dti.jpg';
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Label, TextInput,Textarea, Button } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

const jumbotronVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
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

const RequestQuote = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.section
      className="relative bg-gray-700 bg-blend-multiply h-screen flex items-center"
      initial="initial"
      animate="animate"
      variants={jumbotronVariants}
    >
      <Image
        src={isMobile ? raq : dti}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="px-4 relative text-center py-24 lg:py-40 z-1" style={{ margin: '0 auto', maxHeight: '900px' }}>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Request a Quote
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          To request a quote for a custom cake, please follow the steps below. First, provide your email address in the designated box. Next, describe your desired custom cake, including any specific design, flavor, and size preferences in the text box provided. Once you have submitted the form, I will promptly review your request and get back to you with a personalized quote!
        </p>
        <div style={overlayStyles}>
          <form className="flex flex-col gap-4" style={formStyles} action="">
            <div className="mb-2 block">
              <Label
                className='text-xl tracking-normal font-normal text-white'
                htmlFor="email4"
                value="Your Email"
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
            <div className="max-w-md" id="textarea">
              <div className="mb-2 block">
                <Label
                  className='text-xl tracking-normal font-normal text-white'
                  htmlFor="comment"
                  value="Your Message"
                />
              </div>
              <Textarea
                id="comment"
                placeholder="Please also include your Phone Number in the message as well"
                required
                rows={2}
              />
            </div>
            <Button color="gray" className="inline-flex justify-center items-center py-3 px-5 text-2xl font-medium text-center text-white rounded-lg bg-transparent border border-white hover:bg-white hover:text-black hover:border-white transform scale-105 hover:scale-100 transition duration-200 ease-in-out">Submit</Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default RequestQuote;