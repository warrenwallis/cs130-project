import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import NavigationTab from './components/NavigationTab';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'OML GPT',
	description: 'ChatGPT for accessing databases',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<NavigationTab />

					<div className='pl-40'>{children}</div>
				</Providers>
			</body>
		</html>
	);
}
