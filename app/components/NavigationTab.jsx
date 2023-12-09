// Import necessary modules
'use client';
import { useState } from 'react';
import signout from '@/services/firebase/signout';
import Link from 'next/link';

//all of the logic for creating tabs
const NavigationTab = ({  tabs, setTabs, setSelectedTab }) => {
  // State to manage the input value for the new tab
  const [newTabName, setNewTabName] = useState('');

  // Function to add a new tab
  const addNewTab = async () => {
    if (newTabName.trim() !== '') {
      const newTab = { label: newTabName, link: '/home' };
      setTabs([...tabs, newTab]);
      setNewTabName(''); // Clear the input field after adding a new tab
      setSelectedTab(newTabName);
    }
  };

  // Function to handle tab click
  const handleTabClick = async (label) => {
    setSelectedTab(label);
  };

  return (
    <div className='flex flex-col fixed top-0 left-0 h-full items-center justify-between bg-black text-white'>
      <div className='items-center'>
        <Link href='/' className='items-center'>
          <p onClick={signout} className='p-4 cursor-pointer hover:bg-gray-100 hover:text-gray-400 w-40 text-center'>
            Log Out
          </p>
        </Link>
        <div className="bg-white h-2 w-50"> </div>
      </div> 
      <div className=''>
        {/* Map over the tabs array to render each tab dynamically */}
        {tabs.map((tab, index) => (
          <Link key={index} href={tab.link}>
            <p
              onClick={() => handleTabClick(tab.label)}
              className={`p-2 w-40 cursor-pointer bg-gray-400 hover:bg-gray-100 hover:text-gray-400 text-center`}
            >
              {tab.label}
            </p>
          </Link>
        ))}
      </div>
      <div className='flex flex-col items-center'>
        <input
          type='text'
          placeholder='Enter Chat Name'
          value={newTabName}
          onChange={(e) => setNewTabName(e.target.value)}
          className='p-2 mb-2 text-center text-gray-400 w-40'
        />
        <button onClick={addNewTab} className='p-4 cursor-pointer hover:bg-gray-100 hover:text-gray-400 w-40 text-center'>
          Add
        </button>
      </div>
    </div>
  );
};

export default NavigationTab;
