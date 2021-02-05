import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import {
	createContext,
	useCallback,
	useState,
	useContext,
	useEffect,
} from 'react';
import api from '../services/api';

interface Credentials {
	email: string;
	password: string;
}

interface AuthContextData {
	token: string;
	error?: string;
	signIn(credentials: Credentials): Promise<void>;
	signOut(): void;
}

interface AuthState {
	token: string;
	error?: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>({} as AuthState);
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem('@ChameUmProfissional:token');

		if (token) {
			setData({ token });
		}
	}, []);

	const signIn = useCallback(
		async ({ email, password }: Credentials) => {
			try {
				const response = await api.post('/signin', { email, password });
				const { token, user } = response.data;

				localStorage.setItem('@ChameUmProfissional:token', token);
				localStorage.setItem('@ChameUmProfissional:user', JSON.stringify(user));

				setData({ token });

				router.push('/');
			} catch (err) {
				const axiosError: AxiosError<{ message: string }> = err;
				if (axiosError) {
					setData({
						error: axiosError.response?.data.message,
						token: null,
					});
				}
			}
		},
		[router],
	);

	const signOut = useCallback(() => {
		localStorage.removeItem('@ChameUmProfissional:token');
		localStorage.removeItem('@ChameUmProfissional:user');

		setData({} as AuthState);
	}, []);

	return (
		<AuthContext.Provider
			value={{ error: data.error, signIn, signOut, token: data.token }}
		>
			{children}
		</AuthContext.Provider>
	);
};

function useAuth(): AuthContextData {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth deve ser usado com um AuthProvider');
	}

	return context;
}

export { AuthProvider, useAuth };
