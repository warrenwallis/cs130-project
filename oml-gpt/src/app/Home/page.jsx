"use client";

import React, { useState } from 'react';

const Page = () => {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <>
      <div>Home</div>
        <Chat messages={messages} />
        <Form onAddMessage={handleAddMessage}/>
    </>
    
  )
}

const Form = ({ onAddMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMessage(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type here" value={inputValue} className="input w-full max-w-xs"   onChange={(e) => setInputValue(e.target.value)}/>
      <button className="btn">Button</button>
    </form>
  )
}


const Chat = ({ messages }) => {
  return (
    <div className="chat">
      {messages.map((message, index) => (
        <div key={index} className="message">
          {message}
        </div>
      ))}
    </div>
  );
};

export default Page