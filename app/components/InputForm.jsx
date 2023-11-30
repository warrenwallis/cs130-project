'use client';

import { converToSparQL } from '@/services/llm';
import handleQuery from '@/services/main/handleQuery';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';

const InputForm = ({ user, messages, setMessages }) => {
	const [message, setMessage] = useState('');

	const handleSubmit = async () => {
		// paste user's message to chat
		setMessages([
			...messages,
			{
				sender: user?.email,
				message,
			},
		]);

		// get oml copilot's response
		const interpretedResult = await handleQuery(message);
		setMessages([
			...messages,
			{
				sender: 'OML Copilot',
				message: interpretedResult.queryInterpretation,
			},
		]);

		setMessage('');
	};

	return (
		<>
			<div className='flex items-center gap-3'>
				<Input
					className='p-3 flex'
					variant='underlined'
					placeholder='What is the best {query}'
					value={message}
					onValueChange={(msg) => setMessage(msg)}
				/>
				<Button onPress={handleSubmit} className='flex bg-cagnos-blue text-white px-4 py-2 rounded-md'>
					Send
				</Button>
			</div>
		</>
	);
};

export default InputForm;
