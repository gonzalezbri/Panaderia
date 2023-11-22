'use client';

import { FileInput, Label } from 'flowbite-react';
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function AddBread() {
    const [title, setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!title || !description) {
            alert("Title, Price and description are required.");
            return;
        }
    
        try {
            const res = await fetch("http://localhost:3000/api/breads", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ title,price,description, }),
            });
    
            if (res.ok) {
            router.push("/dashboard");
            } else {
            throw new Error("Failed to create Bread Item");
            }
        } catch (error) {
            console.log(error);
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
            <h1 className="font-bold text-white mt-10 mb-10">Add a Bread</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={formStyles}>
            <input onChange={(e) => setTitle(e.target.value)} value={title} className="border border-slate-500 px-8 py-2" type="text" placeholder="Bread Title" />
            <input onChange={(e) => setPrice(e.target.value)} value={price}className="border border-slate-500 px-8 py-2" type="text" placeholder="Price Per Dozen" />
            <input onChange={(e) => setDescription(e.target.value)} value={description}className="border border-slate-500 px-8 py-2" type="text" placeholder="Bread Description" />
            <button type='submit' className="bg-green-300 font-bold py-3 px-6">Add Bread!</button>
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