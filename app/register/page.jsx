'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@nextui-org/react';
import { isValidEmail, timeoutError } from '@/services/lib/helpers';
import register from '@/services/firebase/register';

const darkStyle = {
	color: 'white'
};

const Page = () => {
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const handleSubmit = async () => {
		if (!isValidEmail(email)) return timeoutError(setEmailError, 'Invalid email.');
		// if (!isValidPassword(password))
		// 	return timeoutError(
		// 		setPasswordError(
		// 			'Invalid password. Password must be at least 8 characters long and include a lowercase letter, an uppercase letter, a number, and a special character (!, @, #, $, %, ^, &, *).'
		// 		)
		// 	);

		setPassword('');

		const res = await register(email, password);

		if (res.status === 201) {
			router.push('/login');
		}
	};
	return (
		<div class="flex flex-col h-screen justify-center items-center">
		<div className='p-10 flex flex-col place-items-center bg-black align-middle rounded-lg'>
			<p className='font-medium text-2xl text-white mb-5'>Create An Account</p>

			<div className='flex flex-col md:flex-col gap-5 text-white'>
				<Input
					style={darkStyle}
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
					style={darkStyle}
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

			<Button onPress={handleSubmit} className='bg-gray-400 rounded-md text-white px-4 py-3 mt-10'>
				Create Account
			</Button>
		</div>
		</div>
	);
};

export default Page;

//p-10 flex flex-col