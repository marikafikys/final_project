import { useEffect, useState, useTransition } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '1-app/store/utils';
import { useDebounce } from '../../../lib/hooks/useDebounce';
import { productsActions } from '5-entities/product';

const QUERY_SEARCH_PHRASE = 'q';

export const useProductsSearchForm = () => {
	const dispatch = useAppDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchValue, setSearchValue] = useState(
		() => searchParams.get(QUERY_SEARCH_PHRASE) ?? ''
	);

	const optimizedValue = useDebounce(searchValue, 500);

	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		startTransition(() => {
			dispatch(productsActions.setSearchText(optimizedValue));
		});
	}, [optimizedValue, dispatch, startTransition]);

	useEffect(() => {
		if (searchValue) {
			searchParams.set(QUERY_SEARCH_PHRASE, searchValue);
		} else {
			searchParams.delete(QUERY_SEARCH_PHRASE);
		}
		setSearchParams(searchParams);
	}, [searchParams, searchValue, setSearchParams]);

	return {
		searchValue,
		setSearchValue,
		isPending,
	};
};
