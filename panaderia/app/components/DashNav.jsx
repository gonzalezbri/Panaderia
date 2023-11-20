import Link from "next/link";

export default function DashNav () {
    return (
        <nav className="flex justify-between items-center bg-black bg-opacity-80 px-8 py-3">
            <h1 className="text-white font-bold">Olga's Menu DashBoard made by her favorite son Brian Gonzalez</h1>
            <Link className="bg-white p-2" href={'/addBread'}>Add Bread Item</Link>
        </nav>
    )
};