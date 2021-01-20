import Head from 'next/head';

import { Container } from '../styles/home';
import Header from '../components/Header';

const Home: React.FC = () => (
	<Container>
		<Head>
			<title>Chame um Profissional</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Header />
	</Container>
);

export default Home;
