'use client';

// Import necessary modules
import { useState, useEffect } from 'react';
import InputForm from '../components/InputForm';
import ChatLogs from '../components/ChatLogs';
import { useUserAuthContext } from '../providers/UserProvider';
import NavigationTab from '@/app/components/NavigationTab';
import {collection, db, doc, addDoc, setDoc, getDoc, getDocs, serverTimestamp} from '../../firebase'

const Page = () => {
  const { user } = useUserAuthContext();
  const [messages, setMessages] = useState([]);

  // Define the initial tabs
  const initialTabs = [
    { label: 'Home', link: '/home' }
  ];

  // State to manage the list of tabs
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedTab, setSelectedTab] = useState('Home');

  useEffect(() => {
    const fetchData = async () => {
      try {
		console.log(user);
        const userCol = collection(db, 'users');
        const userDoc = doc(userCol, user.email);
        const chatsCol = collection(userDoc, 'chats');

        const querySnapshot = await getDocs(chatsCol);
		
		// Use a temporary array to collect tab data
		let tempTabs = [];

		querySnapshot.forEach((doc) => {
		  console.log('Document Name:', doc.id);
		  tempTabs.push( { label: doc.id, link: '/home' });
		});
  
		// Update the tabs state with the new data
		setTabs(tempTabs);

      } catch (error) {
        console.error(error);
      }

      console.log('view did load');
    };

    fetchData(); // Call the async function immediately

    // Since fetchData doesn't return a cleanup function, there's nothing to clean up
  }, []);



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

	  console.log("sel", selectedTab)
      if (data.exists()) {
        // console.log(data.data());
        setMessages(data.data().chatLogs);
      } else {
        console.log("it don't exist");
		setMessages([]);
      }
    } catch (error) {
      console.log(error)
    }
    setSelectedTab(tab);
  }
  return (
	<>
	<NavigationTab user={user} tabs={tabs} setTabs={setTabs} setSelectedTab={selectTab} />
    <div className='h-screen flex flex-col justify-between p-5'>
      <div className=''>
        <p className='text-2xl font-medium mb-5'>OML Copilot x {user?.email} - {selectedTab}</p>
        <ChatLogs user={user} messages={messages} />
      </div>

        <InputForm user={user} tab ={selectedTab} messages={messages} setMessages={setMessages} />
      </div>
    </>
  );
};

export default Page;
