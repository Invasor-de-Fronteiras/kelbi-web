import React from 'react';
import styled from 'styled-components';
import RankingCard from '../components/RankingCard';
import {BsFillPersonFill} from 'react-icons/bs';
import {HiUserGroup} from 'react-icons/hi';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 2em;

	.rank-toogle {
		padding: 0.5em 1em;
		border: 1px solid var(--gray);
	}

	.rank-toogle:hover {
		border: 1px solid #fff;
	}

	.rank-toogle:checked {
		background-color: var(--gray-bg);
	}
`;

const CardContainer = styled.section`
	width: 100%;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: center;
`;

export default function Rankings() {
	const roadExample = [
		{
			rank: 1,
			name: '01234567890123456789',
			img: './team/kushi.svg',
			floors: 452,
			points: 250773,
		},
		{
			rank: 10,
			name: 'Francisco',
			img: './team/kushi.svg',
			floors: 45,
			points: 50773,
		},
		{
			rank: 1000,
			name: 'Joaquim',
			img: './team/kushi.svg',
			floors: 8,
			points: 230,
		},
	];

	return (
		<Container>
			<h2>Classificação - Road</h2>
			<form className='options'>
				<div className='btn-group' role='group' aria-label='Basic radio toggle button group'>
					<input type='radio' className='btn-check' name='btnradio' id='btnradio1' autoComplete='off' checked />
					<label className='rank-toogle btn' htmlFor='btnradio1'>Group <HiUserGroup /></label>

					<input type='radio' className='btn-check' name='btnradio' id='btnradio2' autoComplete='off' />
					<label className='rank-toogle btn ' htmlFor='btnradio2'>Solo <BsFillPersonFill /></label>
				</div>
			</form>
			<CardContainer>
				{roadExample.map(item => (
					<RankingCard
						key={`${item.name}-card`}
						name={item.name}
						img={item.img}
						floors={item.floors}
						points={item.points}
						rank={item.rank}
					/>
				))}
			</CardContainer>
		</Container>
	);
}
