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
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
        <h1 className="shadow-xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Seasonal Menu
        </h1>
        <div className="container mx-auto py-6">
        <div
            className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-4`}
        >
            <AnimatePresence>
            {breads.map((bread) => (
                <motion.div
                key={bread._id}
                className="card w-full bg-opacity-50 bg-black rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                >
                <div className="h-60 relative">
                    <CldImage  
                    src={bread.imageUrl}
                    alt={bread.title}
                    height={200}
                    width={400}
                    />
                </div>
                <div className="p-4">
                    <p className="font-bold text-gray-700 dark:text-gray-400 mb-2">
                    <span className="text-xl text-blue-500">Title:</span>{" "}
                    {bread.title}
                    </p>
                    <p className="font-bold text-gray-700 dark:text-gray-400 mb-2">
                    <span className="text-xl text-green-500">
                        Price per dozen:
                    </span>{" "}
                    ${bread.price}
                    </p>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                    <span className="text-xl text-purple-500">
                        Description:
                    </span>{" "}
                    {bread.description}
                    </p>
                </div>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
        </div>
    </main>
    );
}
