import { useAppDispatch } from '1-app/store/utils';
import { cartActions } from '5-entities/cart/model/cart';

export const useAddToCart = () => {
	const dispatch = useAppDispatch();
	const addProductToCart = (cartProduct: CartProduct) => {
		dispatch(cartActions.addCartProduct(cartProduct));
	};

	return { addProductToCart };
};
