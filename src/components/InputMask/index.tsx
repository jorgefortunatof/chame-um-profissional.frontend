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

import InputMask from 'react-input-mask';
import { Container, Error } from './styles';
import colors from '../../styles/colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	mask: string;
	icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, mask, ...rest }) => {
	const inputRef = useRef(null);

	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	const { error, fieldName, defaultValue, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
			setValue(ref: any, value: string) {
				ref.setInputValue(value);
			},
			clearValue(ref: any) {
				ref.setInputValue('');
			},
		});
	}, [fieldName, registerField]);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);

		setIsFilled(!!inputRef.current?.value);
	}, []);

	return (
		<Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
			{Icon && <Icon />}
			<InputMask
				mask={mask}
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
