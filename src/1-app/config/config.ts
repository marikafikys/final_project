import { RootState } from '1-app/store/types';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const customBaseQuery = fetchBaseQuery({
	baseUrl: process.env.API_URL,
	prepareHeaders: (headers, { getState }) => {
		const accessToken = (getState() as RootState).user.accessToken;

		if (accessToken) {
			headers.set('authorization', accessToken);
		}
		return headers;
	},
});

export const config = {
	apiUrl: 'https://api.v2.react-learning.ru',
	apiToken:
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNseW9mNXFyZDAwMDhuZW9zdXdrNHk3aXIiLCJlbWFpbCI6ImVhYW1vc292QGdtYWlsLmNvbSIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNzIxMTM0Njk1LCJleHAiOjE3MjExMzUyOTV9.fOgTu9DEX24rHY6ZSl7IiqmqzCNpLZIrOm34xJLL2aI',
};

export const getAuthHeaders = () => ({
	'content-type': 'application/json',
	Authorization: `Bearer ${config.apiToken}`,
});
