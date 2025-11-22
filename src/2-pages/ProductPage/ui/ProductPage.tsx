import { useLocation } from 'react-router-dom';
import { WithProtection } from '6-shared/lib/HOCs/WithProtection';
import { ProductDetails } from '4-features/productDetails';

export const ProductPage = WithProtection(() => {
	const location = useLocation();
	const { pathname } = location;
	const productId = pathname.split('/').at(-1) || '';

	if (!productId) return null;

	return <ProductDetails productId={productId} />;
});
