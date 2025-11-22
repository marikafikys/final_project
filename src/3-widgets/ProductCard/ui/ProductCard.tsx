import classNames from 'classnames';
import s from './ProductCard.module.css';
import { Rating } from '6-shared/ui/Rating';
import { CartCounter } from '6-shared/ui/CartCounter';
import { LikeButton } from '6-shared/ui/LikeButton';
import { ProductDelivery } from '3-widgets/ProductDelivery';
import { ProductSpecifications } from '3-widgets/ProductSpecifications';
import { ProductCartCounter } from '6-shared/ui/ProductCartCounter';

interface IProps {
	product: Product;
	isProductInCart: boolean;
}

export const ProductCard = ({ product, isProductInCart }: IProps) => {
	const { name, images, description, price, discount, id } = product;

	return (
		<div className={s.wrap}>
			<h1 className={classNames(s['headertitle'])}>{name}</h1>
			<p className='acticul'>
				Артикул: <b>2388907</b>
			</p>
			<Rating rating={3} />
			<div className={classNames(s['product'])}>
				<div className={classNames(s['productimgwrapper'])}>
					<img src={images} alt={description} />
				</div>
				<div className={classNames(s['productdesc'])}>
					<div className={classNames(s['pricebig'], s['pricewrap'])}>
						<span className={classNames(s['priceold'], s['priceleft'])}>
							{`${price} ₽`}
						</span>
						<span className={classNames(s['pricediscount'], s['price'])}>
							{`${price - discount} ₽`}
						</span>
					</div>

					{isProductInCart ? (
						<CartCounter productId={id} />
					) : (
						<ProductCartCounter product={product} />
					)}
					<div className={s.likewrap}>
						<LikeButton product={product} />
					</div>

					<ProductDelivery />
				</div>
			</div>
			<ProductSpecifications />
		</div>
	);
};
