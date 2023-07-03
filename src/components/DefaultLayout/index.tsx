import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import {Outlet} from 'react-router-dom';

const Main = styled.body`
    background-color: var(--black-bg);
    height: 100%;
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

    .introText {
        width: 60%;
        text-align: justify;
    }

    @media (max-width: 1280px) {
        width: 90vw;

        .introText {
            width: 80%;
        }
    }

    @media (max-width: 760px) {
        .introText {
            font-size: 18px;
        }
    }

    @media (max-width: 500px) {
        .introText {
            font-size: 16px
        }
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
