import { useEffect, useRef, useState, useCallback } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';
import colors from '../../styles/colors';

interface Props extends InputProps {
	name: string;
	icon?: React.ComponentType<IconBaseProps>;
}

const InputMask: React.FC<Props> = ({ name, icon: Icon, mask, ...rest }) => {
	const inputRef = useRef(null);

	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [maskState, setMaskState] = useState<string | (string | RegExp)[]>('');

	const { fieldName, registerField, defaultValue, error } = useField(name);

	useEffect(() => {
		setMaskState(mask);
	}, [defaultValue, mask]);

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
			<ReactInputMask
				mask={maskState}
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

export default InputMask;
