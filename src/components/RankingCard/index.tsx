import React from 'react';
import styled from 'styled-components';
import DiscordImg from './DiscordImg';

const Container = styled.div`
	display: flex;
	padding: 1em;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 800px;
	height: 85px;
	border-radius: 15px;

	h2 {
		font-size: 28px;
		font-weight: 600;
	}

	p {
		font-size: 10px;
		color: var(--gray);
	}

	img {
		border-radius: 100%;
		height: 64px;
	}

	.truncated-text {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.user-container {
		display: flex;
		align-items: center;
		width: 80%;
	}

	.user-container-rank {
		font-family: var(--mono-font);
		width: 20%;
		min-width: 5em;
	}

	.user-container-name {
		display: flex;
		align-items: center;
		gap: 0.5em;
		width: 80%;
	}

	.floor-container {
		display: flex;
		flex-direction: column;
		width: 20%;
		max-width: 3em;
		align-items: end;

		h2 {
			font-family: var(--mono-font);
		}
	}

	@media (max-width: 550px) {
		.user-container {
			flex-direction: column;
			align-items: baseline;
			gap: 0.2em;

			h2 {
				font-size: 20px;
			}

			p {
				font-size: 10px;
				color: var(--gray);
			}

			img {
				height: 32px;
			}
		}

		.user-container-rank {
			h2 {
				font-size: 15px;
				color: var(--gray);
			}
		}
	}
`;

type Props = {
	rank: number;
	name: string;
	floors: number;
	points: number;
	rankType: string;
	discordId: string | undefined;
};

export default function RankingCard(props: Props) {
	return (
		<Container>
			<div className='user-container'>
				<div className='user-container-rank'>
					<h2>{`#${props.rank}`}</h2>
				</div>
				<div className='user-container-name'>
					<DiscordImg
						discordId={props.discordId}
						alt={props.name}
					/>
					<h2 className={'truncated-text'}>{props.name}</h2>
				</div>
			</div>
			{props.rankType.toLocaleLowerCase().includes('floors') ? (
				<div className='floor-container'>
					<p>Andar</p>
					<h2>{props.floors}</h2>
					<p>{props.points}pts</p>
				</div>
			) : (
				<div className='floor-container'>
					<p>Pontos</p>
					<h2>{props.points}</h2>
					<p>Floor {props.floors}</p>
				</div>
			)}
		</Container>
	);
}
