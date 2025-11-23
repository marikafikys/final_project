import s from './ProductCartCounter.module.css';
import classNames from 'classnames';
import { useCount } from '../hooks/useCount';
import { useAddToCart } from '5-entities/cart';

type ProductCartCounterProps = {
	product: Product;
};
export const ProductCartCounter = ({ product }: ProductCartCounterProps) => {
	const { count, handleCount, handleCountMinus, handleCountPlus } = useCount();
	const { addProductToCart } = useAddToCart();

	return (
		<div className={classNames('productbtnwrap')}>
			<div className={s['buttoncount']}>
				<button className={s['buttoncountminus']} onClick={handleCountMinus}>
					-
				</button>
				<input
					type='number'
					className={s['buttoncountnum']}
					value={count}
					onChange={handleCount}
				/>
				<button className={s['buttoncountplus']} onClick={handleCountPlus}>
					+
				</button>
			</div>
			<button
				onClick={() => addProductToCart({ ...product, count })}
				className={classNames(s['button'], s['buttontypeprimary'])}>
				В корзину
			</button>
		</div>
	);
};
