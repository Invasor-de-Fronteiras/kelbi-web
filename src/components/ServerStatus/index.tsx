import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    h2 {
        font-size: 32px;
        text-align: center;
    }

    p {
        font-size: 12px;
        width: 100%;
        text-align: center;
        white-space: nowrap;
    }

    div:first-child {
        border-radius: 1em 0 0 1em;
    }

    div:last-child {
        border-radius: 0 1em 1em 0;
    }

    @media (max-width: 660px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);


        div:nth-child(1) {
            border-radius: 1em 0 0 0;
        }

        div:nth-child(2) {
            border-radius: 0 1em 0 0;
        }

        div:nth-child(3) {
            border-radius: 0 0 0 1em;
        }

        div:nth-child(4) {
            border-radius: 0 0 1em 0;
        }

    }
`;

const Box = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: var(--gray-bg);
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    margin: 0 0.1em;

    @media (max-width: 660px) {
        margin: 0.1em;
    }
`;

export default function ServerStatus() {
	const status = [
		{
			name: 'Total Accounts',
			qnt: 2908,
			img: '/globe.svg',
		},
		{
			name: 'Total Characters',
			qnt: 4238,
			img: '/heart.svg',
		},
		{
			name: 'Total Guilds',
			qnt: 32,
			img: '/castle.svg',
		},
		{
			name: 'Peak Online',
			qnt: 2908,
			img: '/peak-online.svg',
		},
	];

	return (
		<Container>
			{status.map(item => (
				<Box key={item.name}>
					<img src={item.img} alt={item.name} height='32px' />
					<h2>{item.qnt}</h2>
					<p>{item.name}</p>
				</Box>
			))}
		</Container>
	);
}
