import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<div>
				<img src="" alt="logo" />
				<span>CHAME UM PROFISSIONAL</span>
			</div>
			<div>
				<input type="text" />
				<button type="button">
					<FiSearch />
				</button>
			</div>
			<div>
				<Link href="entrar">
					<a href="entrar">Entrar</a>
				</Link>
				<Link href="cadastrar">
					<a href="cadastrar">Cadastrar</a>
				</Link>
			</div>
		</Container>
	);
};

export default Header;
