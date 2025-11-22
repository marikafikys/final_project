import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '1-app/store/rootReducer';
import { authApi } from '5-entities/auth/api/authApi';
import { productsApi } from '5-entities/product';
import { userApi } from '5-entities/user/model/api/userApi';

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			authApi.middleware,
			productsApi.middleware,
			userApi.middleware,
		]),
});
