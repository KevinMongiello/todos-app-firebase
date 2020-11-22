import React from 'react';
import Todos from './features/Todos/Todos';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './common/constants';
import { SignUp, SignIn, LogOut, EnforceAuth } from './features/Auth';
import './App.css';

function App() {
  return (
		<Switch>
			<Route path={ROUTES.SIGN_IN}><SignIn /></Route>
			<Route path={ROUTES.SIGN_UP}><SignUp /></Route>
			<Route path={ROUTES.LOG_OUT}><LogOut /></Route>
			<Route path='/'>
				<EnforceAuth redirectUrl={ROUTES.SIGN_IN}>
					<Todos />
				</EnforceAuth>
			</Route>
		</Switch>
  );
}

export default App;
