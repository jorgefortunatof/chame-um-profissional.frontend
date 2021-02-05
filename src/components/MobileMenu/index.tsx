import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';
import { MobileSignedMenu, MobileSignInMenu } from './styles';

interface Props {
	showMenu: boolean;
	onBlur(): void;
}

const MobileMenu: React.FC<Props> = ({ showMenu, onBlur }) => {
	const navRef = useRef<HTMLDivElement>(null);
	const { user, signOut } = useAuth();

	useEffect(() => {
		function handleClickOutside(event) {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setTimeout(() => onBlur(), 100);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [navRef, onBlur]);

	if (showMenu) {
		if (user) {
			return (
				<MobileSignedMenu ref={navRef}>
					<a href="profile">
						<FaUserCircle />
						<span>Meu Perfil</span>
					</a>

					<a onClick={signOut} href="/">
						Sair
					</a>
				</MobileSignedMenu>
			);
		}
		return (
			<MobileSignInMenu tabIndex={0} ref={navRef}>
				<Link href="signin">
					<a href="signin">Entrar</a>
				</Link>
				<Link href="signup">
					<a href="signup">Cadastrar</a>
				</Link>
			</MobileSignInMenu>
		);
	}

	return null;
};

export default MobileMenu;
