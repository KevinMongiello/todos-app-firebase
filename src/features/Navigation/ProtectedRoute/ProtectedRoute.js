import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../../common/hooks/useAuth';
import { ROUTES } from '../../../common/constants';

export default function ProtectedRoute ({ children, ...rest }) {
	const { user } = useAuth();
	return (
		<Route
			{...rest}
			render={({ location }) => (
				!!user
					? children
					: <Redirect
						to={{
							pathname: ROUTES.SIGN_IN,
							state: { from: location }
						}}
					/>
			)}
		/>
	);
}