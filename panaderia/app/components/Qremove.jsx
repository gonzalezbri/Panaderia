'use client';

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";


export default function Qremove( {id} ) {
    const router = useRouter();
    const removeQuote = async () => {
        const confirmed = confirm("Are you sure Olga?");

        if (confirmed) {
        const res = await fetch(`/api/quote?id=${id}`,{
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button onClick={removeQuote} className="text-red-400"><HiOutlineTrash size={24}/></button>
    )
}