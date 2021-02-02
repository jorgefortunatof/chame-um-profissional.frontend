import Router from 'next/router';

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
	user: any;
	signIn(credentials: Credentials): Promise<void>;
	signOut(): void;
}

interface AuthState {
	token: string;
	user: any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>({} as AuthState);

	useEffect(() => {
		const token = localStorage.getItem('@ChameUmProfissional:token');
		const user = localStorage.getItem('@ChameUmProfissional:user');

		if (user && token) {
			setData({ user: JSON.parse(user), token });
		}
	}, []);

	const signIn = useCallback(async ({ email, password }: Credentials) => {
		const response = await api.post('/signin', { email, password });

		const { token, user } = response.data;

		localStorage.setItem('@ChameUmProfissional:token', token);
		localStorage.setItem('@ChameUmProfissional:user', JSON.stringify(user));

		setData({ token, user });

		Router.push('/');
	}, []);

	const signOut = useCallback(() => {
		localStorage.removeItem('@ChameUmProfissional:token');
		localStorage.removeItem('@ChameUmProfissional:user');

		setData({} as AuthState);
	}, []);

	return (
		<AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
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
