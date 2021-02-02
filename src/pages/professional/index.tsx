import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import {
	FaUserCircle,
	FaAddressCard,
	FaBriefcase,
	FaMapMarkerAlt,
} from 'react-icons/fa';

import Link from 'next/link';
import { AxiosError } from 'axios';
import api from '../../services/api';
import DefaultTemplate from '../../templates/DefaultTemplate';

import {
	Container,
	ProfessionalSection,
	ProfessionalCard,
	PaginationContainer,
	PageLink,
} from '../../styles/professional';

interface Professional {
	id: number;
	name: string;
	location: string;
	description: string;
	category: { id: number; name: string };
}

interface PageData {
	page: number;
	lastPage: number;
}

const Professionals: React.FC = () => {
	const router = useRouter();
	const { search, p } = router.query;

	const [professionals, setProfessionals] = useState<Professional[]>([]);
	const [pageData, setPageData] = useState<PageData>(null);

	const getData = useCallback(async () => {
		try {
			const response = await api.get(`/professional?search=${search}`, {
				headers: { page: p || 1 },
			});

			const { data, page, lastPage } = response.data;

			setPageData({ page, lastPage });
			setProfessionals(data);
		} catch (err) {
			const axiosError: AxiosError<{ message: string }> = err;
			if (axiosError) {
				// tratar
			}
		}
	}, [search, p, setProfessionals, setPageData]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<DefaultTemplate hasHeader>
			<Container>
				<ProfessionalSection>
					{search &&
						(professionals.length ? (
							<h1>{`${professionals.length} resultado(s) para: ${search}`}</h1>
						) : (
							<h1>{`Nenhum resultado encontrado para: ${search}`}</h1>
						))}

					<ul>
						{professionals.map((pro: Professional) => (
							<ProfessionalCard key={pro.id}>
								<div>
									<FaUserCircle />
								</div>

								<div>
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

									<p>{pro.description}</p>
								</div>
							</ProfessionalCard>
						))}
					</ul>
				</ProfessionalSection>

				<PaginationContainer>
					<ul>
						{pageData &&
							Array(pageData.lastPage)
								.fill(null)
								.map((v, i) => {
									const pageIndex = i + 1;

									if (
										pageIndex < pageData.page - 3 ||
										pageIndex > pageData.page + 3
									) {
										return null;
									}

									return (
										<Link
											key={pageIndex}
											href={`/professional?search=${search}&p=${pageIndex}`}
										>
											<PageLink
												disabled={pageIndex === pageData.page}
												href={`/professional?search=${search}&p=${pageIndex}`}
											>
												{pageIndex}
											</PageLink>
										</Link>
									);
								})}
					</ul>
				</PaginationContainer>
			</Container>
		</DefaultTemplate>
	);
};

export default Professionals;
