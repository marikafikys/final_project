import { ChangeEvent } from 'react';
import { useSort } from '../lib/useSort';
import s from './Sort.module.css';

export const Sort = () => {
	const { sort, setSort, sortParams, isPending } = useSort();

	const handleSortSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		setSort(e.target.value as Sort);
	};

	return (
		<div className={s['wrapper']}>
			<select value={sort} onChange={handleSortSelect} disabled={isPending}>
				{sortParams.map((p) => (
					<option key={p.title} value={p.value}>
						{p.title}
					</option>
				))}
			</select>
			{isPending && <span>Фильтрация...</span>}
		</div>
	);
};
