import { WithProtection } from '5-entities/user/lib/WithProtection';
import { ProductList } from '4-features/productList';

export const HomePage = WithProtection(() => {
	return <ProductList />;
});
