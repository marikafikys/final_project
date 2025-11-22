import { CardList } from '3-widgets/CardList';
import { useFavoriteProducts } from '../../favoriteList/model/hooks';
import { WithQuery } from '6-shared/lib/HOCs/WithQuery';

interface FavoriteListProps {
	isFavoritesPage: boolean;
}

export const FavoriteList = ({ isFavoritesPage }: FavoriteListProps) => {
	const { isLoading, isError, products, error } = useFavoriteProducts({
		isFavoritesPage,
	});

	const CardListWithQuery = WithQuery(CardList);

	return (
		<CardListWithQuery
			title='Избранные'
			isLoading={isLoading}
			isError={isError}
			products={products}
			error={error}
		/>
	);
};
