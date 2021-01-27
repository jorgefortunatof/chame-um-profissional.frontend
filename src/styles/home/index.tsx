import styled from 'styled-components';
import colors from '../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 1200px;
	min-height: 100vh;

	margin: 0 auto;
	padding: 20px 0;

	h1 {
		font-weight: 300;
		color: ${colors.dark};
	}
`;

export const CategoriesSection = styled.section`
	padding: 20px 40px;

	ul {
		margin: 20px;
		overflow-x: scroll;
		white-space: nowrap;

		display: flex;
		flex-direction: row;

		a {
			display: block;
			margin: 20px 20px 20px 0;
			padding: 10px 40px;

			flex: 1;
			display: flex;
			justify-content: center;

			color: ${colors.dark};
			background-color: ${colors.lighter};
			border: 2px solid ${colors.dark};
			border-radius: 6px;

			cursor: pointer;

			&:hover {
				background-color: ${colors.light};
			}
		}
	}
`;

export const ProfessionalSection = styled.section`
	padding: 20px 40px;

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export const ProfessionalCard = styled.a`
	flex: 1;
	min-width: 280px;
	margin: 20px;
	padding: 24px;

	color: ${colors.dark};
	background-color: ${colors.lighter};
	border: 2px solid ${colors.lighter};
	border-radius: 6px;

	&:hover {
		border: 2px solid ${colors.dark};
	}

	> svg {
		width: 100%;
		font-size: 120px;
		margin-bottom: 20px;
	}

	div {
		margin-bottom: 5px;
		span {
		}

		svg {
			margin-right: 10px;
		}
	}
`;
