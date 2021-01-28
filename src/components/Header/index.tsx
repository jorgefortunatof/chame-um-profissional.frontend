import { SyntheticEvent, useCallback, useState } from 'react';

import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

import { useRouter } from 'next/router';
import {
	Container,
	LogoContainer,
	SearchBarContainer,
	AuthContainer,
	HamburguerContainer,
	MobileMenuContainer,
} from './styles';

import Logo from '../../assets/logo.svg';
import LogoSmall from '../../assets/logo-small.svg';

const Header: React.FC = () => {
	const router = useRouter();

	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [search, setSearch] = useState<string>();

	const handleSearch = useCallback(
		async (event: SyntheticEvent) => {
			event.preventDefault();

			if (!search) return;

			router.push(`/professional?search=${search}`);
		},
		[router, search],
	);

	return (
		<>
			<Container>
				<LogoContainer>
					<Link href="/">
						<a href="/">
							<Logo />
						</a>
					</Link>
					<Link href="/">
						<a href="/">
							<LogoSmall />
						</a>
					</Link>
				</LogoContainer>

				<SearchBarContainer onSubmit={handleSearch}>
					<input
						value={search}
						onChange={action => setSearch(action.target.value)}
						type="text"
						placeholder="Busque por profissionais ou serviços..."
					/>
					<button type="submit">
						<FiSearch />
					</button>
				</SearchBarContainer>

				<AuthContainer>
					<Link href="entrar">
						<a href="entrar">Entrar</a>
					</Link>
					<Link href="cadastrar">
						<a href="cadastrar">Cadastrar</a>
					</Link>
				</AuthContainer>

				<HamburguerContainer onClick={() => setShowMenu(!showMenu)}>
					{showMenu ? <FiX /> : <FiMenu />}
				</HamburguerContainer>
			</Container>

			{showMenu && (
				<MobileMenuContainer>
					<div>
						<Link href="entrar">
							<a href="entrar">Entrar</a>
						</Link>
						<Link href="cadastrar">
							<a href="cadastrar">Cadastrar</a>
						</Link>
					</div>
				</MobileMenuContainer>
			)}
		</>
	);
};

export default Header;
