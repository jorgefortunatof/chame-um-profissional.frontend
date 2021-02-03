import { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { FaUserCircle } from 'react-icons/fa';
import DefaultTemplate from '../../templates/DefaultTemplate';

import {
	Container,
	FormCard,
	SaveButton,
	ProfileContainer,
} from '../../styles/pages/profile';

import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import getValidationErros from '../../utils/getValidationError';

interface ProfileData {
	email: string;
	name: string;
	cpf: string;
	phone: string;
	category_id: number;
	decription: string;
}

const Profile: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(async (data: ProfileData) => {
		console.log(data);

		try {
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				email: Yup.string()
					.required('E-mail obrigatório')
					.email('Digite um e-mail válido'),
				name: Yup.string().required('Nome obrigatório'),
				cpf: Yup.string().required('CPF obrigatório'),
				phone: Yup.string(),
				category_id: Yup.number(),
				decription: Yup.string(),
			});

			await schema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			const errors = getValidationErros(err);
			formRef.current?.setErrors({ ...errors });
			console.log(err);
		}
	}, []);

	return (
		<DefaultTemplate hasHeader>
			<Container>
				<h1>Meu perfil</h1>
				<FormCard>
					<Form ref={formRef} onSubmit={handleSubmit}>
						<ProfileContainer>
							<FaUserCircle />
							<img src="" alt="" />
						</ProfileContainer>

						<header>
							<Input name="email" placeholder="E-mail" />
							<Input name="name" placeholder="Nome" />
						</header>

						<main>
							<Input name="cpf" placeholder="Cpf" />
							<Input name="phone" placeholder="Celular" />
							<Select name="category_id">
								<option value="1">programador</option>
								<option value="2">mecânico</option>
								<option value="3">pedreiro</option>
								<option value="4">motorista</option>
							</Select>
							<TextArea rows={5} name="description" placeholder="Descrição" />
						</main>

						<footer>
							<SaveButton type="submit">Salvar</SaveButton>
						</footer>
					</Form>
				</FormCard>
			</Container>
		</DefaultTemplate>
	);
};

export default Profile;
