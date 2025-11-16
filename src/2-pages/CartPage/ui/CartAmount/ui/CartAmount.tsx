import s from '../../CartPage.module.css';
import classNames from 'classnames';

type CartAmountProps = {
	products: CartProduct[];
};
export const CartAmount = ({ products }: CartAmountProps) => {
	const allPrice = products.reduce((acc, p) => p.price * p.count + acc, 0);
	const allDiscount = products.reduce(
		(acc, p) => p.discount * p.count + acc,
		0
	);

	const handleSubmitCart = () => {
		const order = products.map((p) => ({ id: p.id, count: p.count }));
		console.log('Отправка заказа на сервер: ', JSON.stringify(order, null, 2));
	};

	return (
		<div className={classNames(s['amount'])}>
			<h1 className={classNames(s['amounttitle'])}>Ваша корзина</h1>
			<div className={classNames(s['table'])}>
				<div className={classNames(s['tablerow'])}>
					<span className={classNames(s['tabletitle'])}>
						{`Товары (${products.length})`}
					</span>
					<span className={classNames(s['tablevalue'])}>{`${allPrice} ₽`}</span>
				</div>
				<div className={classNames(s['tablerow'])}>
					<span className={classNames(s['tabletitle'])}>Скидка</span>
					<span
						className={classNames(s['tablevalue'], s['tablevaluediscount'])}>
						{`${allDiscount} ₽`}
					</span>
				</div>
			</div>
			<div className={classNames(s['totalcost'])}>
				<h2 className={classNames(s['totalcosttitle'])}>Общая стоимость</h2>
				<span className={classNames(s['totalcostvalue'])}>
					{`${allPrice - allDiscount} ₽`}
				</span>
			</div>
			<button
				onClick={handleSubmitCart}
				className={classNames(s['button'], s['primary'], s['wide'])}>
				Оформить заказ
			</button>
		</div>
	);
};
