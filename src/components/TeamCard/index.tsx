import React from 'react';
import styled from 'styled-components';

type Props = {
	name: string;
	discord: string;
	info: string;
	language: string[];
	img: string;
};

const Card = styled.div`
	width: 300px;
	background-color: var(--gray-bg);
	display: flex;
	flex-direction: column;
	padding: 1em;
	margin: 1em 0;
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

	img {
		height: 100px;
		border-radius: 100%;
	}

	p {
		color: var(--gray);
	}

	hr {
		margin-top: 0.5em;
	}

	.name-container {
		display: flex;
		justify-content: baseline;
		gap: 1em;
	}

	.name-container-text {
		display: flex;
		flex-direction: column;
	}

	.info-container {
		p {
			font-size: 0.6em;
			text-align: center;
		}
	}

	.tag {
		display: flex;
		justify-content: center;
		gap: 0.5em;
		margin-top: 0.3em;

		span {
			color: var(--orange);
			border: 1px solid var(--gray);
			border-radius: 15px;
			padding: 0.3em 1em;
			font-size: 0.5em;
		}
	}

	@media (max-width: 320px) {
		width: 200px;
		padding: 1em 0.3em;

		img {
			height: 60px;
		}

		h3 {
			font-size: 0.8em;
		}

		p {
			font-size: 0.5em;
		}

		.tag {
			flex-wrap: wrap;
			span {
				font-size: 0.5em;
			}
		}

		.name-container {
			justify-content: center;
			align-items: center;
		}
	}
`;

export default function TeamCard(props: Props) {
	function languageColor(op: string) {
		switch (op) {
			case 'Português':
				return '#25ce25';
			case 'Inglês':
				return '#3966ec';
			case 'Espanhol':
				return '#cb2929';
			case 'Japonês':
				return '#9e45da';
			default:
				return 'gray';
		}
	}

	return (
		<>
			<Card>
				<div className='name-container'>
					<img src={props.img} alt={props.name}/>
					<div className='name-container-text'>
						<h3>{props.name}</h3>
						<p>{props.discord}</p>
					</div>
				</div>
				<hr />
				<div className='info-container'>
					<p>{props.info}</p>
					<div className='tag'>
						{props.language.map(language => (
							<span key={`${props.name}-${language}`} style={{color: languageColor(language)}}>{language}</span>
						))}
					</div>
				</div>
			</Card>
		</>
	);
}
