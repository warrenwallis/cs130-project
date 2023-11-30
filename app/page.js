import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants';
import Link from 'next/link';

export default function Page() {
	return (
		<main>
			<h1>Starting Page</h1>
			<div>*Insert About Information Here*</div>
			<Link href='/login'>Login</Link>
		</main>
	);
}
