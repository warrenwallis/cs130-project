'use client';

import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';

const InputForm = ({ messages, setMessages }) => {
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		setMessages([...messages, message]);
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
