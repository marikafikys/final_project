import { ButtonBack } from '6-shared/ui/ButtonBack';
import { FavoriteList } from '4-features/favoriteList';
import { useLocation } from 'react-router-dom';

export const FavoritesPage = () => {
	const { pathname } = useLocation();
	const isFavoritesPage = pathname === '/favorites';

	return (
		<>
			<ButtonBack />
			<FavoriteList isFavoritesPage={isFavoritesPage} />
		</>
	);
};
