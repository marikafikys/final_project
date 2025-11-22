import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '1-app/config/config'; // ← ваш готовый baseQuery

type UserUpdateDto = Partial<
	Omit<User, 'favoritesPost' | 'id'> & { password: string }
>;

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: customBaseQuery,
	tagTypes: ['User'],
	endpoints: (builder) => ({
		getUser: builder.query<User, void>({
			query: () => '/users/me',
			providesTags: ['User'],
		}),
		updateUser: builder.mutation<User, UserUpdateDto>({
			query: (data) => ({
				url: '/users/me',
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: ['User'],
		}),
	}),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
