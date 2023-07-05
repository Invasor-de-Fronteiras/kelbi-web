import React from 'react';
import styled from 'styled-components';
import TeamCard from '../components/TeamCard';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2em;

	h2 {
		font-size: 1.5em;
		margin-bottom: 0.3em;
	}

	p {
		font-size: 0.8em;
	}

	@media (max-width: 320px) {
		gap: 1em;
		width: 90vw;

		h2 {
			font-size: 1.1em;
		}

		p {
			font-size: 0.6em;
		}
	}
`;

const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1em;
	justify-items: center;

	@media (max-width: 300px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export default function Team() {
	const teamList = [
		{
			name: 'Ryuzaki',
			discord: 'ryuzakii_',
			info: 'Desenvolvedor e criador do grupo',
			language: ['Português', 'Inglês'],
			img: './team/ryuzaki.svg',
		},
		{
			name: 'Tsugami',
			discord: 'tsugam1',
			info: 'Desenvolvedor',
			language: ['Português', 'Inglês'],
			img: './team/tsugami.svg',
		},
		{
			name: 'Pegoretti',
			discord: 'pegorett',
			info: 'Importação de save',
			language: ['Português', 'Inglês'],
			img: './team/pegoretti.svg',
		},
		{
			name: 'Kushi',
			discord: '_ragazzi',
			info: 'Suporte e edições de lojas ingame',
			language: ['Português', 'Inglês'],
			img: './team/kushi.svg',
		},
		{
			name: 'Godric',
			discord: 'godric_arca',
			info: 'Suporte',
			language: ['Português', 'Japonês'],
			img: './team/godric.svg',
		},
		{
			name: 'Indio',
			discord: 'indio_13',
			info: 'Suporte',
			language: ['Português', 'Inglês', 'Espanhol'],
			img: './team/indio.svg',
		},
		{
			name: 'Merumei',
			discord: '.merumei',
			info: 'Edições de lojas ingame',
			language: ['Português'],
			img: './team/merumei.svg',
		},
		{
			name: 'Vania',
			discord: 'vania__',
			info: 'Criador de Quests',
			language: ['Português'],
			img: './team/vania.svg',
		},
		{
			name: 'Kenji',
			discord: 'kenjichisato',
			info: 'Suporte',
			language: ['Espanhol'],
			img: './team/kenji.svg',
		},
	];

	return (
		<Container>
			<div>
				<h2>Quem somos</h2>
				<p>Somos um grupo brasileiro de Monster Hunter Frontier apaixonado pelo jogo e dedicado a oferecer uma experiência única aos jogadores. Nosso servidor é hospedado na AWS em São Paulo, garantindo uma conexão estável e de qualidade. Com um IP dedicado 54.207.29.25, nosso servidor está online 24 horas por dia, 7 dias por semana, para que você possa desfrutar do jogo sempre que quiser. Além disso, temos uma série de eventos semanais para manter a comunidade engajada e entretida!</p>
			</div>
			<div>
				<h2>O nosso servidor</h2>
				<p>Usamos o <a href='https://github.com/Invasor-de-Fronteiras/Kelbi' target='_blank' rel='noreferrer'>Kelbi</a>, um fork do <a href='https://github.com/ZeruLight/Erupe' target='_blank' rel='noreferrer'>ZeruLight</a> que foi cuidadosamente modificado para aprimorar o controle e a manutenção do servidor. Nossa versão exclusiva conta com todas as quests do jogo no banco de dados, o que nos permite simplificar e agilizar a criação de quests personalizadas. Também desenvolvemos o primeiro <a href='https://github.com/Invasor-de-Fronteiras/mhfrontier-cq-tool ' target='_blank' rel='noreferrer'>editor de quests</a> do Frontier, que nos permite realizar eventos semanais exclusivos. Para obter mais informações, visite nosso Discord, onde você encontrará todos os detalhes necessários.</p>
				<p>Tanto nosso repositório quanto o editor de quests são completamente públicos! Encorajamos você a utilizá-los ou contribuir de qualquer forma possível. Caso precise de suporte ou orientação sobre o uso dessas ferramentas, nossa equipe estará disponível para ajudar através do nosso <a href='https://discord.gg/DCbSzxUfFv' target='_blank' rel='noreferrer'>Discord</a>.</p>
			</div>
			<div>
				<h2>Exclusividades do nosso servidor</h2>
				<p>Graças ao nosso editor de quests personalizado, oferecemos uma ampla variedade de quests semanais. Mas isso não é tudo!</p>
				<p>Para tornar a experiência de jogo ainda mais divertida, integramos essas quests a loterias exclusivas, nas quais você pode conseguir vários itens diferentes! Modificamos ícones, nomes e descrições desses vários itens que não foram utilizados pela Capcom para que você tenha mais clareza na hora de tentar sua sorte. Esses itens são usados para rolar o &quot;gatinho da loteria&quot; no ferreiro. Para obter mais informações sobre essa mecânica, visite nosso Discord!</p>
			</div>
			<div>
				<h2>Nosso time</h2>
				<Cards>
					{teamList.map(item => (
						<TeamCard
							key={item.name}
							name={item.name}
							img={item.img}
							discord={item.discord}
							info={item.info}
							language={item.language}
						/>
					))}
				</Cards>
			</div>
		</Container>
	);
}
