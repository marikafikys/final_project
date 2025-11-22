export interface IErrorResponse {
	data: { statusCode: number; message: string; error: string };
	status: number;
}

export interface ProductsResponse {
	products: Product[];
	length: number;
}

export interface SetLikeResponse {
	like: {
		id: string;
		userId: string;
		productId: string;
	};
	message: string;
}
export interface DeleteLikeResponse {
	product: {
		id: string;
		userId: string;
		productId: string;
	};
	message: string;
}
export interface ProductRequest {
	page: number;
	perPage?: number;
	sort: Sort;
	searchText: string;
}
