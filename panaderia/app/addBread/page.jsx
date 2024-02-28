'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadButton } from 'next-cloudinary';


export default function AddBread() {
    const [title, setTitle] = useState("");
    const [price,setPrice] = useState(""); 
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);


    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        if (!title || !description) {
            alert("Title, Price, Description, and Image are required.");
            return;
        }
        setError(null); // Clear any previous errors
        
        if (!selectedImage) {
            console.error("Image URL is not in the selectedImage");
            return;
            }


        try {
            const data = { title, price, description, imageUrl: selectedImage, };
            
            const res = await fetch('/api/breads', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
                
            });
    
            if (res.ok) {
                router.push("/dashboard");
                console.log(data)
            } else {
                throw new Error("Failed to create Bread Item");
            }
        } catch (error) {
            console.error(error);
            setError("Failed to create Bread Item: " + error.message);
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
            <h1 className="font-bold text-white mt-10 mb-10">Add a Menu Item</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" style={formStyles}>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className="border border-slate-500 px-8 py-2" type="text" placeholder="Bread Title" />
                <input onChange={(e) => setPrice(e.target.value)} value={price} className="border border-slate-500 px-8 py-2" type="text" placeholder="Price Per" />
                <input onChange={(e) => setDescription(e.target.value)} value={description} className="border border-slate-500 px-8 py-2" type="text" placeholder="Bread Description" />
                <CldUploadButton
                        className="bg-blue-500 font-bold py-3 px-6"
                        uploadPreset="x4bjaqd2"
                        placeHolder="upload image"
                        onSuccess={(uploadedImage) => {
                            console.log("Image uploaded successfully:", uploadedImage.info.public_id); 
                            setSelectedImage(uploadedImage.info.public_id);
                            }}
                            onError={(error) => {
                            console.error("Error uploading image:", error);
                            setError("Image upload failed: " + error.message);
                            }}
                            onUploadProgress={(progress) => {
                            console.log("Upload progress:", progress);
                            }}>Upload Image First</CldUploadButton>

                    <button type='submit' className="bg-green-300 font-bold py-3 px-6">Confirm Menu Item</button>
            </form>
        </div>
    );
}
