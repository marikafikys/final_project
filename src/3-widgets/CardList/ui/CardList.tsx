import { Card } from '../../../6-shared/ui/Card';
import s from './CardList.module.css';

type CardListProps = {
	title: string;
	products: Product[];
};
export const CardList = ({ title, products }: CardListProps) => {
	if (!products.length) {
		return <h1 className='header-title'>Товар не найден</h1>;
	}

	return (
		<div className={s['cardlist']}>
			<div className={s['header']}>
				<h2 className={s['title']}>{title}</h2>
			</div>
			<div className={s['items']}>
				{products.map((product) => (
					<Card key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};
