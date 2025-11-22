import classNames from 'classnames';
import Instagram from '6-shared/assets/images/instagram.svg';
import Telegram from '6-shared/assets/images/telegram.svg';
import Viber from '6-shared/assets/images/viber.svg';
import Vk from '6-shared/assets/images/vk.svg';
import Whatsapp from '6-shared/assets/images/whatsapp.svg';
import s from './Footer.module.css';
import { Logo } from '6-shared/ui/Logo';

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className='container'>
				<div className={s['wrapper']}>
					<div className={s['col']}>
						<Logo />
						<p className={s['copyright']}>© «Интернет-магазин DogFood.ru»</p>
					</div>
					<div className={s['col']}>
						<nav className={s['menubottom']}>
							<a href='/catalogue' className={s['menubottomitem']}>
								Каталог
							</a>
							<a href='/catalogue' className={s['menubottomitem']}>
								Акции
							</a>
							<a href='/catalogue' className={s['menubottomitem']}>
								Новости
							</a>
							<a href='/catalogue' className={s['menubottomitem']}>
								Отзывы
							</a>
						</nav>
					</div>
					<div className={s['col']}>
						<nav className={s['menubottom']}>
							<a href='/catalogue' className={s['menubottomitem']}>
								Оплата и доставка
							</a>
							<a href='/catalogue' className={s['menubottomitem']}>
								Часто спрашивают
							</a>
							<a href='/catalogue' className={s['menubottomitem']}>
								Обратная связь
							</a>
							<a href='/catalogue' className={s['menubottomitem']}>
								Контакты
							</a>
						</nav>
					</div>
					<div className={s['col']}>
						<div className={s['contacts']}>
							<p className={s['contactstitle']}>Мы на связи</p>
							<a
								className={classNames(s['contactstel'], s['contactslink'])}
								href='tel:89177172179'>
								8 (999) 00-00-00
							</a>
							<a
								className={classNames(s['contactsmail'], s['contactslink'])}
								href='mailto:hordog.ru@gmail.com'>
								dogfood.ru@gmail.com
							</a>
							<ul className={classNames(s['socials'])}>
								<li>
									<a className={s['socialslink']} href='/#'>
										<img src={Telegram} alt='telegram' />
									</a>
								</li>
								<li>
									<a className={s['socialslink']} href='/#'>
										<img src={Whatsapp} alt='whatsapp' />
									</a>
								</li>
								<li>
									<a className={s['socialslink']} href='/#'>
										<img src={Viber} alt='viber' />
									</a>
								</li>
								<li>
									<a className={s['socialslink']} href='/#'>
										<img src={Instagram} alt='instagram' />
									</a>
								</li>
								<li>
									<a className={s['socialslink']} href='/#'>
										<img src={Vk} alt='vk' />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
