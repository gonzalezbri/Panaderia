'use client';
import { Navbar } from "flowbite-react";

export default function DefaultNavbar() {
    return (
            <Navbar
            fixed={true}
            fluid={true}
            rounded={true}
            className="custom-navbar"
            >
            <Navbar.Brand href="/">
                <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt=""
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Panaderia
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                href="/"
                active={true}>
                Home
                </Navbar.Link>
                <Navbar.Link href="/seasonal-menu">
                Seasonal Menu
                </Navbar.Link>
                <Navbar.Link href="/request-a-quote">
                Request a quote
                </Navbar.Link>
                <Navbar.Link href="/about">
                About
                </Navbar.Link>
            </Navbar.Collapse>
            </Navbar>)};