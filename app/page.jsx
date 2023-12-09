import Link from 'next/link';

//the landing page. Has a login and register
const Page = () => {
	return (
		<div className='flex flex-col h-screen justify-center bg-slate-100'>
			<p className='text-2xl font-medium mb-5 text-center text-slate-800'>Get Started with OML Copilot</p>
			<div className='flex gap-5 w-50 justify-center '>
				<Link className='p-5 rounded-lg bg-black text-white hover:text-slate-900 hover:bg-slate-400' href='/login'>Login</Link>
				<Link className='p-5 rounded-lg bg-black text-white hover:text-slate-900 hover:bg-slate-400' href='/register'>Register</Link>
			</div>
		</div>
	);
};

export default Page;
