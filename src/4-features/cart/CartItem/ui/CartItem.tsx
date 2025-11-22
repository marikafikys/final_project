import { ReactComponent as TrashIcon } from '6-shared/assets/icons/trash.svg';
import { Link } from 'react-router-dom';
import s from './CartItem.module.css';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { CartCounter } from '6-shared/ui/CartCounter';
import { cartActions } from '5-entities/cart';

type CartItemProps = {
	product: CartProduct;
};
export const CartItem = ({ product }: CartItemProps) => {
	const dispatch = useDispatch();
	const { id, name, images, price, discount } = product;

	const handleDelete = () => {
		dispatch(cartActions.deleteCartProduct(id));
	};
	return (
		<div className={classNames(s['item'])}>
			<div className={classNames(s['desc'])}>
				<img src={images} alt={name} className={classNames(s['image'])} />

				<div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
					<div style={{ display: 'flex', gap: '20px', flexGrow: 1 }}>
						<Link
							className={classNames(s['cartitemtitle'])}
							to={`/products/${id}`}>
							<h2>{name}</h2>
						</Link>

						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<CartCounter productId={id} />

							<div className={classNames(s['itemprice'])}>
								<div className={classNames(s['big'], s['wrap'])}>
									<span className={classNames(s['old'], s['right'])}>
										{price}
									</span>
									<span className={classNames(s['discount'], s['price'])}>
										{price - discount}
									</span>
								</div>
							</div>
						</div>
						<button className={classNames(s['trash'])}>
							<TrashIcon onClick={handleDelete} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
