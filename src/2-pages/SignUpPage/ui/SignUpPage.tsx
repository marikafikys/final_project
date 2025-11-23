import { WithProtection } from '5-entities/user/lib/WithProtection';
import { SignUpForm } from '3-widgets/SignUpForm';

export const SignUpPage = WithProtection(() => {
	return <SignUpForm />;
});
