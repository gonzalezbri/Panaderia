'use client';

import React, { useState, useEffect } from 'react';
import RemoveBtn from './RemoveBtn';
import Qremove from './Qremove';

const BreadList = () => {
  const [breads, setBreads] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [quotes, setQuotes] = useState([]);


  // Function to fetch breads data
  const fetchBreadsData = async () => {
    try {
      const res = await fetch('/api/breads', {
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


  // Function to fetch quote data
  const quoteData = async () => {
    try {
      const res = await fetch('/api/quote', {
        cache: 'no-store',
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch quote list');
      }
  
      const data = await res.json();
      console.log('Fetched data:', data); // Log the fetched data to check its structure
      setQuotes(data.Quotes || []);
    } catch (error) {
      console.error('Error fetching Quotes:', error);
    }
  };
  
 // useEffect to call fetch quote on component mount
  useEffect(() => {
    console.log('Fetching quote data...');
    quoteData();
  }, []);
  console.log('Quotes:', quotes);


  const bgStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  };

  // Sort breads and quotes by date
  const sortedBreads = [...breads].sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedQuotes = [...quotes].sort((a, b) => new Date(b.date) - new Date(a.date));



  return (
    <div className="flex flex-col">
      <div className="flex">
      <button className={activeTab === 1 ? "bg-orange-300 font-semibold text-black px-4 py-4" : "bg-gray-500 hover:bg-pink-400 text-white px-4 py-2"} onClick={() => setActiveTab(1)}>Menu Items</button>
      <button className={activeTab === 2 ? "bg-orange-300 font-semibold text-black px-4 py-4" : "bg-gray-500 hover:bg-pink-400 text-white px-4 py-2"} onClick={() => setActiveTab(2)}>Quote Request Messages</button>
      </div>
      <div>
      {activeTab === 1 && sortedBreads.map((b) => (
          <div
            key={b._id}
            style={bgStyles}
            className="p-2 border border-slate-500 my-6 flex justify-between items-center"
          >
            <div className="w-3/4 p-8">
              <div className="flex flex-col items-start">
                <h2 className="text-white font-bold text-2xl mb-2">Title:  {b.title}</h2>
                <div className="text-white mb-2">Price:  {b.price}</div>
                <div className="text-white mb-2">Description:  {b.description}</div>
                <div className="text-white mb-2 mr-8">Image URL: {b.imageUrl}</div>
              </div>
            </div>
            <div className="flex items-center mx-8">
              <RemoveBtn id={b._id} />
            </div>
          </div>
        ))}
        {activeTab === 2 && sortedQuotes.map((q) => (
            <div key={q._id} style={bgStyles} className="p-2 border border-slate-500 my-6 flex justify-between items-center">
              <div className="w-3/4 p-8">
                <div className="flex flex-col items-start">
                  <h2 className="text-white text-2xl mb-2">
                    <p className="text-lg underline text-orange-400">Full Name:</p>
                    {q.fullName}
                  </h2>
                  <div className="text-white mb-2">
                    <p className="text-lg underline text-blue-400">Email:</p>
                    <p className="text-2xl">{q.email}</p>
                  </div>
                  <div className="text-white mb-2">
                    <p className="text-lg underline text-green-400">Message:</p>
                    <p className="text-2xl">{q.message}</p>
                  </div>
                  <div className="text-white mb-2 mr-8">
                    <p className="text-lg underline text-purple-400">Date: {new Date(q.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center mx-8">
                <Qremove id={q._id} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BreadList;




