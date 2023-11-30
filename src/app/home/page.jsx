'use client';

import { useState } from 'react';
import InputForm from '../../components/InputForm';
import ChatLogs from '../../components/ChatLogs';
import NavigationTab from '../../components/NavigationTab';

const Page = () => {
	const [messages, setMessages] = useState([]);

	return (
		<div className='h-screen flex flex-col justify-between p-5'>
			<ChatLogs messages={messages} />
			<InputForm messages={messages} setMessages={setMessages} />
		</div>
	);
};

export default Page;
