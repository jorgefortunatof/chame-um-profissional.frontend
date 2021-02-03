import { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<SelectProps> = ({
	name,
	icon: Icon,
	children,
	...rest
}) => {
	const inputRef = useRef<HTMLSelectElement>(null);
	const { fieldName, defaultValue, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<Container>
			{Icon && <Icon />}
			<select defaultValue={defaultValue} ref={inputRef} {...rest}>
				{children}
			</select>
		</Container>
	);
};

export default Input;
