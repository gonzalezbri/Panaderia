'use client';

import { FileInput, Label } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function EditBreadForm({ id, title, price, description }) {

    const [newTitle, setNewTitle] = useState(title);
    const [newPrice, setNewPrice] = useState(price);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch (`http://localhost:3000/api/breads/${id}`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newTitle, newPrice, newDescription}),
            });

            if (!res.ok) {
                throw new Error ("Failed to update menu item");
            }

            router.refresh();
            router.push("/dashboard")
        } catch (error) {
            
        }
    };

    const overlayStyles = {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: '20px',
        borderRadius: '2px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px', 
        margin: '0 auto', 
    };
    const formStyles = {
        width: '100%', 
    };
    return(
        <div style={overlayStyles} className="max-w-md">
            <h1 className="font-bold text-white mt-10 mb-10">Edit a Bread</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={formStyles}>
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className="border border-slate-500 px-8 py-2" type="text" placeholder="Bread Title" />
            <input onChange={(e) => setNewPrice(e.target.value)} value={newPrice}className="border border-slate-500 px-8 py-2" type="text" placeholder="Price Per Dozen" />
            <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} className="border border-slate-500 px-8 py-2" type="text" placeholder="Bread Description" />
            <button className="bg-green-300 font-bold py-3 px-6">Edit Menu Item!</button>
            <div
                className="max-w-md"
                id="fileUpload">
                    <div className="mb-2 block">
                    <Label
                    className='text-white'
                    htmlFor="file"
                    value="Upload file"/>
                    </div>
                <FileInput
                id="file"/>
            </div>
        </form>
        </div>
    )
}