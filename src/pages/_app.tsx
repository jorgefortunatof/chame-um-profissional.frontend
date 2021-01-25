import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<GlobalStyle />
		<Component {...pageProps} />
	</>
);

export default MyApp;
