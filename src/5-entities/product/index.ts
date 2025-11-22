export {
	useGetProductQuery,
	useGetProductsQuery,
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
} from './model/api/productsApi';
export {
	productsActions,
	productsSelectors,
	productsSlice,
} from './model/products';
export { type IErrorResponse } from './model/types';
export { useProducts } from './model/hooks';
export { productsApi } from './model/api/productsApi';
