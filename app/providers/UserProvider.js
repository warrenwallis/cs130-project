import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const userAuthContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(undefined);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return <userAuthContext.Provider value={{ user }}>{children}</userAuthContext.Provider>;
};

const useUserAuthContext = () => {
	return useContext(userAuthContext);
};

export { UserProvider, useUserAuthContext };
