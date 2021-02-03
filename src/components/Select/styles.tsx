import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.div`
	width: 100%;

	border: 2px solid ${lighten(0.2, colors.light)};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;

	color: ${colors.light};
	background: ${colors.light};

	display: flex;
	align-items: center;

	& + div {
		margin-top: 10px;
	}

	select {
		font-size: 20px;
		color: ${colors.dark};

		flex: 1;
		background: transparent;
		border: none;
		outline: none;

		margin-right: 14px;
		padding: 14px;

		&:-webkit-autofill {
			transition: background-color 50000s ease-in-out 0s;
			-webkit-box-shadow: ${colors.light};
			box-shadow: ${colors.light};
			-webkit-text-fill-color: ${colors.dark} !important;
		}
		&::placeholder {
			color: ${colors.dark};
		}
	}
`;
