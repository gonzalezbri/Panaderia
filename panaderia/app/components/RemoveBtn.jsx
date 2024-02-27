'use client';

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";


export default function RemoveBtn( {id} ) {
    const router = useRouter();
    const removeBread = async () => {
        const confirmed = confirm("Are you sure Olga?");

        if (confirmed) {
        const res = await fetch(`/api/breads?id=${id}`,{
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button onClick={removeBread} className="text-red-400"><HiOutlineTrash size={24}/></button>
    )
}