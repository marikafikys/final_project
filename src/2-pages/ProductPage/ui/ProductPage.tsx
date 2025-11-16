import s from './ProductPage.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import truckSVG from '../../../6-shared/assets/icons/truck.svg';
import qualitySVG from '../../../6-shared/assets/icons/quality.svg';
import { Rating } from '../../../6-shared/ui/Rating';
import { ButtonBack } from '../../../6-shared/ui/ButtonBack';
import { LikeButton } from '../../../6-shared/ui/LikeButton';
import { ReviewList } from '../../../3-widgets/ReviewList/ui/ReviewList';
import { WithProtection } from '../../../6-shared/store/HOCs/WithProtection';
import { useGetProductQuery } from '../../../6-shared/store/api/productsApi';
import { ProductCartCounter } from '../../../6-shared/ui/ProductCartCounter/ui/ProductCartCounter';
import { useAppSelector } from '../../../6-shared/store/utils';
import { cartSelectors } from '../../../6-shared/store/slices/cart';
import { CartCounter } from '../../../6-shared/ui/CartCounter';

export const ProductPage = WithProtection(() => {
	const location = useLocation();
	const { pathname } = location;
	const productId = pathname.split('/').at(-1) || '';

	const cartProducts = useAppSelector(cartSelectors.getCartProducts);

	const { data: product } = useGetProductQuery({ id: productId });

	if (!product) {
		return <></>;
	}

	const { id, name, images, description, price, discount } = product;

	const isProductInCart = !!cartProducts.find((p) => p.id === id);

	return (
		<>
			<ButtonBack />
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

					<LikeButton product={product} />
					<div className={classNames(s['productdelivery'])}>
						<img src={truckSVG} alt='truck' />
						<div className={classNames(s['productright'])}>
							<h3 className={classNames(s['productname'])}>
								Доставка по всему Миру!
							</h3>
							<p className={classNames(s['producttext'])}>
								Доставка курьером — <span className='bold'> от 399 ₽</span>
							</p>
							<p className={classNames(s['producttext'])}>
								Доставка в пункт выдачи —
								<span className={classNames(s['productbold'])}> от 199 ₽</span>
							</p>
						</div>
					</div>
					<div className={classNames(s['productdelivery'])}>
						<img src={qualitySVG} alt='quality' />
						<div className={classNames(s['productright'])}>
							<h3 className={classNames(s['productname'])}>
								Гарантия качества
							</h3>
							<p className={classNames(s['producttext'])}>
								Если Вам не понравилось качество нашей продукции, мы вернем
								деньги, либо сделаем все возможное, чтобы удовлетворить ваши
								нужды.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={classNames(s['productbox'])}>
				<h2 className={classNames(s['producttitle'])}>Описание</h2>
				<p className={classNames(s['productsubtitle'])}>Описание demo</p>
				<h2 className={classNames(s['producttitle'])}>Характеристики</h2>
				<div className={classNames(s['productgrid'])}>
					<div className={classNames(s['productnaming'])}>Вес</div>
					<div className={classNames(s['productdescription'])}>
						1 шт 120-200 грамм
					</div>
					<div className={classNames(s['productnaming'])}>Цена</div>
					<div className={classNames(s['productdescription'])}>
						490 ₽ за 100 грамм
					</div>
					<div className={classNames(s['productnaming'])}>Польза</div>
					<div className={classNames(s['productdescription'])}>
						<p>
							Большое содержание аминокислот и микроэлементов оказывает
							положительное воздействие на общий обмен веществ собаки.
						</p>
						<p>Способствуют укреплению десен и жевательных мышц.</p>
						<p>
							Развивают зубочелюстной аппарат, отвлекают собаку во время смены
							зубов.
						</p>
						<p>
							Имеет цельную волокнистую структуру, при разжевывание получается
							эффект зубной щетки, лучше всего очищает клыки собак.
						</p>
						<p>Следует учесть высокую калорийность продукта.</p>
					</div>
				</div>
			</div>
			<ReviewList product={product} />
		</>
	);
});
