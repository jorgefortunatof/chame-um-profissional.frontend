import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.button`
	height: 56px;
	width: 100%;

	margin: 10px 0;
	padding: 0 16px;

	border-radius: 10px;
	border: none;
	outline: none;

	font-weight: 600;
	font-size: 20px;

	transition: background-color 0.2s;
	background-color: ${colors.primary_lighter};

	&:hover {
		background-color: ${shade(0.2, colors.primary_lighter)};
	}
`;
