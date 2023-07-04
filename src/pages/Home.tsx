import React from 'react';
import Button from '../components/CustomButton';
import ServerStatus from '../components/ServerStatus';
import GameFeatures from '../components/GameFeatures';
import EventCards from '../components/EventCards';
import {Link} from 'react-router-dom';

export default function Home() {
	return (
		<>
			<img src='/arca-colorful-logo.svg' alt='arca logo' width='72px' />
			<p className='introText'>
                    Esteja entre os poucos jogadores que tiveram a chance de jogar<span> Monster Hunter Frontier</span> e agora junte-se a nós em nosso servidor. Aqui você encontrará uma comunidade unida e disposta a enfrentar qualquer desafio que o jogo possa oferecer
			</p>
			<p className='introText'>Para o guia de instalação entre em nosso Discord pelo botão abaixo:</p>
			<Link to={'https://discord.com/channels/967058504403808356/967058504881930280'} target='_blank'>
				<Button bgColor='var(--orange)'>Guia de Instalação</Button>
			</Link>
			<ServerStatus />
			<GameFeatures />
			<EventCards />
		</>
	);
}
