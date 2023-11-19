
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getBreads = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/breads', {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch menu list");
        }
    
        // Return the parsed JSON response
        return await res.json();
        } catch (error) {
        console.log("Error Loading Menu Items", error);
        }
}

export default async function BreadList() {

    const { breads } = await getBreads ();
    console.log(breads)


    const bgStyles = {
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    }

        return (
            <>
            {breads.map((b) => (
            <div style={bgStyles} className="p-4 border border-slate-500 my-3 flex justify-between items-center">
                <div className="w-3/4 p-8">
                    <div className="flex flex-col items-start">
                    <h2 className="font-bold text-2xl mb-2">{b.title}</h2>
                    <div className="mb-2">{b.price}</div>
                    <div className="mb-2">{b.description}</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <RemoveBtn />
                        <Link href={`/EditBread/${b._id}`} passHref>
                            <button className="ml-2">
                                <HiPencilAlt size={24} />
                            </button>
                        </Link>
                </div>
            </div>))}</>
            );
        };