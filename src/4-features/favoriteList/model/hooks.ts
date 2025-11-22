import { useGetProductsQuery } from '5-entities/product';
import { useAppSelector } from '1-app/store/utils';
import { productsSelectors } from '5-entities/product';
import { userSelectors } from '5-entities/user';
import { isLiked } from '6-shared/lib/utils';

interface UseFavoriteProductsProps {
	isFavoritesPage: boolean;
}

export const useFavoriteProducts = ({
	isFavoritesPage,
}: UseFavoriteProductsProps) => {
	const { searchText, page, perPage, sort } = useAppSelector(
		productsSelectors.getProductsState
	);

	const { isLoading, isError, error, data, isFetching } = useGetProductsQuery({
		searchText,
		sort,
		page,
		perPage: isFavoritesPage ? undefined : perPage,
	});

	let products = data?.products || [];
	const productsCount = data?.length || 0;

	if (isFavoritesPage) {
		const user = useAppSelector(userSelectors.getUser);
		products = products.filter((product) => isLiked(product.likes, user?.id));
	}

	return {
		products,
		isLoading,
		isError,
		isFetching,
		error,
		productsCount,
	};
};
