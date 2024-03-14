'use client';

import raq from './raq.jpg';
import dti from './dti.jpg';
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Label, TextInput,Textarea, Button } from 'flowbite-react';
import { HiMail, HiUser } from 'react-icons/hi';

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
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Name:', setFullName);
    console.log('Email:', setEmail);
    console.log('Message:', setMessage);

    const res = await fetch('api/quote', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        message,

      }),
      });
      const { msg, success } = await res.json();
      setError(msg);
      setSuccess(success);

      if (success) {
        setSuccessMessage('Your quote submission was successful!');
        setFullName("");
        setEmail("");
        setMessage("");
    } else {
        setSuccessMessage('There was an error submitting you request.')
    }
  };



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
      <div className="px-4 relative text-center py-20 lg:py-34 z-1" style={{ margin: '0 auto', maxHeight: '900px' }}>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Request a Quote
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          To request a quote for a custom cake, please follow the steps below. First, provide your email address in the designated box. Next, describe your desired custom cake, including any specific design, flavor, and size preferences in the text box provided. Once you have submitted the form, I will promptly review your request and get back to you with a personalized quote!
        </p>
        {/* Success/Error Message Display */}
        {successMessage && (
          <div className={`mb-4 text-white text-lg font-semibold ${success ? 'bg-green-500' : 'bg-red-500'} px-4 py-2 rounded-md`}>
            {successMessage}
          </div>
        )}
        <div style={overlayStyles}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2" style={formStyles} action="">
          <div className="mb-4 block">
              <Label
                className='text-xl tracking-normal font-semibold text-white'
                htmlFor="Full Name"
                value="Full Name"
              />
            </div>
            <TextInput
              icon={HiUser}
              id="name"
              placeholder="                       Your Full Name"
              required
              rightIcon={HiUser}
              type="name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <div className="mb-4 block">
              <Label
                className='text-xl tracking-normal font-semibold text-white'
                htmlFor="email4"
                value="Your Email"
              />
            </div>
            <TextInput
              icon={HiMail}
              id="email"
              placeholder="                      Your Email Here"
              required
              rightIcon={HiMail}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="max-w-md" id="textarea">
              <div className="mb-4 block">
                <Label
                  className='text-xl tracking-normal font-semibold text-white'
                  htmlFor="comment"
                  value="Your Message"
                />
              </div>
              <Textarea
                id="comment"
                placeholder="Please also include your Phone Number in the message as well"
                required
                rows={2}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className='mb-6'
              />
            </div>
            <Button type='submit' color="gray" className="inline-flex justify-center items-center py-3 px-5 text-2xl font-medium text-center text-white rounded-lg bg-transparent border border-white hover:bg-white hover:text-black hover:border-white transform scale-105 hover:scale-100 transition duration-200 ease-in-out">Submit</Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default RequestQuote;