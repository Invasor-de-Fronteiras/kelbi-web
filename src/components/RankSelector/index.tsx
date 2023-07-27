import React, {useState} from 'react';
import styled from 'styled-components';

type RankOption = {
	name: string;
	type: string;
};

type Props = {
	setRankType: (rankType: string) => void;
	returnToFirstPage: () => void;
};

const Container = styled.div`
	display: flex;
	gap: 1.5em;

	label {
		font-size: 0.9em;
	}

	label:hover {
		cursor: pointer;
		filter: brightness(75%);
	}

	.active {
		text-decoration: underline;
	}
	
	.active:hover {
		cursor: default;
		filter: brightness(100%);
	}

	@media (max-width: 680px) {
		font-size: 0.8em
	}

	@media (max-width: 550px) {
		font-size: 0.7em;
	}
`;

export default function RankSelector(props: Props) {
	const [selectedOption, setSelectedOption] = useState('groupFloors');
	const {setRankType, returnToFirstPage} = props;

	const rankOptions: RankOption[] = [
		{
			name: 'Group Floors',
			type: 'groupFloors',
		},
		{
			name: 'Solo Floors',
			type: 'soloFloors',
		},
		{
			name: 'Group Points',
			type: 'groupPoints',
		},
		{
			name: 'Solo Points',
			type: 'soloPoints',
		},
	];

	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRankType(event.target.value);
		setSelectedOption(event.target.value);
		returnToFirstPage();
	};

	return (
		<>
			<h2>Road Rank</h2>
			<Container>
				{rankOptions.map(item => (
					<label
						key={item.type}
						className={selectedOption === item.type ? 'active' : ''}
					>
						<input
							type='radio'
							name='rank'
							value={item.type}
							checked={selectedOption === item.type}
							onChange={handleOptionChange}
							hidden
						/>
						{item.name}
					</label>
				))}
			</Container>
		</>
	);
}
