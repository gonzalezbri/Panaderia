'use client';

import React, { useState, useEffect } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';
import RemoveBtn from './RemoveBtn';

const BreadList = () => {
  const [breads, setBreads] = useState([]);

  // Function to fetch breads data
  const fetchBreadsData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/breads', {
        cache: 'no-store',
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch menu list');
      }
  
      const data = await res.json();
      console.log('Fetched data:', data); // Log the fetched data to check its structure
      setBreads(data.Breads || []);
    } catch (error) {
      console.error('Error fetching breads:', error);
    }
  };
  

  // useEffect to call fetchBreadsData on component mount
  useEffect(() => {
    console.log('Fetching breads data...');
    fetchBreadsData();
  }, []);
  console.log('Breads:', breads);

  const bgStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  };

  return (
    <>
      {breads.map((b) => (
        <div
          key={b._id}
          style={bgStyles}
          className="p-4 border border-slate-500 my-3 flex justify-between items-center"
        >
          <div className="w-3/4 p-8">
            <div className="flex flex-col items-start">
              <h2 className="text-white font-bold text-2xl mb-2">Title:  {b.title}</h2>
              <div className="text-white mb-2">Price:  {b.price}</div>
              <div className="text-white mb-2">Description:  {b.description}</div>
            </div>
          </div>
          <div className="flex items-center">
            <RemoveBtn id={b._id} />
            <Link href={`/EditBread/${b._id}`} passHref>
              <button className="ml-2">
                <HiPencilAlt size={24} />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default BreadList;


