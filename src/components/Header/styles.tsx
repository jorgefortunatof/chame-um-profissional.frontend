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

	@media (max-width: 900px) {
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

export const SearchBarContainer = styled.form`
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

	display: inline-flex;
	justify-content: center;
	align-items: center;

	label {
		display: inline-flex;
		align-items: center;

		span {
			margin-right: 5px;
		}

		input {
			width: 0;
			height: 0;
			opacity: 0;
		}

		svg:first-child {
			font-size: 30px;
			margin-right: 5px;
		}
	}

	a + a {
		background-color: ${colors.primary};
		padding: 6px 8px;
		margin-left: 10px;
		border-radius: 4px;
	}

	@media (max-width: 1000px) {
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

	@media (min-width: 1000px) {
		display: none;
	}
`;
