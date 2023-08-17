import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import RankingCard from '../components/RankingCard';
import {type TopPlayers, apiEndpoints} from '../apiConfig';
import Pagination from '../components/Pagination';
import RankSelector from '../components/RankSelector';
import axios from 'axios';

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

const Fragment = styled.div`
	padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

const CardContainer = styled.section`
	width: 100%;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--gray-bg);
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	padding: 1em 0;

	hr {
		margin: 0.5em 0;
		width: 95%;
	}
`;

export default function Rankings() {
	const [topPlayers, setTopPlayers] = useState<TopPlayers>();
	const [rankPage, setRankPage] = useState<number>(1);
	const [rankType, setRankType] = useState<string>('groupf');
	const rowsPerPage = 10;

	console.log({
		topPlayers,
		rankType,
		rankPage,
	});

	useEffect(() => {
		const fetchTopPlayersData = async (): Promise<TopPlayers> => {
			console.log('Passou por aqui!');
			const response = await axios.get(`${apiEndpoints.road}?rows=${rowsPerPage}&page=${rankPage}&type=${rankType}`);
			const data = await response.data as TopPlayers;
			return data;
		};

		fetchTopPlayersData()
			.then(data => {
				setTopPlayers(data);
			})
			.catch(error => {
				console.log('Fail to get server data: ', error);
			});
	}, [rankType, rankPage]);

	const handleReturnToFirstPage = () => {
		setRankPage(1);
	};

	return (
		<Container>
			<RankSelector
				setRankType={setRankType}
				returnToFirstPage={handleReturnToFirstPage}
			/>
			<CardContainer>
				{topPlayers?.data.map((item, index) => (
					<Fragment key={item.name}>
						<RankingCard
							name={item.name}
							discordId={item.provider_id}
							floors={item.max_stages}
							points={item.max_points}
							rank={(index + 1) + ((rankPage - 1) * rowsPerPage)}
							rankType = {rankType}
						/>
						{index !== topPlayers.data.length - 1 && <hr />}
					</Fragment>
				))}
			</CardContainer>
			<Pagination
				rowsPerPage={rowsPerPage}
				totalItems={topPlayers?.total ?? 0}
				actualPage={rankPage}
				onPageChange={setRankPage}
			/>
		</Container>
	);
}
