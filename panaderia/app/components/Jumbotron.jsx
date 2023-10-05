import React from "react";
import Link from "next/link";
import bg1 from './bg1.jpg';
import Image from "next/image";

const Jumbotron = () => {
    return (
    <section className="relative bg-gray-700 bg-blend-multiply">
        <Image
        src={bg1}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        priority // Optional: Load the image with priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="px-4 mx-auto relative text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Panadería
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Una empresa local operada con cariño por Olga González y su esposo, Roberto González, en Rawlins, Wyoming. ¡Haz clic en el botón a continuación para explorar nuestro menú de temporada actual y descubrir qué se está horneando!
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Link
        href="/seasonal-menu"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-transparent border border-white hover:bg-white hover:text-black hover:border-white transform scale-105 hover:scale-100 transition duration-300 ease-in-out">
        Menú de Temporada
        </Link>
        </div>
        </div>
    </section>
    );
};

export default Jumbotron;


