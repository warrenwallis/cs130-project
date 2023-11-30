'use client';

import { useState } from 'react';
import InputForm from '../components/InputForm';
import ChatLogs from '../components/ChatLogs';
import { useUserAuthContext } from '../providers/UserProvider';

const Page = () => {
	const { user } = useUserAuthContext();
	const [messages, setMessages] = useState([]);

	return (
		<div className='h-screen flex flex-col justify-between p-5'>
			<div className=''>
				<p className='text-2xl font-medium mb-5'>OML Copilot x {user?.email}</p>
				<ChatLogs user={user} messages={messages} />
			</div>

			<InputForm user={user} messages={messages} setMessages={setMessages} />
		</div>
	);
};

export default Page;
