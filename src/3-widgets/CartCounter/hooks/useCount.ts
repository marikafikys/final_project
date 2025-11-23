import { ChangeEvent, useCallback, useMemo } from 'react';
import { cartActions, cartSelectors } from '5-entities/cart';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '1-app/store/utils';

const MIN_COUNT = 1;
const MAX_COUNT = 99;

export const useCount = (productId: string) => {
	const dispatch = useDispatch();
	const products = useAppSelector(cartSelectors.getCartProducts);
	const product = useMemo(
		() => products.find((p) => p.id === productId) as CartProduct,
		[products, productId]
	);

	const { id, count, stock } = product;

	// const handleIncrement = () => {
	// 	const newCount = count + 1;
	// 	const validCount = newCount > MAX_COUNT ? MAX_COUNT : newCount;
	// 	dispatch(cartActions.setCartProductCount({ id, count: validCount }));
	// };
	// const handleDecrement = () => {
	// 	const newCount = count - 1;
	// 	const validCount = newCount < MIN_COUNT ? MIN_COUNT : newCount;
	// 	dispatch(cartActions.setCartProductCount({ id, count: validCount }));
	// };
	// const handleSetCount = (e: ChangeEvent<HTMLInputElement>) => {
	// 	const newCount = +e.target.value;
	// 	const validCount =
	// 		newCount > MAX_COUNT
	// 			? MAX_COUNT
	// 			: newCount < MIN_COUNT
	// 				? MIN_COUNT
	// 				: newCount;
	// 	dispatch(cartActions.setCartProductCount({ id, count: validCount }));
	// };

	const handleIncrement = useCallback(() => {
		const newCount = Math.min(count + 1, MAX_COUNT);
		dispatch(cartActions.setCartProductCount({ id, count: newCount }));
	}, [count, id, dispatch]);

	const handleDecrement = useCallback(() => {
		const newCount = Math.max(count - 1, MIN_COUNT);
		dispatch(cartActions.setCartProductCount({ id, count: newCount }));
	}, [count, id, dispatch]);

	const handleSetCount = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			let newCount = Number(e.target.value);
			newCount = Math.max(MIN_COUNT, Math.min(newCount, MAX_COUNT));
			dispatch(cartActions.setCartProductCount({ id, count: newCount }));
		},
		[id, dispatch]
	);

	return { count, stock, handleSetCount, handleIncrement, handleDecrement };
};
