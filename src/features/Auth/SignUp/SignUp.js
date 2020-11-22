import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';
import { useAuth } from '../../../common/hooks/useAuth';
import Form from '../Form/Form';

export default function SignupForm () {
	const { user, signup } = useAuth();

	if (user) return <Redirect to="/" />
	
	return (
		<Form
			title='Sign Up'
			submit={signup}
			actionLabel="Sign Up"
			belowForm={
				<p>Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link></p>
			}
		/>
	);
}