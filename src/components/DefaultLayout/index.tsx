import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import {Outlet} from 'react-router-dom';

const Main = styled.body`
    background-color: var(--black-bg);
    height: 100%;
    min-height: 100vh;
    color: #fff;
    font-size: 24px;
    display: flex;
    justify-content: center;

    span {
        color: var(--orange);
    }
`;

const Container = styled.div`
    font-family: var(--main-font);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    max-width: 1400px;
    gap: 3em;
    margin-top: 3em;

    h1, h2, h3, h4, h5, h6, p, img {
        margin: 0;
        padding: 0;
    }

    @media (max-width: 1280px) {
        width: 90vw;
    }
`;

export default function DefaultLayout() {
	return (
		<>
			<Header />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
			<Footer />
		</>
	);
}
