import { useTransition } from 'react';
import { useAppDispatch, useAppSelector } from '1-app/store/utils';
import {
	productsSelectors,
	productsActions,
} from '../../../../5-entities/product/model/products';

interface SortParams {
	title: string;
	value: Sort;
	href: string;
}

export const useSort = () => {
	const dispatch = useAppDispatch();
	const sort = useAppSelector(productsSelectors.getSort);

	const [isPending, startTransition] = useTransition();

	const setSort = (newSort: Sort) => {
		startTransition(() => {
			dispatch(productsActions.setSort(newSort));
		});
	};

	const sortParams: SortParams[] = [
		{ title: 'Дешевые', value: 'low-price', href: '#' },
		{ title: 'Дорогие', value: 'high-price', href: '#' },
		{ title: 'Новые', value: 'newest', href: '#' },
		{ title: 'Старые', value: 'oldest', href: '#' },
	];

	return { sort, setSort, sortParams, isPending };
};
