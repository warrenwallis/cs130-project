'use client';
import signout from '@/services/firebase/signout';
import Link from 'next/link';

const NavigationTab = () => {
	return (
		<div className='flex flex-col fixed top-0 left-0 h-full items-center border-r-2 border-slate-100 justify-between'>
			<div className=''>
				<Link href='/home'>
					<p className='p-4 cursor-pointer hover:bg-sky-50 w-40 text-center'>Home</p>
				</Link>
				<Link href='/support'>
					<p className='p-4 cursor-pointer hover:bg-sky-50 w-40 text-center'>Support</p>
				</Link>
			</div>
			<Link href='/'>
				<p onClick={signout} className='p-4 cursor-pointer hover:bg-sky-50 w-40 text-center'>
					Log Out
				</p>
			</Link>
		</div>
	);
};

export default NavigationTab;
