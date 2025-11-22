import { useGetProductQuery } from '5-entities/product';
import { useAppSelector } from '1-app/store/utils';
import { cartSelectors } from '5-entities/cart';

export const useProductDetails = (productId: string) => {
	const {
		data: product,
		isLoading,
		isError,
	} = useGetProductQuery({ id: productId });
	const cartProducts = useAppSelector(cartSelectors.getCartProducts);
	const isProductInCart = !!cartProducts.find((p) => p.id === productId);

	return {
		product,
		isLoading,
		isError,
		isProductInCart,
	};
};
