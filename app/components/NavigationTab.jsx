// Import necessary modules
'use client';
import { useState } from 'react';
import signout from '@/services/firebase/signout';
import {collection, db, doc, addDoc, setDoc, serverTimestamp} from '../../firebase'
import Link from 'next/link';
// import addChatToFirestore from '../../services/backend/backendManager';

const NavigationTab = ({ user, tabs, setTabs, setSelectedTab }) => {
  // State to manage the input value for the new tab
  const [newTabName, setNewTabName] = useState('');

  // Function to add a new tab
  const addNewTab = async () => {
    if (newTabName.trim() !== '') {
      const newTab = { label: newTabName, link: '/home' };
      setTabs([...tabs, newTab]);
      setNewTabName(''); // Clear the input field after adding a new tab
	  
    }
  };

  // Function to handle tab click
  const handleTabClick = async (label) => {
    setSelectedTab(label);
  };

  return (
    <div className='flex flex-col fixed top-0 left-0 h-full items-center border-r-2 border-slate-100 justify-between'>
      <div className=''>
        {/* Map over the tabs array to render each tab dynamically */}
        {tabs.map((tab, index) => (
          <Link key={index} href={tab.link}>
            <p
              onClick={() => handleTabClick(tab.label)}
              className={`p-4 cursor-pointer hover:bg-sky-50 w-40 text-center`}
            >
              {tab.label}
            </p>
          </Link>
        ))}
      </div>
      <div className='flex flex-col items-center'>
        <input
          type='text'
          placeholder='Enter tab name'
          value={newTabName}
          onChange={(e) => setNewTabName(e.target.value)}
          className='p-2 mb-2'
        />
        <button onClick={addNewTab} className='p-4 cursor-pointer hover:bg-sky-50 w-40 text-center'>
          Add
        </button>
      </div>
      <Link href='/'>
        <p onClick={signout} className='p-4 cursor-pointer hover:bg-sky-50 w-40 text-center'>
          Log Out
        </p>
      </Link>
    </div>
  );
};

export default NavigationTab;
