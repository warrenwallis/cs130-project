'use client';

// Import necessary modules
import { useState, useEffect } from 'react';
import InputForm from '../components/InputForm';
import ChatLogs from '../components/ChatLogs';
import { useUserAuthContext } from '../providers/UserProvider';
import NavigationTab from '@/app/components/NavigationTab';


const Page = () => {
  const { user } = useUserAuthContext();
  const [messages, setMessages] = useState([]);

  // Define the initial tabs
  const initialTabs = [
    { label: 'Home', link: '/home' },
  ];

  // State to manage the list of tabs
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState('Home');

  useEffect(() => {
    // Do something with the selectedTab whenever it changes
    console.log(`Selected Tab in Page: ${selectedTab}`);
  }, [selectedTab]);

  return (
    <div className='flex flex-col'>
      <NavigationTab tabs={tabs} setTabs={setTabs} setSelectedTab={setSelectedTab} />
      <div className='h-screen flex flex-col justify-between p-5 border-2 border-black'>
        <div className=''>
          <p className='text-2xl font-medium mb-5 text-right'>Hello {user?.email}! Welcome to OML Copilot.</p>
          <p className='text-xl font-medium mb-5 text-right'>You are viewing "{selectedTab}"</p>
          <ChatLogs user={user} messages={messages} />
        </div>

        <InputForm user={user} messages={messages} setMessages={setMessages} />
      </div>
    </div>

  );
};

export default Page;
