import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';

import {
	Container,
	LogoContainer,
	SearchBarContainer,
	AuthContainer,
} from './styles';
import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
	return (
		<Container>
			<LogoContainer>
				<Link href="/">
					<a href="/">
						<Logo />
					</a>
				</Link>
			</LogoContainer>

			<SearchBarContainer>
				<input
					type="text"
					placeholder="Busque por profissionais ou serviços..."
				/>
				<button type="button">
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
		</Container>
	);
};

export default Header;
