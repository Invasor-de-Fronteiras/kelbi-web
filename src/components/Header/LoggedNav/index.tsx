import React, {useContext} from 'react';
import styled from 'styled-components';
import {BiLogOut} from 'react-icons/bi';
import {AuthContext} from '../../../contexts/AuthContext';
import {removeToken} from '../../Login/tokenStorage';

export default function LoggedNav() {
	const authContext = useContext(AuthContext);

	return (
		<>
			<BiLogOut onClick={() => {
				removeToken();
				authContext.setIsLoggedIn(false);
			}}/>
		</>
	);
}
