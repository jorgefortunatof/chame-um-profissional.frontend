import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import {
	FaUserCircle,
	FaAddressCard,
	FaBriefcase,
	FaMapMarkerAlt,
} from 'react-icons/fa';

import api from '../../services/api';
import DefaultTemplate from '../../templates/DefaultTemplate';

import {
	Container,
	ProfessionalSection,
	ProfessionalCard,
} from '../../styles/professional';

interface Professional {
	id: number;
	name: string;
	location: string;
	category: { id: number; name: string };
}

const Professionals: React.FC = () => {
	const router = useRouter();
	const { search } = router.query;

	const [professionals, setProfessionals] = useState<Professional[]>([]);

	const getData = useCallback(async () => {
		const response = await api.get(`/professional?search=${search}`);
		setProfessionals(response.data.data);
	}, [search, setProfessionals]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<DefaultTemplate hasHeader>
			<Container>
				<ProfessionalSection>
					{professionals.length ? (
						<h1>{`Resultados para: ${search}`}</h1>
					) : (
						<h1>{`Nenhum resultado encontrado para: ${search}`}</h1>
					)}

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

export default Professionals;
