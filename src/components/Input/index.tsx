import {
	InputHTMLAttributes,
	useEffect,
	useRef,
	useState,
	useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';
import colors from '../../styles/colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	const { error, fieldName, defaultValue, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);

		setIsFilled(!!inputRef.current?.value);
	}, []);

	return (
		<Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
			{Icon && <Icon />}
			<input
				onBlur={handleInputBlur}
				onFocus={() => setIsFocused(true)}
				defaultValue={defaultValue}
				ref={inputRef}
				{...rest}
			/>
			{error && (
				<Error title={error}>
					<FiAlertCircle color={colors.error} size={20} />
				</Error>
			)}
		</Container>
	);
};

export default Input;
