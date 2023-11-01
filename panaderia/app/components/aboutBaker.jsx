'use client'

import React, { useEffect, useState } from 'react';
import about from './about.jpg';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';

const jumbotronVariants = {
    initial: {
        opacity: 0,
        y: 20, // Move it down slightly
        width: '100vw', // Set the width to the viewport width
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

const AboutTron = () => {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 200) { // Adjust this value to control when the animation triggers
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.section
            className="relative bg-gray-700 bg-blend-multiply min-h-screen flex justify-center items-center w-screen"
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={jumbotronVariants}
        >
            <Image
                src={about}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                priority // Optional: Load the image with priority
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="px-4 mx-auto relative text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    About
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    About the Baker Text
                </p>
            </div>
        </motion.section>
    );
};

export default AboutTron;
