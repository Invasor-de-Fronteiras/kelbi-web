import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import RankingCard from '../components/RankingCard';
import {BsFillPersonFill} from 'react-icons/bs';
import {HiUserGroup} from 'react-icons/hi';
import {type TopPlayers, apiEndpoints} from '../apiConfig';

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
	background-color: var(--gray-bg);
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	padding: 1em 0;
	margin-bottom: 2em;

	hr {
		width: 95%;
	}
`;

export default function Rankings() {
	const [topPlayers, setTopPlayers] = useState<TopPlayers>();
	const [rankType, setRankType] = useState<string>('groupFloors');

	useEffect(() => {
		const fetchData = async (): Promise<TopPlayers> => {
			const response = await fetch(apiEndpoints[rankType]);
			const data = await response.json() as TopPlayers;
			return data;
		};

		fetchData().then(data => {
			setTopPlayers(data);
		}).catch(error => {
			console.log('Fail to get server data: ', error);
		});
	}, [rankType]);

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
				{topPlayers?.data.map((item, index) => (
					<>
						<RankingCard
							key={`${item.name}-card`}
							name={item.name}
							img={'./team/kushi.svg'}
							floors={item.max_stages_mp}
							points={item.max_points_mp}
							rank={1}
						/>
						{index !== topPlayers.data.length - 1 && <hr />}
					</>
				))}
			</CardContainer>
		</Container>
	);
}
