'use client';

// Import necessary modules
import { useState, useEffect } from 'react';
import InputForm from '../components/InputForm';
import ChatLogs from '../components/ChatLogs';
import { useUserAuthContext } from '../providers/UserProvider';
import NavigationTab from '@/app/components/NavigationTab';
import { collection, doc, db ,getDoc} from '../../firebase'

const Page = () => {
  const { user } = useUserAuthContext();
  const [messages, setMessages] = useState([]);

  // Define the initial tabs
  const initialTabs = [
    { label: 'Home', link: '/home' },
    { label: 'Support', link: '/home' },
  ];

  // State to manage the list of tabs
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState('Home');

  useEffect(() => {
    // Do something with the selectedTab whenever it changes
    console.log(`Selected Tab in Page: ${selectedTab}`);
  }, [selectedTab]);
  const selectTab = async (tab) => {
    try {
      const userCol = collection(db, "users");
      const userDoc = doc(userCol, user.email);
      const chatsCol = collection(userDoc, "chats");
      const chatDocument= doc(chatsCol, tab);
      const data = await getDoc(chatDocument);
      if (data.exists()) {
        // console.log(data.data());
        setMessages(data.data().chatLogs);
      } else {
        console.log("it don't exist");
      }
    } catch (error) {
      console.log(error)
    }
    setSelectedTab(tab);
  }
  return (
    <>
      <NavigationTab tabs={tabs} setTabs={setTabs} setSelectedTab={selectTab} />
      <div className='h-screen flex flex-col justify-between p-5'>
        <div className=''>
          <p className='text-2xl font-medium mb-5'>OML Copilot x {user?.email} - {selectedTab}</p>
          <ChatLogs user={user} messages={messages} />
        </div>

        <InputForm user={user} messages={messages} setMessages={setMessages} />
      </div>
    </>
  );
};

export default Page;
