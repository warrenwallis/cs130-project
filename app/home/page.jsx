'use client';

import { useState } from 'react';
import InputForm from '../components/InputForm';
import ChatLogs from '../components/ChatLogs';
import NavigationTab from '../components/NavigationTab';
import { auth } from '@/firebase';
import { useUserAuthContext } from '../providers/UserProvider';

const Page = () => {
	const { user } = useUserAuthContext();
	const [messages, setMessages] = useState([]);

	return (
		<div className='h-screen flex flex-col justify-between p-5'>
			<div className=''>
				<p className='text-2xl font-medium mb-5'>OML Copilot x {user.email}</p>
				<ChatLogs messages={messages} />
			</div>

			<InputForm messages={messages} setMessages={setMessages} />
		</div>
	);
};

export default Page;
