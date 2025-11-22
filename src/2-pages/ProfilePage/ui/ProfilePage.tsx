import s from './ProfilePage.module.css';
import classNames from 'classnames';
import { ButtonBack } from '6-shared/ui/ButtonBack';
import { WithProtection } from '6-shared/lib/HOCs/WithProtection';
import { EditProfileForm } from '4-features/editProfileForm';

export const ProfilePage = WithProtection(() => {
	return (
		<>
			<ButtonBack />
			<EditProfileForm />
		</>
	);
});
