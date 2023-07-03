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
			<Link to={'/download'}>
				<Button bgColor='var(--orange)'>Baixar agora</Button>
			</Link>
			<ServerStatus />
			<GameFeatures />
			<EventCards />
		</>
	);
}
