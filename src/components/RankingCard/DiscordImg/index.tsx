import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {getDiscordData} from '../../../utils/getDiscordData';

type Props = {
	alt: string;
	discordId: string | undefined;
};

const Image = styled.img`
	border-radius: 100%;
	height: 64px;

	@media (max-width: 550px) {
		height: 32px;
	}
`;

export default function DiscordImg(props: Props) {
	const defaultImg = './question-mark.svg';
	const [img, setImg] = useState<string>(defaultImg);
	const {alt, discordId} = props;

	useEffect(() => {
		const discordAvatar = async (discordId: string | undefined) => {
			if (discordId) {
				const data = await getDiscordData(discordId);

				if (data?.avatarUrl) {
					return data.avatarUrl;
				}
			}

			return defaultImg;
		};

		discordAvatar(discordId)
			.then(avatar => {
				setImg(avatar);
			})
			.catch(error => {
				setImg(defaultImg);
				console.log(error);
			});
	}, [discordId]);

	return (
		<Image
			src={img}
			alt={alt}
		/>
	);
}
