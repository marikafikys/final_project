import classNames from 'classnames';
import s from './Price.module.css';
import { memo } from 'react';

type TPriceProps = {
	price: number;
	discountPrice: number;
};

export const Price = memo(({ price, discountPrice }: TPriceProps) => {
	return (
		<div className={classNames(s['small'], s['wrap'])}>
			<span className={classNames(s['old'], s['left'])}>{`${price}₽`}</span>
			<span className={classNames(s['discount'], s['price'])}>
				{`${price - discountPrice}₽`}
			</span>
		</div>
	);
});
