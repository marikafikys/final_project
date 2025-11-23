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

type TLikeButtonProps = {
	product: Product;
};
export const LikeButton = ({ product }: TLikeButtonProps) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken);
	const user = useAppSelector(userSelectors.getUser);

	const [setLike] = useSetLikeProductMutation();
	const [deleteLike] = useDeleteLikeProductMutation();

	const isLike = product?.likes.some((l) => l.userId === user?.id);

	const toggleLike = async () => {
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
	};

	return (
		<button
			className={classNames(s['favorite'], {
				[s['favoriteisactive']]: isLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	);
};
