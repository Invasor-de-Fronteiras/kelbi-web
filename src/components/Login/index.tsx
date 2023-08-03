import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {Modal, Form, FloatingLabel} from 'react-bootstrap';
import CustomButton from '../CustomButton';
import {type LoginIngame, apiEndpoints} from '../../apiConfig';
import {saveToken} from './tokenStorage';
import {AuthContext} from '../../contexts/AuthContext';
import axios, {type AxiosError} from 'axios';

type Props = {
	handleClose: () => void;
};

type Credentials = {
	username: string;
	password: string;
};

const Container = styled.div`
	background-color: #1e2124;
	border-radius: 5px;
	padding: 1em 2em;
`;

const ErrorMessage = styled.p`
	color: red;
	text-align: end;
`;

const ErrorMessageContainer = styled.div`
	height: 2em;
`;

export default function Login(props: Props) {
	const [credentials, setCredentials] = useState<Credentials>({username: '', password: ''});
	const [errorMessage, setErrorMessage] = useState<string>('');
	const {handleClose} = props;
	const authContext = useContext(AuthContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setCredentials(prevCredentials => ({
			...prevCredentials,
			[name]: value,
		}));
		setErrorMessage('');
	};

	const handleSubmit = async () => {
		try {
			const response = await axios.get(`${apiEndpoints.login}/?login=${credentials.username}&password=${credentials.password}`);
			const data = await response.data as LoginIngame;
			saveToken(data.token);
			handleClose();
			authContext.setIsLoggedIn(true);
		} catch (error) {
			const err = error as AxiosError;
			console.log('err response: ', err.response);
			if (err.isAxiosError) {
				const errStatus = err.response?.status;
				switch (errStatus) {
					case 401:
						setErrorMessage('Wrong user or login');
						break;
					case 501:
						setErrorMessage('Error 501: Unexpected error');
						break;
					default:
						setErrorMessage('Unexpected error');
						console.log('Error: Unexpected result');
				}
			}
		}
	};

	return (
		<Modal show={true} onHide={handleClose} centered>
			<Container>
				<Modal.Header closeButton>
					<Modal.Title style={{color: 'white'}}>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FloatingLabel
						controlId='floatingInput'
						label='Game Login'
						className='mb-3'
					>
						<Form.Control
							type='text'
							name='username'
							value={credentials.username}
							onChange={handleChange}
							placeholder='User'
						/>
					</FloatingLabel>
					<FloatingLabel controlId='floatingPassword' label='Password'>
						<Form.Control
							type='password'
							name='password'
							value={credentials.password}
							onChange={handleChange}
							placeholder='Password'
						/>
					</FloatingLabel>
					<ErrorMessageContainer>
						{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
					</ErrorMessageContainer>
					<CustomButton
						bgColor='var(--orange)'
						width='100%'
						onClick={handleSubmit}
						className='mt-2'
					>
						Login
					</CustomButton>
					<CustomButton
						width='100%'
						minHeight='60px'
						onClick={handleClose}
						className='mt-3'
						fontSize='20px'
					>
						Sign in with Discord
					</CustomButton>
				</Modal.Body>
			</Container>
		</Modal>
	);
}
