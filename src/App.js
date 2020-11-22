import React from 'react';
import Todos from './features/Todos/Todos';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './common/constants';
import { SignUp, SignIn, LogOut, EnforceAuth } from './features/Auth';
import './App.css';
import ProtectedRoute from './features/Navigation/ProtectedRoute/ProtectedRoute';

function App() {
  return (
		<Switch>
			<Route path={ROUTES.SIGN_IN}><SignIn /></Route>
			<Route path={ROUTES.SIGN_UP}><SignUp /></Route>
			<Route path={ROUTES.LOG_OUT}><LogOut /></Route>
			<ProtectedRoute path='/'>
					<Todos />
			</ProtectedRoute>
		</Switch>
  );
}

export default App;
