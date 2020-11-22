import React, { useRef } from 'react';

import './Form.css';

export default function Form ({ title, actionLabel, submit, belowForm, error }) {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const onSubmit = e => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		submit(email, password);
	}

	// Nobody should ever have to code that again.
	// There should be a hotkey to auto-generate email/password forms...
	// There probably already is.
	return (
		<div className='form-container'>
			<h2>{title}</h2>
			{error && <p className='form-error'>{error}</p>}
			<form className='form' onSubmit={onSubmit}>
				<label htmlFor='email'>Email Address</label>
				<input ref={emailRef} id='email' placeholder="Email Address" />
				
				<label htmlFor='password'>Password</label>
				<input type='password' ref={passwordRef} id='password' placeholder="Password" />

				<button type='submit'>{actionLabel}</button>
			</form>
			{belowForm}
		</div>
	)
}