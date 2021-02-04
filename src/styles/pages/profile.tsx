import styled from 'styled-components';
import Button from '../../components/Button';
import colors from '../colors';

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	min-height: 100vh;

	margin: 0 auto;
	padding: 20px 40px 60px 40px;

	h1 {
		font-weight: 300;
		color: ${colors.dark};
	}
`;

export const FormCard = styled.div`
	background-color: ${colors.lighter};

	border-radius: 6px;
	padding: 40px;

	form {
		header {
			max-width: 800px;
		}

		main {
			margin-top: 20px;
			max-width: 600px;
		}

		footer {
			margin-top: 20px;

			display: flex;
			justify-content: flex-end;
		}
	}
`;

export const SaveButton = styled(Button)`
	background-color: ${colors.primary_lighter};
	color: ${colors.lighter};
	max-width: 200px;
`;

export const ProfileContainer = styled.div`
	margin-bottom: 20px;
	padding: 20px;
`;
