import Link from "next/link";

export default function DashNav () {
    return (
        <nav className="flex justify-between items-center bg-black bg-opacity-80 px-8 py-3">
            <h1 className="text-white font-bold mr-2">Olga&apos;s Menu DashBoard made by her favorite son Brian</h1>
            <Link className="font-bold bg-orange-300 rounded-3xl hover:bg-pink-400 p-6" href={'/addBread'}>Add Bread Item</Link>
        </nav>
    )
};