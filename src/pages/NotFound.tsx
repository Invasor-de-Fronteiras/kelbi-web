import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	max-width: 800px;
	flex-direction: column;
	gap: 2em;
	margin-bottom: 3em;

	img {
		width: 100%;
		margin-top: 3em;
	}

	.text-container {
		text-align: center;
	}
`;

export default function NotFound() {
	return (
		<Container>
			<img src='./error404.svg' alt='error404'/>
			<Link to={'home'} style={{alignSelf: 'center'}}>
				<CustomButton bgColor={'var(--orange)' }>Menu Principal</CustomButton>
			</Link>
		</Container>
	);
}
