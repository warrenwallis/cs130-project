'use client';

const ChatLogs = ({ messages }) => {
	return (
		<div className='flex flex-col gap-3 ml-5'>
			{messages?.map((message, i) => (
				<div key={i} className='flex flex-col'>
					{/* <strong>{message.person}: </strong> */}
					<p className='font-medium'>{message.sender}</p>
					<p className='text-slate-500'>{message.message}</p>
				</div>
			))}
		</div>
	);
};

export default ChatLogs;
