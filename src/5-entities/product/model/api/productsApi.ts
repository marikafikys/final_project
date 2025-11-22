import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '../../../../1-app/config/config';
import {
	DeleteLikeResponse,
	ProductRequest,
	ProductsResponse,
	SetLikeResponse,
} from '../types';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: customBaseQuery,
	tagTypes: ['Products'],
	endpoints: (builder) => ({
		getProducts: builder.query<ProductsResponse, ProductRequest>({
			query: ({ searchText: searchTerm, sort, page, perPage }) => {
				return {
					url: '/products',
					params: {
						sort,
						searchTerm: searchTerm.length ? searchTerm : undefined,
						perPage: perPage ? page * perPage : undefined,
					},
				};
			},
			providesTags: [{ type: 'Products', id: 'list' }],
		}),

		getProduct: builder.query<Product, Pick<Product, 'id'>>({
			query: ({ id }) => ({ url: `/products/${id}` }),
			providesTags: (productFromBE) => [
				{ type: 'Products', id: productFromBE?.id },
			],
		}),

		createProduct: builder.mutation<Product, Product>({
			query: (product) => ({
				url: '/products',
				method: 'POST',
				body: product,
			}),
			invalidatesTags: [{ type: 'Products', id: 'list' }],
		}),

		deleteProduct: builder.mutation<Product, Pick<Product, 'id'>>({
			query: ({ id }) => ({
				url: `/products/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (productFromBE) => [
				{ type: 'Products', id: 'list' },
				{ type: 'Products', id: productFromBE?.id },
			],
		}),

		setLikeProduct: builder.mutation<SetLikeResponse, Pick<Product, 'id'>>({
			query: ({ id }) => ({
				url: `/products/${id}/likes`,
				method: 'PUT',
			}),
			invalidatesTags: (productFromBE) => [
				{ type: 'Products', id: 'list' },
				{ type: 'Products', id: productFromBE?.like.productId },
			],
		}),

		deleteLikeProduct: builder.mutation<
			DeleteLikeResponse,
			Pick<Product, 'id'>
		>({
			query: ({ id }) => ({
				url: `/products/${id}/likes`,
				method: 'DELETE',
			}),
			invalidatesTags: (productFromBE) => [
				{ type: 'Products', id: 'list' },
				{ type: 'Products', id: productFromBE?.product.productId },
			],
		}),

		addProductReview: builder.mutation<
			Review,
			{ productId: string; data: Pick<Review, 'text' | 'rating'> }
		>({
			query: ({ productId, data }) => ({
				url: `/reviews/leave/${productId}`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: (result) =>
				result ? [{ type: 'Products', id: result.id }] : [],
		}),
	}),
});

export const {
	useGetProductQuery,
	useGetProductsQuery,
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
	useAddProductReviewMutation,
} = productsApi;
