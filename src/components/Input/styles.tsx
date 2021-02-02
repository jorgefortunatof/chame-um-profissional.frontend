import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import colors from '../../styles/colors';

import Tooltip from '../Tooltip';

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
	isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
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

	${props =>
		props.isErrored &&
		css`
			border-color: ${colors.error};
		`}
	${props =>
		props.isFilled &&
		css`
			color: ${colors.dark};
		`}
	${props =>
		props.isFocused &&
		css`
			color: ${colors.dark};
			border-color: ${lighten(0.2, colors.dark)};
		`}

	input {
		font-size: 20px;
		color: ${colors.dark};

		flex: 1;
		background: transparent;
		border: none;
		outline: none;

		padding: 14px;

		&:-webkit-autofill {
			transition: background-color 50000s ease-in-out 0s;
			-webkit-box-shadow: ${colors.light};
			box-shadow: ${colors.light};
			-webkit-text-fill-color: ${colors.light} !important;
		}
		&::placeholder {
			color: ${colors.dark};
		}
	}
	svg {
		margin-right: 16px;
	}
`;

export const Error = styled(Tooltip)`
	height: 20px;
	margin-right: 20px;

	svg {
		margin: 0;
	}

	span {
		background: ${colors.error};
		color: ${colors.lighter};

		&::before {
			border-color: ${colors.error} transparent;
		}
	}
`;
