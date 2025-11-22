import classNames from 'classnames';
import s from './ProductSpecifications.module.css';

export const ProductSpecifications = () => {
	return (
		<div className={classNames(s['productbox'])}>
			<h2 className={classNames(s['producttitle'])}>Описание</h2>
			<p className={classNames(s['productsubtitle'])}>Описание demo</p>
			<h2 className={classNames(s['producttitle'])}>Характеристики</h2>
			<div className={classNames(s['productgrid'])}>
				<div className={classNames(s['productnaming'])}>Вес</div>
				<div className={classNames(s['productdescription'])}>
					1 шт 120-200 грамм
				</div>
				<div className={classNames(s['productnaming'])}>Цена</div>
				<div className={classNames(s['productdescription'])}>
					490 ₽ за 100 грамм
				</div>
				<div className={classNames(s['productnaming'])}>Польза</div>
				<div className={classNames(s['productdescription'])}>
					<p>
						Большое содержание аминокислот и микроэлементов оказывает
						положительное воздействие на общий обмен веществ собаки.
					</p>
					<p>Способствуют укреплению десен и жевательных мышц.</p>
					<p>
						Развивают зубочелюстной аппарат, отвлекают собаку во время смены
						зубов.
					</p>
					<p>
						Имеет цельную волокнистую структуру, при разжевывание получается
						эффект зубной щетки, лучше всего очищает клыки собак.
					</p>
					<p>Следует учесть высокую калорийность продукта.</p>
				</div>
			</div>
		</div>
	);
};
