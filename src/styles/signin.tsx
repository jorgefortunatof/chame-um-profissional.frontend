import styled from 'styled-components';
import Button from '../components/Button';
import colors from './colors';

export const Container = styled.div`
	min-height: 100vh;
	padding: 20px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.div`
	width: 100%;
	max-width: 520px;

	background-color: ${colors.lighter};

	border-radius: 8px;

	header {
		background-color: ${colors.darker};
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
		padding: 20px;

		svg {
			width: 40%;
		}
	}

	main {
		padding: 20px;
		text-align: center;

		a {
			display: block;
			color: ${colors.dark};
			margin-bottom: 10px;
		}
	}

	form {
		display: flex;
		flex-direction: column;
	}
`;

export const SignInButton = styled(Button)`
	background-color: ${colors.darker};
	color: ${colors.lighter};
`;

export const SignUpButton = styled(Button)`
	background-color: ${colors.primary_lighter};
	color: ${colors.lighter};

	max-width: 200px;
`;
