import { WithProtection } from '6-shared/lib/HOCs/WithProtection';
import { SignInForm } from '3-widgets/SignInForm';

export const SignInPage = WithProtection(() => {
	return <SignInForm />;
});
