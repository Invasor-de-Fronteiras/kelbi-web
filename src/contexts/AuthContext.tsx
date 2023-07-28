import React, {createContext, useState, useEffect} from 'react';
import {checkTokenExistence, loadToken} from '../components/Login/tokenStorage';

type AuthContextType = {
	setIsLoggedIn: (loggedIn: boolean) => void;
	isLoggedIn?: boolean;
};

const AuthContext = createContext<AuthContextType>({
	// eslint-disable-next-line
	setIsLoggedIn: () => {},
	isLoggedIn: false,
});

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(checkTokenExistence());

	useEffect(() => {
		setIsLoggedIn(checkTokenExistence());
		console.log('checkToken:', checkTokenExistence());
	}, []);

	return (
		<AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
			{children}
		</AuthContext.Provider>
	);
};

export {AuthContext, AuthProvider};
