import {
	createContext,
	useCallback,
	useState,
	useContext,
	useEffect,
} from 'react';

import { useAuth } from './auth';

import api from '../services/api';

interface ProfileData {
	email: string;
	name: string;
	cpf?: string;
	phone: string;
	category_id?: number;
	description: string;
	avatar?: File;
}

interface User {
	id: string;
	name: string;
	avatar_url: string;
	email: string;
	cpf: string;
	phone: string;
	type: string;
	category: { id: number; name: string };
	description: string;
}

interface UserContextData {
	user: User;
	loading: boolean;
	updateUser(user: ProfileData): Promise<void>;
	updateAvatar(avatar: File): Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User>({} as User);
	const [loading, setLoading] = useState(true);
	const { signOut, token } = useAuth();

	const getData = useCallback(
		async (data: User) => {
			try {
				const response = await api.get<User>(`/user/${data?.id}`);
				localStorage.setItem(
					'@ChameUmProfissional:user',
					JSON.stringify(response.data),
				);
				setUser(response.data);
			} catch (err) {
				signOut();
			}
			setLoading(false);
		},
		[signOut],
	);

	const updateAvatar = useCallback(
		async (avatar: File) => {
			const data = new FormData();
			data.append('avatar', avatar);

			await api.post(`/avatar/${user?.id}`, data);
		},
		[user],
	);

	const updateUser = useCallback(
		async ({ name, email, phone, category_id, description }: ProfileData) => {
			const response = await api.put<User>(`/user/${user?.id}`, {
				name,
				email,
				phone,
				category_id,
				description,
			});

			const userUpdated = response.data;

			console.log({ userUpdated });

			localStorage.setItem(
				'@ChameUmProfissional:user',
				JSON.stringify(userUpdated),
			);
		},
		[user],
	);

	useEffect(() => {
		const userLocal = localStorage.getItem('@ChameUmProfissional:user');

		if (userLocal) {
			const userJSON = JSON.parse(userLocal);

			setUser(userJSON);
			getData(userJSON);
		} else {
			setLoading(false);
		}
	}, [getData, token]);

	return (
		<UserContext.Provider value={{ user, loading, updateUser, updateAvatar }}>
			{children}
		</UserContext.Provider>
	);
};

function useUser(): UserContextData {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('useUser deve ser usado com um UserProvider');
	}

	return context;
}

export { UserProvider, useUser };
