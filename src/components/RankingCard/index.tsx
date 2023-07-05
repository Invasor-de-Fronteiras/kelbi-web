import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	background-color: var(--gray-bg);
	padding: 1em;
	border-radius: 15px;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 800px;
	height: 85px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

	h2 {
		font-size: 32px;
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
	img: string;
	floors: number;
	points: number;
};

export default function RankingCard(props: Props) {
	return (
		<Container>
			<div className='user-container'>
				<div className='user-container-rank'>
					<h2>{`#${props.rank}`}</h2>
				</div>
				<div className='user-container-name'>
					<img src={props.img} alt={props.name}/>
					<h2 className={'truncated-text'}>{props.name}</h2>
				</div>
			</div>
			<div className='floor-container'>
				<p>Andar</p>
				<h2>{props.floors}</h2>
				<p>{props.points}pts</p>
			</div>
		</Container>
	);
}
