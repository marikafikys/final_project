import s from './EditProfileForm.module.css';
import classNames from 'classnames';

export const EditProfileForm = () => (
	<>
		<h1 className={s['formtitle']}>Мои данные</h1>
		<form className={classNames(s['form'], s['form'])}>
			<div className={s['formrow']}>
				<label className={s['formlabel']} htmlFor='name'>
					{''}
					<input
						className={s['input']}
						name='name'
						id='name'
						type='text'
						placeholder='Введите ваше имя'
					/>
				</label>
				<label className={s['formlabel']}>
					{''}
					<input
						className={s['input']}
						name='about'
						id='about'
						type='text'
						placeholder='Описание профессии'
					/>
				</label>
			</div>
			<div className={s['formrow']}>
				<label className={s['formlabel']}>
					{''}
					<input
						className={s['input']}
						name='avatar'
						id='avatar'
						type='url'
						placeholder='Введите ссылку на аватарку'
					/>
				</label>
				<label className={s['formlabel']}>
					{''}
					<input
						className={s['input']}
						name='email'
						id='email'
						type='text'
						placeholder='email'
					/>
				</label>
			</div>

			<button
				type='submit'
				className={classNames(s['formbtn'], s['secondary'], s['maxContent'])}>
				Сохранить
			</button>
		</form>
		<h2 className={s['formtitle']}>Изменить пароль</h2>
		<form className={classNames(s['form'], s['form'])}>
			<div className={classNames(s['formrow'], s['formrowmin'])}>
				<label className={s['formlabel']}>
					{''}
					<input
						className={s['input']}
						name='password'
						id='password'
						type='password'
						placeholder='Пароль'
					/>
				</label>
			</div>
			<button
				type='submit'
				className={classNames(s['formbtn'], s['secondary'], s['maxContent'])}>
				Сохранить
			</button>
		</form>
	</>
);
