'use client';

import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@nextui-org/react';
import login from '@/services/firebase/login';
import { isValidEmail, timeoutError } from '@/services/lib/helpers';
import Link from 'next/link';

const Page = () => {
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		if (!isValidEmail(email)) return timeoutError(setEmailError, 'Invalid email.');

		setPassword('');

		const res = await login(email, password);

		if (res.status !== 204) return timeoutError(setError, 'Invalid credentials.');

		router.push('/home');
	};
	return (
		<div class="flex flex-col h-screen justify-center items-center bg-black">
			<div className='p-10 flex flex-col place-items-center align-middle rounded-lg bg-white'>
				<p className='font-medium text-2xl mb-5'>Login</p>

				<div className='flex flex-col md:flex-col gap-5'>
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

				<Button onPress={handleSubmit} className='bg-gray-400 rounded-md px-4 py-3 mt-10'>
					Log In
				</Button>
				<p className='text-red-500 mt-5 text-center'>{error}</p>
			</div>
			<br></br>
			<Link href='/register' className='text-white hover:text-slate-400'>Create An Account</Link>
		</div>
	);
};

export default Page;
