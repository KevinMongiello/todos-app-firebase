import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../../../common/hooks/useAuth';

export default function LogOutPage () {
	const { signout } = useAuth();
	signout();

	return <Redirect to='/' />
}