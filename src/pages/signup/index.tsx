import { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Link from 'next/link';
import Router from 'next/router';
import { AxiosError } from 'axios';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { Container, Card, SignUpButton, Error } from '../../styles/signup';
import getValidationErros from '../../utils/getValidationError';

import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface SignInFormData {
	email: string;
	name: string;
	password: string;
}

const SignIn: React.FC = () => {
	const [error, setError] = useState<string>('');

	const formRef = useRef<FormHandles>(null);
	const { user, signIn } = useAuth();

	if (user) {
		Router.push('/');
	}

	const signUp = useCallback(
		async ({ email, name, password }: SignInFormData) => {
			try {
				await api.post('/signup', { email, name, password });
				signIn({ email, password });
			} catch (err) {
				const axiosError: AxiosError<{ message: string }> = err;
				if (axiosError) {
					setError(axiosError.response?.data.message);
				}
			}
		},
		[signIn],
	);

	const handleSubmit = useCallback(
		async (data: SignInFormData) => {
			try {
				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					email: Yup.string()
						.required('E-mail obrigatório')
						.email('Digite um e-mail válido'),
					name: Yup.string().required('Nome obrigatório'),
					password: Yup.string().min(6, 'Mínimo de 6 digitos'),
					confirmPassword: Yup.string().oneOf(
						[Yup.ref('password'), null],
						'As senhas devem ser iguais',
					),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				const { email, name, password } = data;
				await signUp({ email, name, password });
			} catch (err) {
				const errors = getValidationErros(err);
				formRef.current?.setErrors({ ...errors });
				console.log(err);
			}
		},
		[signUp],
	);

	return (
		<DefaultTemplate>
			<Container>
				<Card>
					<header>
						<Link href="/">
							<a href="/">
								<Logo />
							</a>
						</Link>
					</header>

					<main>
						<Form ref={formRef} onSubmit={handleSubmit}>
							<Input name="email" placeholder="E-mail" />
							<Input name="name" placeholder="Nome" />

							<hr />

							<Input name="password" type="password" placeholder="Senha" />
							<Input
								name="confirmPassword"
								type="password"
								placeholder="Repetir senha"
							/>

							<SignUpButton type="submit">Cadastrar</SignUpButton>
							{error && <Error>{`${error}!`}</Error>}
						</Form>
					</main>
				</Card>
			</Container>
		</DefaultTemplate>
	);
};

export default SignIn;
