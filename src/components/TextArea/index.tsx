import {
	TextareaHTMLAttributes,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
	icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<TextAreaProps> = ({ name, icon: Icon, ...rest }) => {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const { fieldName, defaultValue, registerField } = useField(name);

	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

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
		<Container isFilled={isFilled} isFocused={isFocused}>
			{Icon && <Icon />}
			<textarea
				onBlur={handleInputBlur}
				onFocus={() => setIsFocused(true)}
				defaultValue={defaultValue}
				ref={inputRef}
				{...rest}
			/>
		</Container>
	);
};

export default Input;
