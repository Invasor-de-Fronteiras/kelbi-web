import React from 'react';
import styled from 'styled-components';
import {BsArrowRightShort} from 'react-icons/bs';

const Container = styled.section`
	font-size: 0.8em;
	display: flex;
	flex-direction: column;
	gap: 1em;
	margin-bottom: 3em;

	a {
		color: var(--orange);
	}

	.img-container-wd {
		img {
			width: 100%;
			margin: 1em auto;
		}
	}

	.img-container-cache {
		display: flex;
		align-items: flex-start;
		gap: 2em;

		img {
			margin: 1em 0;
			width: 100%;
			max-width: 550px;
		}
	}

	@media(max-width: 700px) {
		font-size: 0.6em;

		.img-container-cache {
			flex-direction: column;

			img {
				max-height: 400px;
			}
		}
	}
`;

const DownloadCard = styled.div`
	display: flex;
	gap: 8em;
	text-align: center;

	:hover {
		cursor: pointer;
		color: var(--orange);
	}

	:active {
		color: #fff;
	}

	img {
		height: 96px;
	}

	@media(max-width: 500px) {
		gap: 0;
		justify-content: space-between;
		
		img {
			height: 64px;
		}
	}
`;

export default function Download() {
	const downloadLinks = [
		{
			name: 'Google Drive',
			img: './install-guide/google-drive.svg',
			url: 'https://drive.google.com/file/d/1jLat-HC9KHOEpzimGNtSBZYgkH1CLAjJ/view',
		},
		{
			name: 'Mega',
			img: './install-guide/mega.svg',
			url: 'https://mega.nz/file/nJZwzbLJ#L7QD0ZoywBmjZ7D5P80dZSzv2pb4t2A2DY3meenEzfU',
		},
	];

	return (
		<Container>
			<div>
				<p><span>1</span> - Download do jogo no link:</p>
				<DownloadCard>
					{downloadLinks.map(item => (
						<div key={`download-${item.name}`}>
							<a href={item.url} rel='noreferrer' target='_blank'>
								<img src={item.img} alt={item.name}/>
							</a>
							<p>{item.name}</p>
						</div>
					))}
				</DownloadCard>
			</div>
			<div>
				<p><span>2</span> - Crie uma pasta com exclusão do windows defender para extrair o jogo da seguinte forma:</p>
				<div className='img-container-wd'>
					<img src='./install-guide/windows-defender-1.svg' alt='Windows Defender Exclusion List 1'></img>
					<img src='./install-guide/windows-defender-2.svg' alt='Windows Defender Exclusion List 2'></img>
					<img src='./install-guide/windows-defender-3.svg' alt='Windows Defender Exclusion List 3'></img>
				</div>
			</div>
			<div>
				<p><span>3</span> - Recorte o arquivo host e cole em &quot;C:\Windows\System32\drivers\etc&quot;</p>
				<DownloadCard>
					<div>
						<a href='../../download/hosts' rel='noreferrer' target='_blank' download>
							<img src='./install-guide/win-file-icon.svg' alt='Windows File Icon'></img>
						</a>
						<p>Hosts</p>
					</div>
				</DownloadCard>
			</div>
			<div>
				<p><span>4</span> - Limpe o cache do seu computador em <span>Propriedades de internet <BsArrowRightShort/> Excluir <BsArrowRightShort/> Excluir</span>.</p>
				<p>Caso ainda tenha dúvidas verifique as imagens abaixo:</p>
				<div className='img-container-cache'>
					<img src='./install-guide/cache-1.svg'></img>
					<img src='./install-guide/cache-2.svg'></img>
				</div>
			</div>
			<div>
				<p><span>5</span> - Execute o launcher!</p>
			</div>
			<div>
				<p><span>6</span> - Para criar sua conta basta colocar login e senha de sua preferência que sua conta será criada automaticamente.</p>
			</div>
			<div>
				<p>Caso tenha problemas, pergunte em nosso <a href='https://discord.gg/DCbSzxUfFv' rel='noreferrer' target='_blank'>discord</a>.</p>
			</div>
		</Container>
	);
}
