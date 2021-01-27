import {
	FaUserCircle,
	FaAddressCard,
	FaBriefcase,
	FaMapMarkerAlt,
} from 'react-icons/fa';
import DefaultTemplate from '../templates/DefaultTemplate';

import {
	Container,
	CategoriesSection,
	ProfessionalSection,
	ProfessionalCard,
} from '../styles/home';

const categorias = [
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

const profissionais = [
	{
		id: 1,
		name: 'Jorge Luiz Fortunato Filho',
		category: 'Programador',
		location: 'Capivari de Baixo',
	},
	{
		id: 2,
		name: 'Jonas moreira',
		category: 'Designer',
		location: 'Tubarão',
	},
	{
		id: 3,
		name: 'Caio diniz',
		category: 'Fotográfo',
		location: 'Capivari de Baixo',
	},
	{
		id: 4,
		name: 'Douglas de Bem',
		category: 'Cabeleleiro',
		location: 'Capivari de Baixo',
	},
	{
		id: 5,
		name: 'João vitor',
		category: 'Lutador',
		location: 'Laguna',
	},
	{
		id: 6,
		name: 'Cauã',
		category: 'Desenvolvedor web',
		location: 'Imbituba',
	},
];

const Home: React.FC = () => (
	<DefaultTemplate hasHeader>
		<Container>
			<CategoriesSection>
				<h1>Categorias</h1>
				<ul>
					{categorias.map(cat => (
						<a key={cat.id} href={`/?search=${cat.name}`}>
							{cat.name}
						</a>
					))}
				</ul>
			</CategoriesSection>

			<ProfessionalSection>
				<h1>Destaques</h1>
				<ul>
					{profissionais.map(pro => (
						<ProfessionalCard>
							<FaUserCircle />
							<div>
								<FaAddressCard />
								<span>{pro.name}</span>
							</div>
							<div>
								<FaBriefcase />
								<span>{pro.category}</span>
							</div>
							<div>
								<FaMapMarkerAlt />
								<span>{pro.location}</span>
							</div>
						</ProfessionalCard>
					))}
				</ul>
			</ProfessionalSection>

			<ProfessionalSection>
				<h1>Próximos de você</h1>
				<ul>
					{profissionais.map(pro => (
						<ProfessionalCard>
							<FaUserCircle />
							<div>
								<FaAddressCard />
								<span>{pro.name}</span>
							</div>
							<div>
								<FaBriefcase />
								<span>{pro.category}</span>
							</div>
							<div>
								<FaMapMarkerAlt />
								<span>{pro.location}</span>
							</div>
						</ProfessionalCard>
					))}
				</ul>
			</ProfessionalSection>
		</Container>
	</DefaultTemplate>
);

export default Home;
