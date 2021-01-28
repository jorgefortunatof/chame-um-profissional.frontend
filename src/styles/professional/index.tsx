import styled, { css } from 'styled-components';
import colors from '../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	min-height: 100vh;

	h1 {
		font-weight: 300;
		color: ${colors.dark};
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

export const PaginationContainer = styled.div`
	display: flex;
	flex: 1;

	justify-content: center;
	align-items: flex-end;

	ul {
		margin-bottom: 40px;
	}
`;

export const PageLink = styled.a<{ disabled: boolean }>`
	margin-right: 10px;
	padding: 10px;

	background-color: ${colors.lighter};
	color: ${colors.dark};

	${props =>
		props.disabled &&
		css`
			cursor: default;
			pointer-events: none;
			background-color: ${colors.dark};
			color: ${colors.light};
		`}
`;
