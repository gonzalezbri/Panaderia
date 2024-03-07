'use client';
import { Navbar } from "flowbite-react";
import { motion } from 'framer-motion';
import NavImg from '../../public/bred75.png';
import Image from "next/image";
import { playfairDisplay } from '../fonts.js';



const DefaultNavbar = () => {
    const linkStyle = {
        color: 'white',
        className: playfairDisplay.className,
    };
    return (
        <Navbar
            fixed="true"
            fluid={true}
            rounded={true}
            className="custom-navbar">
            <motion.div whileHover={{ scale: 1.1 }}>
                <Navbar.Brand href="/">
                    <Image
                    src={NavImg}
                    className="mr-5 h-12 image"/>
                    <span className="self-center whitespace-nowrap text-3xl font-bold text-white">
                        Pan Casero
                    </span>
                </Navbar.Brand>
            </motion.div>
            <Navbar.Toggle />
            <Navbar.Collapse className="mr-5">
                <Navbar.Link href="/" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.2, color: 'pink' }} style={linkStyle}>Home</motion.div>
                </Navbar.Link>
                <Navbar.Link href="/seasonal-menu" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.1, color: 'pink' }} style={linkStyle}>Seasonal Menu</motion.div>
                </Navbar.Link>
                <Navbar.Link href="/request-a-quote" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.1, color: 'pink' }} style={linkStyle}>Request a quote</motion.div>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default DefaultNavbar;
