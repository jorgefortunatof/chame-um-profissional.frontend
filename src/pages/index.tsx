import DefaultTemplate from '../templates/DefaultTemplate';

import { CategoriesSection, Container } from '../styles/home';

const lista = [
	{ name: 'Programador', id: 1 },
	{ name: 'Eletrotécnico', id: 2 },
	{ name: 'Designer', id: 3 },
	{ name: 'Fotográfo', id: 4 },
	{ name: 'Mecanico', id: 5 },
	{ name: 'Pintor', id: 6 },
	{ name: 'Encanador', id: 7 },
	{ name: 'Arquiteto', id: 8 },
	{ name: 'Pedreiro', id: 9 },
];

const Home: React.FC = () => (
	<DefaultTemplate hasHeader>
		<Container>
			<CategoriesSection>
				<h1>Categorias</h1>
				<ul>
					{lista.map(pro => (
						<a key={pro.id} href={`/?search=${pro.name}`}>
							{pro.name}
						</a>
					))}
				</ul>
			</CategoriesSection>
		</Container>
	</DefaultTemplate>
);

export default Home;
