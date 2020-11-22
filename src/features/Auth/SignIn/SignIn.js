import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ROUTES } from '../../../common/constants';
import { useAuth } from '../../../common/hooks/useAuth';
import Form from '../Form/Form';

// TODO investigate different form options / packages / libraries
export default function SignIn () {
	const { user, signin } = useAuth();
	
	if (user) return <Redirect to={'/'} />

	return (
		<Form
			title='Sign In'
			actionLabel='Sign In'
			submit={signin}
			belowForm={
				<p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
			}
		/>
	)
}