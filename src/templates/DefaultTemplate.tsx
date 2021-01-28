import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

interface DefaultTemplateProps {
	hasHeader: boolean;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
	children,
	hasHeader,
}) => {
	return (
		<>
			<Head>
				<title>Chame um Profissional</title>
				<link rel="icon" href="/favicon.svg" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Russo+One&display=swap"
					rel="stylesheet"
				/>
			</Head>

			{hasHeader && <Header />}
			{children}
			<Footer />
		</>
	);
};

export default DefaultTemplate;
