"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";




const fetchBreadsData = async () => {
    try {
    const res = await fetch("/api/breads"); // Use the relative path to your API route
    if (!res.ok) {
        throw new Error("Failed to fetch menu list");
    }
    const data = await res.json();
    console.log("Fetched data:", data);
    return data.Breads || [];
    } catch (error) {
    console.error("Error fetching breads:", error);
    return [];
    }
};

export default function CardGrid() {
    const [breads, setBreads] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // check initially
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    useEffect(() => {
    const fetchData = async () => {
        const breadsData = await fetchBreadsData();
        setBreads(breadsData);
    };

    fetchData();
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-8">
            <h1 className="shadow-xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                Seasonal Menu
            </h1>
            <div className="container mx-auto py-12">
                <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-4`}>
                    <AnimatePresence>
                        {breads.map((bread) => (
                            <motion.div
                                key={bread._id}
                                className="menu card w-full bg-opacity-50 bg-black rounded-l rounded-r overflow-hidden shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                style={{ height: 'auto' }} // Set height dynamically
                            >
                                <div>
                                    <CldImage
                                        className="card-image"
                                        src={bread.imageUrl}
                                        alt={bread.title}
                                        height={1}
                                        width={500}
                                    />
                                </div>
                                <div className="p-2 py-2" style={{ maxHeight: '100%', overflow: 'hidden' }}>
                                    <p className="text-2xl font-bold text-gray-300 mb-2">
                                        {bread.title}
                                    </p>
                                    <p className="text-l font-bold text-green-400 mb-2">
                                        ${bread.price}
                                    </p>
                                    <p className="font-bold text-gray-400">
                                        {bread.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
