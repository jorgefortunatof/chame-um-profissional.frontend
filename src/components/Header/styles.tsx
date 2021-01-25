import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: ${colors.darker};
	padding: 15px 20px;
`;

export const LogoContainer = styled.div`
	svg {
		width: 180px;
		height: auto;
	}
`;

export const SearchBarContainer = styled.div`
	width: 360px;
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
	}
`;

export const AuthContainer = styled.div`
	color: ${colors.lighter};

	a + a {
		background-color: ${colors.primary};
		padding: 6px 8px;
		margin-left: 10px;
		border-radius: 4px;
	}
`;
