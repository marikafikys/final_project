import { ButtonBack } from '6-shared/ui/ButtonBack';
import { useProductDetails } from '../model/hooks';
import { ReviewList } from '3-widgets/ReviewList/ui/ReviewList';
import { ProductCard } from '3-widgets/ProductCard';

interface ProductDetailsProps {
	productId: string;
}

export const ProductDetails = ({ productId }: ProductDetailsProps) => {
	const { product, isLoading, isError, isProductInCart } =
		useProductDetails(productId);

	if (isLoading) return <div>Загрузка...</div>;
	if (isError || !product) return <div>Ошибка загрузки</div>;

	return (
		<div className='product-page'>
			<ButtonBack />
			<ProductCard product={product} isProductInCart={isProductInCart} />
			<ReviewList product={product} />
		</div>
	);
};
