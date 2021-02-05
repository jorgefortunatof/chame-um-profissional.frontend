import styled from 'styled-components';
import colors from '../../styles/colors';

export const MobileSignInMenu = styled.nav`
	width: 200px;

	position: absolute;
	right: 0;

	background-color: ${colors.darker};
	color: ${colors.lighter};

	display: flex;
	justify-content: center;
	align-items: center;

	border-top: 1px solid ${colors.light};
	padding: 20px 40px;

	a + a {
		background-color: ${colors.primary};
		padding: 6px 8px;
		margin-left: 10px;
		border-radius: 4px;
	}

	&::before {
		content: '';
		width: 0;
		height: 0;

		position: absolute;
		top: -10px;
		right: 45px;

		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid ${colors.lighter};
	}

	@media (min-width: 1000px) {
		display: none;
	}
`;

export const MobileSignedMenu = styled.nav`
	width: 200px;
	position: absolute;
	right: 0;
	background-color: ${colors.dark};
	color: ${colors.lighter};

	display: flex;
	flex-direction: column;

	&::before {
		content: '';
		width: 0;
		height: 0;

		position: absolute;
		top: -10px;
		right: 45px;

		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid ${colors.lighter};
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;

		border-top: 1px solid white;
		padding: 20px;

		svg {
			font-size: 26px;
			margin-right: 4px;
		}
	}
`;
