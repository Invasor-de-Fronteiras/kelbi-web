import React from 'react';
import styled from 'styled-components';
import {Modal, Button, Form, FloatingLabel} from 'react-bootstrap';
import CustomButton from '../CustomButton';

type Props = {
	handleClose: () => void;
};

const Container = styled.div`
	background-color: #1e2124;
	border-radius: 5px;
	padding: 1em 2em;
`;

export default function Login(props: Props) {
	const {handleClose} = props;

	return (
		<Modal show={true} onHide={handleClose} centered>
			<Container>
				<Modal.Header closeButton>
					<Modal.Title style={{color: 'white'}}>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FloatingLabel
						controlId='floatingInput'
						label='Email address'
						className='mb-3'
					>
						<Form.Control type='email' placeholder='name@example.com'/>
					</FloatingLabel>
					<FloatingLabel controlId='floatingPassword' label='Password'>
						<Form.Control type='password' placeholder='Password'/>
					</FloatingLabel>
					<CustomButton
						bgColor='var(--orange)'
						width='100%'
						onClick={handleClose}
						className='mt-5'
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
