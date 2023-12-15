
/* eslint-disable new-cap */
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {NavBar} from '@/components/NavBar';
import {QueryClientProvider} from 'react-query';
import {Provider} from '@/components/Provider';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' data-theme='light'>
			<body className={inter.className}>
				<Provider>
					<NavBar/>
					<div className='container h-full pt-12'>
						{children}
					</div>
				</Provider>

			</body>
		</html>
	);
}
