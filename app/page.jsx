import Link from 'next/link';

const Page = () => {
	return (
		<div className='p-10 flex flex-col'>
			<p className='text-2xl font-medium mb-5'>OML Copilot</p>

			<div className='flex gap-5'>
				<Link href='/login'>Login</Link>
				<Link href='/register'>Register</Link>
			</div>
		</div>
	);
};

export default Page;
