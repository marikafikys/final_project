import classNames from 'classnames';
import s from './Card.module.css';
import { Price } from './Price/ui/Price';
import { Link } from 'react-router-dom';
import { useAppSelector } from '1-app/store/utils';
import { cartSelectors, useAddToCart } from '5-entities/cart';
import { CartCounter } from '3-widgets/CartCounter';
import { LikeButton } from '3-widgets/LikeButton';

type CardProps = {
	product: Product;
};
export const Card = ({ product }: CardProps) => {
	const { discount, price, name, tags, id, images } = product;
	const cartProducts = useAppSelector(cartSelectors.getCartProducts);
	const isProductInCart = cartProducts.some((p) => p.id === id);
	const { addProductToCart } = useAddToCart();

	return (
		<article className={s['card']}>
			<div className={classNames(s['sticky'], s['stickytypetopleft'])}>
				<span className={s['discount']}>{discount}</span>
				{tags.length > 0 &&
					tags.map((t) => (
						<span key={t} className={classNames(s['tag'], s['tagtypenew'])}>
							{t}
						</span>
					))}
			</div>
			<div className={classNames(s['sticky'], s['stickytypetopright'])}>
				<LikeButton product={product} />
			</div>
			<Link className={s['link']} to={`/products/${id}`}>
				<img src={images} alt={name} className={s['image']} loading='lazy' />
				<div className={s['desc']}>
					<Price price={price} discountPrice={discount} />
					<h3 className={s['name']}>{name}</h3>
				</div>
			</Link>
			{isProductInCart ? (
				<CartCounter productId={id} />
			) : (
				<button
					onClick={() => addProductToCart({ ...product, count: 1 })}
					disabled={isProductInCart}
					className={classNames(s['cart'], s['btn'], s['btntypeprimary'])}>
					В корзину
				</button>
			)}
		</article>
	);
};
