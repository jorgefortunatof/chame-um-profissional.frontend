import { useState, useEffect, useCallback } from 'react';
import {
	FaUserCircle,
	FaAddressCard,
	FaBriefcase,
	FaMapMarkerAlt,
} from 'react-icons/fa';

import Link from 'next/link';
import DefaultTemplate from '../templates/DefaultTemplate';
import {
	Container,
	CategoriesSection,
	ProfessionalSection,
	ProfessionalCard,
} from '../styles/home';
import api from '../services/api';

interface Category {
	id: number;
	name: string;
}

interface Professional {
	id: number;
	name: string;
	location: string;
	category: Category;
}

const Home: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [professionals, setProfessionals] = useState<Professional[]>([]);
	const [spotlight, setSpotlight] = useState<Professional[]>([]);

	const getData = useCallback(async () => {
		const [
			responseCategories,
			responseProfessionals,
			responseSpotlight,
		] = await Promise.all([
			api.get('/category'),
			api.get('/professional/nextToYou'),
			api.get('/professional/spotlight'),
		]);

		setCategories(responseCategories.data);
		setProfessionals(responseProfessionals.data);
		setSpotlight(responseSpotlight.data);
	}, [setCategories, setProfessionals, setSpotlight]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<DefaultTemplate hasHeader>
			<Container>
				<CategoriesSection>
					<h1>Categorias</h1>
					<ul>
						{categories.map((cat: Category) => (
							<Link key={cat.id} href={`/professional/?search=${cat.name}`}>
								<a href={`/professional/?search=${cat.name}`}>{cat.name}</a>
							</Link>
						))}
					</ul>
				</CategoriesSection>

				<ProfessionalSection>
					<h1>Destaques</h1>
					<ul>
						{spotlight.map((pro: Professional) => (
							<ProfessionalCard key={pro.id}>
								<FaUserCircle />
								<div>
									<FaAddressCard />
									<span>{pro.name}</span>
								</div>
								<div>
									<FaBriefcase />
									<span>{pro.category?.name}</span>
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
						{professionals.map((pro: Professional) => (
							<ProfessionalCard key={pro.id}>
								<FaUserCircle />
								<div>
									<FaAddressCard />
									<span>{pro.name}</span>
								</div>
								<div>
									<FaBriefcase />
									<span>{pro.category?.name}</span>
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
};

export default Home;
