import React, { useEffect } from 'react';
import firebase from 'firebase';

import * as firebaseui from 'firebaseui'
import { Link } from 'react-router-dom';

export default function FirebaseSignup () {
	let redirect;
	useEffect(() => {
		const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());


		ui.start('#firebaseui-auth-container', {
			callbacks: {
				signInSuccessWithAuthResult: function(authResult, redirectUrl) {
					console.log('redirectURl: ', redirectUrl);
					redirect = redirectUrl
					return true;
				},
				uiShown: function() {
					// The widget is rendered.
					// Hide the loader.
					document.getElementById('loader').style.display = 'none';
				}
			},
			// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
			signInFlow: 'popup',
			signInSuccessUrl: 'http://localhost:3000/',
			signInOptions: [
				// Leave the lines as is for the providers you want to offer your users.
				firebase.auth.GoogleAuthProvider.PROVIDER_ID
			],
			// // Terms of service url.
			// tosUrl: '<your-tos-url>',
			// // Privacy policy url.
			// privacyPolicyUrl: '<your-privacy-policy-url>'
		});

		ui
	}, []);
	return redirect ? <Redirect to='/' /> : (
		<div>
			<Link to='/'>Home</Link>
			<div id="loader">Loading...</div>
			<div id="firebaseui-auth-container" />
		</div>
	)
}