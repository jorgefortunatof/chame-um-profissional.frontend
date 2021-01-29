import { Form } from '@unform/web';

import { useRef } from 'react';
import { FormHandles } from '@unform/core';
import DefaultTemplate from '../templates/DefaultTemplate';
import { Container, Card, SignInButton, SignUpButton } from '../styles/signin';

import Logo from '../assets/logo.svg';
import Input from '../components/Input';

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	return (
		<DefaultTemplate>
			<Container>
				<Card>
					<header>
						<Logo />
					</header>

					<main>
						<Form ref={formRef} onSubmit={() => {}}>
							<Input name="email" placeholder="E-mail" />
							<Input name="password" placeholder="Senha" />

							<SignInButton>Entrar</SignInButton>
						</Form>

						<a href="/">Esqueceu a senha ?</a>
						<hr />
						<SignUpButton>Cadastrar</SignUpButton>
					</main>
				</Card>
			</Container>
		</DefaultTemplate>
	);
};

export default SignIn;
