import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import colors from '../colors';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 1200px;
	min-height: 100vh;

	margin: 0 auto;

	h1 {
		font-weight: 300;
		color: ${colors.dark};
	}
`;

export const ProfessionalSection = styled.section`
	padding: 20px 40px;

	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;

export const ProfessionalCard = styled.a`
	flex: 1;
	display: flex;
	flex-direction: row;

	margin: 20px;
	padding: 24px;

	color: ${colors.dark};
	background-color: ${colors.lighter};
	border: 2px solid ${colors.lighter};
	border-radius: 6px;

	&:hover {
		border: 2px solid ${colors.dark};
	}

	> div:first-child {
		display: flex;
		justify-content: center;
		align-items: center;

		> svg {
			font-size: 120px;
		}
	}

	div {
		flex: 1;
		margin-bottom: 5px;

		svg {
			margin-right: 10px;
		}
	}

	p {
		color: ${lighten(0.1, colors.dark)};
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
