'use client';

import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@nextui-org/react';
import login from '@/services/firebase/login';
import { isValidEmail, isValidPassword, timeoutError } from '@/services/lib/helpers';

const Page = () => {
	const router = useRouter();

	const [user, setUser] = useState('');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		if (!isValidEmail(email)) return timeoutError(setEmailError, 'Invalid email.');
		// if (!isValidPassword(password))
		// 	return timeoutError(
		// 		setPasswordError(
		// 			'Invalid password. Password must be at least 8 characters long and include a lowercase letter, an uppercase letter, a number, and a special character (!, @, #, $, %, ^, &, *).'
		// 		)
		// 	);

		setUser('');
		setPassword('');

		const res = await login(email, password);

		if (res.status !== 204) return timeoutError(setError, 'Invalid credentials.');

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
			<p className='text-red-500 mt-5 text-center'>{error}</p>
		</div>
	);
};

export default Page;
