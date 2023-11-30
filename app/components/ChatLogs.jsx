'use client';

const ChatLogs = ({ messages }) => {
	console.log(messages);
	return (
		<div className=''>
			{messages?.map((message, i) => (
				<div key={i}>
					{/* <strong>{message.person}: </strong> */}
					{message}
				</div>
			))}
		</div>
	);
};

export default ChatLogs;
