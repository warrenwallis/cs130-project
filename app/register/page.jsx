'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@nextui-org/react';
import { isValidEmail, isValidPassword, timeoutError } from '@/services/lib/helpers';
import register from '@/services/firebase/register';

const Page = () => {
	const router = useRouter();

	const [user, setUser] = useState('');

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

		setUser('');
		setPassword('');

		const res = await register(email, password);

		if (res.status === 201) {
			router.push('/login');
		}
	};
	return (
		<div className='p-10 flex flex-col'>
			<p className='font-medium text-2xl mb-5'>Register for OML Copilot</p>

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
				Register
			</Button>
		</div>
	);
};

export default Page;
