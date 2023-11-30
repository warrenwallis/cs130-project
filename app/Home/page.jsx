'use client';

import React, { useState } from 'react';
import './styles.css';

const Page = () => {
	const [messages, setMessages] = useState([]);

	const [currentPage, setCurrentPage] = useState('Home'); // Initial page

	const handlePageChange = (page) => {
		setCurrentPage(page);
		setMessages([]);
	};

	const handleAddMessage = (newMessage, person) => {
		setMessages([...messages, { person, content: newMessage }]);
	};

	return (
		<div className='page-container'>
			<div className='sidebar'>
				<button onClick={() => handlePageChange('Home')}>Home</button>
				<button onClick={() => handlePageChange('Support')}>Support</button>
				{/* Add more buttons for other chat pages */}
			</div>
			<div className='chat-container'>
				<div>{currentPage}</div>
				<Chat messages={messages} />
				<Form onAddMessage={handleAddMessage} />
			</div>
		</div>
	);
};

const Form = ({ onAddMessage }) => {
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddMessage(inputValue, 'You');
		setInputValue('');
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	return (
		<form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', paddingBottom: '50px', paddingLeft: '50px' }}>
			<input type='text' placeholder='Type here' value={inputValue} className='input w-full' onChange={(e) => setInputValue(e.target.value)} />
			<button className='btn'>Button</button>
		</form>
	);
};

const Chat = ({ messages }) => {
	return (
		<div className='chat'>
			{messages.map((message, index) => (
				<div key={index} className='message'>
					<strong>{message.person}: </strong>
					{message.content}
				</div>
			))}
		</div>
	);
};

export default Page;
