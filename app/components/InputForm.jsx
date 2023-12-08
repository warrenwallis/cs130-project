'use client';

import handleQuery from '@/services/main/handleQuery';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import {collection, db, doc, addDoc, setDoc, serverTimestamp} from '../../firebase'

const InputForm = ({ user, tab, messages, setMessages }) => {
	const [message, setMessage] = useState('');

	const handleSubmit = async () => {
		// get oml copilot's response
		const interpretedResult = await handleQuery(message);

		const newMessage = [
			...messages,
			{
				sender: user?.email,
				message,
			},
			{
				sender: 'OML Copilot',
				message: interpretedResult.queryInterpretation !== undefined
					? interpretedResult.queryInterpretation
					: '',
			},
			{
				sender: 'OML Copilot',
				message: `The sparQL query used was 
				  	${interpretedResult.sparQLQuery} 

					. Querying the formal database gave 
					${interpretedResult.queryResult}`,
			}
		]

		console.log("right before new message");

		setMessages(newMessage);

		console.log("successfully reached right before database and did nothing");
		//write to cloud firestore		
		try {
			console.log("User:", user.email);
			const usersCol = collection(db, 'users'); //root
			const userDoc = doc(usersCol, user.email);
			const chatsCol = collection(userDoc, 'chats');
			const newTabDoc = doc(chatsCol, tab);
			// Add a new document with the specified ID
			await setDoc(newTabDoc, {
				chatLogs: newMessage,
				timestamp: serverTimestamp(),
			});
			console.log("successfully wrote to database");
		} catch (error) {
			console.log(error);
		}
		

		setMessage('');
	};

	return (
		<>
			<div className='flex items-center gap-3'>
				<Input
					className='p-2 flex'
					variant='underlined'
					placeholder='Enter your query here'
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
