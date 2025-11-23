import s from './LikeButton.module.css';
import { ReactComponent as LikeSvg } from '6-shared/assets/icons/like.svg';
import classNames from 'classnames';
import { userSelectors } from '5-entities/user';
import {
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
	IErrorResponse,
} from '5-entities/product';
import { toast } from 'react-toastify';
import { useAppSelector } from '1-app/store/utils';
import { memo, useCallback, useMemo } from 'react';

type TLikeButtonProps = {
	product: Product;
};
export const LikeButton = memo(({ product }: TLikeButtonProps) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken);
	const user = useAppSelector(userSelectors.getUser);

	const [setLike] = useSetLikeProductMutation();
	const [deleteLike] = useDeleteLikeProductMutation();

	const isLike = useMemo(
		() => product?.likes.some((l) => l.userId === user?.id),
		[product, user]
	);

	const toggleLike = useCallback(async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы');
			return;
		}
		let response;
		if (isLike) {
			response = await deleteLike({ id: `${product.id}` });
		} else {
			response = await setLike({ id: `${product.id}` });
		}

		if (response.error) {
			const error = response.error as IErrorResponse;
			toast.error(error.data.message);
		}
	}, [accessToken, isLike, product.id, setLike, deleteLike]);

	return (
		<button
			className={classNames(s['favorite'], {
				[s['favoriteisactive']]: isLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	);
});
