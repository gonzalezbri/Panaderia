'use client';
import { Navbar } from "flowbite-react";
import { motion } from 'framer-motion';

const DefaultNavbar = () => {
    const linkStyle = {
        color: 'white'
    };
    return (
        <Navbar
            fixed={true}
            fluid={true}
            rounded={true}
            className="custom-navbar">
            <motion.div whileHover={{ scale: 1.1 }}>
                <Navbar.Brand href="/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-9 sm:h-9"
                        alt=""
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                        Panaderia
                    </span>
                </Navbar.Brand>
            </motion.div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.3, color: 'black' }} style={linkStyle}>Home</motion.div>
                </Navbar.Link>
                <Navbar.Link href="/seasonal-menu" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.2, color: 'black' }} style={linkStyle}>Seasonal Menu</motion.div>
                </Navbar.Link>
                <Navbar.Link href="/request-a-quote" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.2, color: 'black' }} style={linkStyle}>Request a quote</motion.div>
                </Navbar.Link>
                <Navbar.Link href="/about" className="text-white text-xl">
                    <motion.div whileHover={{ scale: 1.3, color: 'black' }} style={linkStyle}>About</motion.div>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default DefaultNavbar;