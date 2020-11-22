import React, { useState, useEffect, useContext, createContext } from 'react';
import fire from '../../Firebase/config';

const AuthContext = createContext(null);
	
export const useAuth = () => useContext(AuthContext);

export const ProvideAuth = ({ children }) => {
	const auth = useFirebaseAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useFirebaseAuth = () => {
	const [user, setUser] = useState(null);

	const userSuccess = response => {
		setUser(response.user);
		return response.user;
	};

	const userFailure = e => {
		console.error(e);
		throw e;
	}

	const signin = (email, password) => {
		return fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(userSuccess)
			.catch(userFailure)
	};

	const signup = (email, password) => 
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(userSuccess)
			.catch(userFailure);

	const signout = () => (
		fire
			.auth()
			.signOut()
			.then(() => setUser(false))
	);

	useEffect(() => {
		const unsubscribe = fire
			.auth()
			.onAuthStateChanged(user => {
				setUser(user || false);
			});

		return () => unsubscribe();
	}, [])

	return {
		user,
		signin,
		signup,
		signout,
	}
}


//// use state - we are gonna hve some app state which is the user.
/*

useEffect - when this hook is installed, it will subscribe to firebase auth
and listen for any changes to the authentication of our user in our application.
Which means, if thre is any other way besides logging out in our application,
say a timeout expires, firebase will publish a message to us (somehow?) 
and then we can log the user out.  Maybe it is done remotely through admin?

useContext - a hook exported so that any other component can use it without arguments and automatically receive the state which is Provided via AuthProvider.

createContext - to create the context which is used as a react element via AuthContext.Provider value={whatever state}
The key here being that the value provided is not context but rather state, and that the context itself is just a Medium for state.

*/