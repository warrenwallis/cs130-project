'use client';

import handleQuery from '@/services/main/handleQuery';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';

const InputForm = ({ user, messages, setMessages }) => {
	const [message, setMessage] = useState('');

	const handleSubmit = async () => {
		// get oml copilot's response
		const interpretedResult = await handleQuery(message);
		setMessages([
			...messages,
			{
				sender: user?.email,
				message,
			},
			{
				sender: 'OML Copilot',
				message: interpretedResult.queryInterpretation,
			},
			{
				sender: 'OML Copilot',
				message: `The sparQL query used was 
				  	${interpretedResult.sparQLQuery} 

					. Querying the formal database gave 
					${interpretedResult.queryResult}`,
			}
		]);

		setMessage('');
	};

	return (
		<>
			<div className='flex items-center gap-3'>
				<Input
					className='p-2 flex'
					variant='underlined'
					placeholder='What is the best {query}'
					value={message}
					onValueChange={(msg) => setMessage(msg)}
				/>
				<Button onPress={handleSubmit} className='flex bg-gray-600 text-white px-4 rounded-md'>
					Send
				</Button>
			</div>
		</>
	);
};

export default InputForm;
