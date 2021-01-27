import styled from 'styled-components';
import colors from '../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	min-height: 100vh;
	background-color: ${colors.light};
`;

export const CategoriesSection = styled.section`
	padding: 20px 40px;

	h1 {
		font-weight: 200;
		color: ${colors.dark};
	}

	ul {
		overflow-x: scroll;
		white-space: nowrap;

		display: flex;
		flex-direction: row;

		a {
			display: block;
			margin: 20px 20px;
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
