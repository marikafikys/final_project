import { WithProtection } from '5-entities/user/lib/WithProtection';
import { SignInForm } from '3-widgets/SignInForm';

export const SignInPage = WithProtection(() => {
	return <SignInForm />;
});
