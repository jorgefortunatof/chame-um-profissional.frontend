import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
	svg {
		width: 100%;
		font-size: 140px;
		color: ${colors.dark};
	}

	label {
		display: block;
		position: relative;

		width: 130px;
		height: 130px;

		overflow: hidden;

		margin-bottom: 20px;
		border-radius: 50%;

		img {
			min-height: 100%;
			min-width: 100%;
			width: auto;
			height: auto;

			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		input {
			opacity: 0;

			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			&:hover {
				cursor: pointer;
			}
		}
	}
`;
