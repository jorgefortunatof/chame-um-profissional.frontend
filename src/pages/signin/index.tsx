import { useCallback, useEffect, useRef } from 'react';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Link from 'next/link';
import { useRouter } from 'next/router';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {
	Container,
	Card,
	SignInButton,
	SignUpButton,
	Error,
} from '../../styles/pages/signin';
import getValidationErros from '../../utils/getValidationError';

import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useUser } from '../../hooks/user';

interface SignInFormData {
	email: string;
	password: string;
}

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const router = useRouter();

	const { user } = useUser();
	const { signIn, error } = useAuth();

	useEffect(() => {
		if (user?.id) {
			router.push('/');
		}
	}, [user, router]);

	const handleSubmit = useCallback(
		async (data: SignInFormData) => {
			try {
				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					email: Yup.string()
						.required('E-mail obrigatório')
						.email('Digite um e-mail válido'),
					password: Yup.string().required('Senha obrigatória'),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				const { email, password } = data;

				signIn({ email, password });
			} catch (err) {
				const errors = getValidationErros(err);
				formRef.current?.setErrors({ ...errors });
				console.log({ err });
			}
		},
		[signIn],
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
							<Input name="password" type="password" placeholder="Senha" />

							<SignInButton type="submit">Entrar</SignInButton>
							{error && <Error>{`${error}!`}</Error>}
						</Form>

						{/* <a href="/">Esqueceu a senha ?</a> */}
						<hr />
						<SignUpButton type="button" onClick={() => Router.push('/signup')}>
							Cadastrar
						</SignUpButton>
					</main>
				</Card>
			</Container>
		</DefaultTemplate>
	);
};

export default SignIn;
