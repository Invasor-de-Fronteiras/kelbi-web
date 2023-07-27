const apiBaseUrl = 'http://localhost:3000';

export type ApiEndpoints = Record<string, string>;

export const apiEndpoints: ApiEndpoints = {
	serverStatus: `${apiBaseUrl}/users/count`,
	soloFloors: `${apiBaseUrl}/road/solof`,
	groupFloors: `${apiBaseUrl}/road/groupf`,
	soloPoints: `${apiBaseUrl}/road/solop`,
	groupPoints: `${apiBaseUrl}/road/groupp`,
	login: `${apiBaseUrl}/login/ingame`,
};

export type PlayerData = {
	name: string;
	max_stages_sp?: number;
	max_points_sp?: number;
	max_stages_mp: number;
	max_points_mp: number;
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
