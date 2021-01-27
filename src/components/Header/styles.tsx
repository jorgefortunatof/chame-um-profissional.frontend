import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: ${colors.darker};
	padding: 15px 40px;
`;

export const LogoContainer = styled.div`
	a:last-child {
		display: none;
	}

	svg {
		width: 180px;

		margin-right: 20px;
		height: auto;
	}

	@media (max-width: 800px) {
		a:first-child {
			display: none;
		}

		a:last-child {
			display: block;
		}

		svg {
			width: 40px;
			height: auto;
		}
	}
`;

export const SearchBarContainer = styled.div`
	width: 100%;
	max-width: 460px;
	height: 40px;

	justify-content: center;
	align-items: center;
	display: flex;

	input {
		width: 85%;
		height: 100%;
		padding: 10px;
		border: none;
	}

	button {
		width: 15%;
		height: 100%;
		border: none;

		justify-content: center;
		align-items: center;
		display: flex;
	}
`;

export const AuthContainer = styled.div`
	color: ${colors.lighter};
	margin-left: 20px;

	a + a {
		background-color: ${colors.primary};
		padding: 6px 8px;
		margin-left: 10px;
		border-radius: 4px;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;

export const HamburguerContainer = styled.div`
	justify-content: center;
	display: flex;

	color: ${colors.lighter};
	margin-left: 20px;
	font-size: 30px;

	svg {
		cursor: pointer;
	}

	@media (min-width: 800px) {
		display: none;
	}
`;

export const MobileMenuContainer = styled.nav`
	background-color: ${colors.dark};
	color: ${colors.lighter};

	> a {
		border-top: 1px solid ${colors.light};

		display: block;
		padding: 20px 40px;
	}

	> div {
		border-top: 1px solid ${colors.light};

		padding: 20px 40px;

		display: flex;
		justify-content: center;
		align-items: center;

		background-color: ${colors.darker};

		a + a {
			background-color: ${colors.primary};
			padding: 6px 8px;
			margin-left: 10px;
			border-radius: 4px;
		}
	}

	&::before {
		content: '';
		width: 0;
		height: 0;

		position: absolute;
		top: 65px;
		right: 45px;

		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid ${colors.lighter};
	}

	@media (min-width: 800px) {
		display: none;
	}
`;
