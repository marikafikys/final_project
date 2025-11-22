import s from './CartPage.module.css';
import classNames from 'classnames';
import { cartSelectors } from '5-entities/cart/model/cart';
import { CartList } from '5-entities/cart/ui/CartList';
import { useAppSelector } from '1-app/store/utils';
import { CartAmount } from '4-features/cart/CartAmount';

export const CartPage = () => {
	const products = useAppSelector(cartSelectors.getCartProducts);

	if (!products.length) {
		return <h1 className='header-title'>Товаров нет в корзине</h1>;
	}

	return (
		<div className={classNames(s['content'], s['container'])}>
			<div className={classNames(s['cart'])}>
				<div className={classNames(s['title'])}>
					<span>{products.length}</span> в корзине
				</div>
				<CartList products={products} />
				<CartAmount products={products} />
			</div>
		</div>
	);
};
