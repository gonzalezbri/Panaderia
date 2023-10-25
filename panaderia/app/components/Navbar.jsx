'use client';
import { Navbar } from "flowbite-react";
import { motion } from 'framer-motion';
import NavImg from '../../public/bred75.png';
import Image from "next/image";

const DefaultNavbar = () => {
    const linkStyle = {
        color: 'white'
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
                    <span className="self-center whitespace-nowrap text-3xl font-semibold text-white">
                        Panaderia
                    </span>
                </Navbar.Brand>
            </motion.div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.2, color: 'black' }} style={linkStyle}>Home</motion.div>
                </Navbar.Link>
                <Navbar.Link href="/seasonal-menu" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.1, color: 'black' }} style={linkStyle}>Seasonal Menu</motion.div>
                </Navbar.Link>
                <Navbar.Link href="/request-a-quote" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.1, color: 'black' }} style={linkStyle}>Request a quote</motion.div>
                </Navbar.Link>
                <Navbar.Link href="/about" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.2, color: 'black' }} style={linkStyle}>About</motion.div>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default DefaultNavbar;
