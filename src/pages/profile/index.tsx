import { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import DefaultTemplate from '../../templates/DefaultTemplate';
import ProfileAvatar from '../../components/ProfileAvatar';

import {
	Container,
	FormCard,
	SaveButton,
	ProfileContainer,
	Success,
	Error,
} from '../../styles/pages/profile';

import validateCPF from '../../utils/validateCPF';
import getValidationErros from '../../utils/getValidationError';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import { useUser } from '../../hooks/user';
import api from '../../services/api';

interface Category {
	id: number;
	name: string;
}
interface ProfileData {
	email: string;
	name: string;
	cpf?: string;
	phone: string;
	category_id?: number;
	description: string;
	avatar?: File;
}

const Profile: React.FC = () => {
	const [messageTimeout, setMessageTimeout] = useState(null);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const [categories, setCategories] = useState<Category[]>([]);

	const formRef = useRef<FormHandles>(null);
	const router = useRouter();
	const { user, loading, updateUser, updateAvatar } = useUser();

	const getCategories = useCallback(async () => {
		try {
			const response = await api.get<Category[]>(`/category`);

			setCategories(response.data);
		} catch (err) {
			const axiosError: AxiosError<{ message: string }> = err;
			if (axiosError) {
				setError(axiosError.response?.data.message);
			}
		}
	}, []);

	const handleSubmit = useCallback(
		async (data: ProfileData) => {
			try {
				formRef.current.setErrors({});

				const schema = Yup.object().shape({
					email: Yup.string()
						.required('E-mail obrigatório')
						.email('Digite um e-mail válido')
						.trim(''),
					name: Yup.string().required('Nome obrigatório').trim(''),
					cpf: Yup.string()
						// .required('CPF obrigatório')
						.test('cpf', 'CPF inválido', cpf => {
							if (!cpf) return true;
							if (cpf.replace(/_/g, '').length < 14) {
								return false;
							}
							if (!validateCPF(cpf)) {
								return false;
							}
							return true;
						}),
					phone: Yup.string().test('phone', 'Número inválido', phone => {
						if (!phone) return true;
						if (phone.replace(/_/g, '').length < 13) {
							return false;
						}
						return true;
					}),
					category_id: Yup.number(),
					description: Yup.string().trim(''),
				});

				const newData = await schema.validate(data, {
					abortEarly: false,
				});

				if (data.avatar) {
					await updateAvatar(data.avatar);
				}

				await updateUser(newData);
				setSuccess(true);
			} catch (err) {
				const errors = getValidationErros(err);
				formRef.current?.setErrors({ ...errors });

				const axiosError: AxiosError<{ message: string }> = err;
				if (axiosError) {
					setError(axiosError.response?.data.message);
				}
				console.log({ err });
			}
		},
		[updateUser, updateAvatar],
	);

	useEffect(() => {
		if (!loading && !user?.id) {
			router.push('/signin');
		}
	}, [user, loading, router]);

	useEffect(() => {
		getCategories();
	}, [getCategories]);

	useEffect(() => {
		return () => {
			clearTimeout(messageTimeout);
		};
	}, [messageTimeout]);

	useEffect(() => {
		if (success || error) {
			const timeout = setTimeout(() => {
				setSuccess(false);
				setError('');
			}, 3000);
			setMessageTimeout(timeout);
		}
	}, [success, error]);

	return (
		<DefaultTemplate hasHeader>
			<Container>
				<h1>Meu perfil</h1>
				<FormCard>
					<Form
						ref={formRef}
						onSubmit={handleSubmit}
						initialData={{
							...user,
							category_id: user?.category?.id,
							avatar:
								user?.avatar_url &&
								`${process.env.NEXT_PUBLIC_API_URL}${user?.avatar_url}`,
						}}
					>
						<ProfileContainer>
							<ProfileAvatar name="avatar" />
						</ProfileContainer>

						<header>
							<Input name="email" placeholder="E-mail" />
							<Input name="name" placeholder="Nome" />
						</header>

						<main>
							<InputMask mask="999.999.999-99" name="cpf" placeholder="Cpf" />
							<InputMask
								mask="(99)999999999"
								name="phone"
								placeholder="Celular"
							/>
							{!!categories.length && (
								<Select name="category_id">
									<option value={0} hidden>
										Profissão
									</option>
									{categories.map(cat => (
										<option key={cat.id} value={cat.id}>
											{cat.name}
										</option>
									))}
								</Select>
							)}
							<TextArea rows={5} name="description" placeholder="Descrição" />
						</main>

						<footer>
							<SaveButton type="submit">Salvar</SaveButton>
						</footer>

						{success && <Success>Salvo com sucesso!</Success>}
						{error && <Error>{error}</Error>}
					</Form>
				</FormCard>
			</Container>
		</DefaultTemplate>
	);
};

export default Profile;
