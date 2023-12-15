'use client';
import {QueryClient, QueryClientProvider} from 'react-query';

const query = new QueryClient();
const Provider = ({children}: {
	children: React.ReactNode;
}): JSX.Element => {
	return (
		<QueryClientProvider client={query}>{children}</QueryClientProvider>
	);
};

export {Provider};
