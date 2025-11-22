import { combineReducers } from 'redux';
import { userSlice } from '5-entities/user';
import { cartSlice } from '5-entities/cart';
import { productsApi, productsSlice } from '5-entities/product';
import { authApi } from '../../5-entities/auth/api/authApi';
import { userApi } from '5-entities/user/model/api/userApi';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
	[userApi.reducerPath]: userApi.reducer,
});
