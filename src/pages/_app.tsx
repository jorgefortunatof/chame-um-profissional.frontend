import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';

import { AuthProvider } from '../hooks/auth';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<AuthProvider>
		<GlobalStyle />
		<Component {...pageProps} />
	</AuthProvider>
);

export default MyApp;
