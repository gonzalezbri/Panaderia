'use client';

import { FileInput, Label } from 'flowbite-react';

export default function addBread() {
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
        <form className="flex flex-col gap-4" style={formStyles}>
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Bread Title" />
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Price Per Dozen" />
            <input className="border border-slate-500 px-8 py-2" type="text" placeholder="Bread Description" />
            <button className="bg-green-300 font-bold py-3 px-6">Add Bread!</button>
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