import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';

import { AuthProvider } from '../hooks/auth';
import { UserProvider } from '../hooks/user';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<GlobalStyle />
		<AuthProvider>
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</AuthProvider>
	</>
);

export default MyApp;
