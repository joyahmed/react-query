import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/layout';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</QueryClientProvider>
	);
}

export default MyApp;
