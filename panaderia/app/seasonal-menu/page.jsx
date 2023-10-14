'use client';

import Image from 'next/image';
import seas from './seas.jpg';
import { motion, AnimatePresence } from 'framer-motion';

export default function CardGrid() {
    const cards = [
        {
            id: 1,
            title: 'Bread 1',
        },
        {
            id: 2,
            title: 'Bread 2',
        },
        {
            id: 3,
            title: 'Bread 3',
        },
        {
            id: 4,
            title: 'Bread 4',
        },
        {
            id: 5,
            title: 'Bread 5',
        },
        {
            id: 6,
            title: 'Bread 6',
        },
        {
            id: 7,
            title: 'Bread 7',
        },
        {
            id: 8,
            title: 'Bread 8',
        },
        {
            id: 9,
            title: 'Bread 9',
        },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-14">
            <h1 className="text-4xl font-extrabold">Seasonal Menu</h1>

            <div className="container mx-auto py-6">
                <div className="grid grid-cols-3 gap-4">
                    <AnimatePresence>
                        {cards.map((card) => (
                            <motion.div
                                key={card.id}
                                className="card w-full bg-white rounded-lg overflow-hidden shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <div className="h-60 relative">
                                    <Image
                                        src={seas}
                                        alt={card.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {card.title}
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        Price Per Dozen:
                                    </p>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        Description:
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