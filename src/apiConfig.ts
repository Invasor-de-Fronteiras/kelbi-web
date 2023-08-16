const apiBaseUrl = 'http://localhost:3000';

export type ApiEndpoints = Record<string, string>;

export const apiEndpoints: ApiEndpoints = {
	serverStatus: `${apiBaseUrl}/users/count`,
	road: `${apiBaseUrl}/road/rank`,
	login: `${apiBaseUrl}/login/ingame`,
	getUserData: `${apiBaseUrl}/login/userdata`,
};

export type PlayerData = {
	user_id: string;
	name: string;
	max_stages: number;
	max_points: number;
	provider_id: string | undefined;
	avatarUrl: string;
};

export type TopPlayers = {
	total: number;
	page: number;
	data: PlayerData[];
};

export type LoginIngame = {
	id: number;
	username: string;
	password: string;
	token: string;
	error: string;
};

export type DiscordInfo = {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	public_flags: number;
	flags: number;
	banner: number | undefined;
	accent_color: number;
	global_name: string;
	avatar_decoration: string | undefined;
	banner_color: string;
	avatarUrl: string | undefined;
};

export type GetUserData = {
	id: number;
	username: string;
	dev: boolean;
	provider_id: string;
	discordInfo: DiscordInfo;
};
