import axios from 'axios';
import {type DiscordInfo, apiEndpoints} from '../apiConfig';

export const getDiscordData = async (discordId: string) => {
	try {
		const response = await axios.get(`${apiEndpoints.discordInfo}?id=${discordId}`);
		return response.data.discordUserInfo as DiscordInfo;
	} catch (error) {
		console.log('Fail fetching discord info: ', error);
		return undefined;
	}
};
