import DefaultTemplate from '../templates/DefaultTemplate';

import { CategoriesSection, Container } from '../styles/home';

const Home: React.FC = () => (
	<DefaultTemplate hasHeader>
		<Container>
			<CategoriesSection>
				<ul>
					<a href="/?search=teste">teste</a>
					<a href="/?search=teste">teste</a>
					<a href="/?search=teste">teste</a>
					<a href="/?search=teste">teste</a>
					<a href="/?search=teste">teste</a>
				</ul>
			</CategoriesSection>
		</Container>
	</DefaultTemplate>
);

export default Home;
