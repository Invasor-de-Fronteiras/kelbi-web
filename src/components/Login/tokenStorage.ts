const tokenKey = 'app_token';

export const saveToken = (token: string) => {
	localStorage.setItem(tokenKey, token);
};

export const loadToken = () => localStorage.getItem(tokenKey);

export const removeToken = () => {
	localStorage.removeItem(tokenKey);
};
