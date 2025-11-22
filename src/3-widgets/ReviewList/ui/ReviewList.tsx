import classNames from 'classnames';
import s from './ReviewList.module.css';
import { Rating } from '6-shared/ui/Rating';
import { ReviewForm } from './ReviewForm/ReviewForm';

type ReviewListProps = {
	product: Product;
};
export const ReviewList = ({ product }: ReviewListProps) => {
	return (
		<div className={classNames(s['productreviews'])}>
			{product.reviews.map((review) => (
				<div className={s['review']} key={review.id}>
					<div className={s['reviewheader']}>
						<div className={s['reviewname']}>{review.user.name}</div>
						<div className={s['reviewdate']}>
							{new Date(review.createdAt).toLocaleDateString('ru-RU')}
						</div>
					</div>
					<Rating rating={review.rating} />
					<p className={s['reviewtext']}>{review.text}</p>
				</div>
			))}

			<h2>Отзыв о товаре {product.name}</h2>
			<ReviewForm />
		</div>
	);
};
