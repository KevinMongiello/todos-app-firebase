import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { add, toggle } from './Todos.reducer';
import { fetchTodos } from './Todos.action';

import './Todos.css'; 
import { ROUTES } from '../../common/constants';
import { useAuth } from '../../common/hooks/useAuth';

const Todos = () => {
	const { user } = useAuth();
	const dispatch = useDispatch();
	const input = useRef(null);
	const todos = useSelector(state => state.todos);

	const onKeydown = (e) => {
		if (e.key === 'Enter' && e.target.value) {
			dispatch(add(e.target.value));
			input.current.value = '';
		}
	}

	const toggleTodo = idx => {
		dispatch(toggle(idx));
	}

	const getUsername = user => user.email.split('@')[0];

	useEffect(() => {
		if (user) {
			dispatch(fetchTodos(getUsername(user)));
		}
	}, [dispatch, user])

	console.log('todos: ', todos);

	return (
		<div className='todos-container'>
			<div className='todos-inner'>
				<div className='header'>
					{user && <p>Hello {user.displayName || user.email}</p>}
					{user && <Link to={ROUTES.LOG_OUT}>Log Out</Link>}
				</div>
				<h1>Todos</h1>
				{!user || !todos && <h2>Loading...</h2>}
				{user && todos && <>
					<ul>
						{todos.map((todo, idx) => (
							<li key={todo.key} className={classnames(todo.done && 'done')} onClick={() => toggleTodo(idx)}>{todo.label}</li>
						))}
					</ul>
					<input ref={input} onKeyDown={onKeydown} placeholder='+ Add Todo' />
				</>}
			</div>
		</div>
	);
};

export default Todos;