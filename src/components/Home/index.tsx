import React from 'react';
import styled from 'styled-components';
import Button from '../CustomButton';
import ServerStatus from '../ServerStatus';
import GameFeatures from './GameFeatures';
import EventCards from '../EventCards';

const Main = styled.main`
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

export default function Home() {
	return (
		<Main>
			<Container>
				<img src='/arca-colorful-logo.svg' alt='arca logo' width='72px' />
				<p className='introText'>
                    Esteja entre os poucos jogadores que tiveram a chance de jogar<span> Monster Hunter Frontier</span> e agora junte-se a nós em nosso servidor. Aqui você encontrará uma comunidade unida e disposta a enfrentar qualquer desafio que o jogo possa oferecer
				</p>
				<Button bgColor='var(--orange)'>Baixar agora</Button>
				<ServerStatus />
				<GameFeatures />
				<EventCards />
			</Container>
		</Main>
	);
}
