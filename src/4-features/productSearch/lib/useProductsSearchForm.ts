import { useEffect, useState, useRef, useTransition } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '1-app/store/utils';
import { productsActions } from '5-entities/product';

const QUERY_SEARCH_PHRASE = 'q';
const DEBOUNCE_DELAY = 500;

export const useProductsSearchForm = () => {
	const dispatch = useAppDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchValue, setSearchValue] = useState(
		() => searchParams.get(QUERY_SEARCH_PHRASE) ?? ''
	);

	const [isPending, startTransition] = useTransition();

	const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (debounceTimeoutRef.current) {
			clearTimeout(debounceTimeoutRef.current);
		}

		debounceTimeoutRef.current = setTimeout(() => {
			startTransition(() => {
				dispatch(productsActions.setSearchText(searchValue));
			});
		}, DEBOUNCE_DELAY);

		return () => {
			if (debounceTimeoutRef.current) {
				clearTimeout(debounceTimeoutRef.current);
			}
		};
	}, [searchValue, dispatch, startTransition]);

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
