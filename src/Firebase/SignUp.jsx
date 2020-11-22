import React, { useEffect } from 'react';
import firebase from 'firebase';

import * as firebaseui from 'firebaseui'
import { Link } from 'react-router-dom';

export default function FirebaseSignup () {
	useEffect(() => {
		const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

		ui.start('#firebaseui-auth-container', {
			callbacks: {
				signInSuccessWithAuthResult: function() {
					return true;
				},
				uiShown: function() {
					document.getElementById('loader').style.display = 'none';
				}
			},
			signInFlow: 'popup',
			signInSuccessUrl: 'http://localhost:3000/',
			signInOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID
			],
		});
	}, []);
	
	return (
		<div>
			<Link to='/'>Home</Link>
			<div id="loader">Loading...</div>
			<div id="firebaseui-auth-container" />
		</div>
	)
}