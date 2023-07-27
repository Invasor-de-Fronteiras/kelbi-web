import React from 'react';
import ServerStatus from '../components/ServerStatus';
import GameFeatures from '../components/GameFeatures';
import EventCards from '../components/EventCards';
import {Link} from 'react-router-dom';
import {styled} from 'styled-components';
import CustomButton from '../components/CustomButton';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5em;
	width: 100%;

    .introText {
		width: 60%;
        text-align: justify;
    }

    @media (max-width: 1280px) {
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
		<Container>
			<img src='/arca-colorful-logo.svg' alt='arca logo' width='72px' />
			<p className='introText'>
                    Esteja entre os poucos jogadores que tiveram a chance de jogar<span> Monster Hunter Frontier</span> e agora junte-se a nós em nosso servidor. Aqui você encontrará uma comunidade unida e disposta a enfrentar qualquer desafio que o jogo possa oferecer
			</p>
			<p className='introText'>Para o guia de instalação entre em nosso Discord pelo botão abaixo:</p>
			<Link to={'https://discord.com/channels/967058504403808356/967058504881930280'} target='_blank'>
				<CustomButton bgColor='var(--orange)' padding='0.3em 1.5em'>Guia de Instalação</CustomButton>
			</Link>
			<ServerStatus />
			<GameFeatures />
			<EventCards />
		</Container>
	);
}
