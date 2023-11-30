'use client';

import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@nextui-org/react';

const Page = () => {
	const router = useRouter();

	const [user, setUser] = useState('');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user, password);
		setUser('');
		setPassword('');
		router.push('/home');
	};
	return (
		<div className='p-10 flex flex-col'>
			<p className='font-medium text-2xl mb-5'>Log into OML Copilot</p>

			<div className='flex flex-col md:flex-row gap-5'>
				<Input
					label='Email'
					isRequired
					variant='underlined'
					placeholder='Enter email'
					value={email}
					onValueChange={(value) => setEmail(value)}
					isInvalid={emailError}
					errorMessage={emailError}
				/>

				<Input
					label='Password'
					isRequired
					type='password'
					variant='underlined'
					placeholder='Enter password'
					value={password}
					onValueChange={(value) => setPassword(value)}
					isInvalid={passwordError}
					errorMessage={passwordError}
				/>
			</div>

			<Button onPress={handleSubmit} className='bg-cagnos-blue rounded-md text-white px-4 py-3 mt-10'>
				Log In
			</Button>
		</div>
	);
};

export default Page;
