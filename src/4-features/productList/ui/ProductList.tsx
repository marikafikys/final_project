import { CardList } from '3-widgets/CardList';
import { useProducts } from '5-entities/product';
import { WithQuery } from '6-shared/lib/HOCs/WithQuery';
import { LoadMore } from '3-widgets/ProductLoadMore';
import { memo } from 'react';

export const ProductList = memo(() => {
	const { products, isLoading, isError, error } = useProducts();

	const CardListWithQuery = WithQuery(CardList);

	return (
		<>
			<CardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore />
		</>
	);
});
