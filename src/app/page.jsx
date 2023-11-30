'use client';
import { React, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
	const errRef = useRef();

	const router = useRouter();

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false); // on success, transport to home page

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user, password);
		setUser('');
		setPassword('');
		setSuccess(true);
		router.push('/home');
	};
	return (
		<div>
			<p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
				{errMsg}
			</p>

			<form className='flex flex-col' onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className='flex gap-5'>
					<label htmlFor='username'>Username: </label>
					<input
						type='text'
						id='username'
						name='username'
						className='information'
						autoComplete='off'
						onChange={(e) => setUser(e.target.value)}
						value={user}
						required
					/>
					<label for='password'>Password: </label>
					<input
						type='password'
						id='password'
						name='password'
						className='information'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</div>
				<button className='' type='submit'>
					Submit
				</button>
				<p>
					Need an Account?
					<br />
					<span className='line'>
						<a href='#'>Sign up</a>
					</span>
				</p>
			</form>
		</div>
	);
};

export default Page;
