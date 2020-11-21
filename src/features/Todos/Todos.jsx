import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { add, toggle } from './Todos.reducer';

import './Todos.css'; 
import { ROUTES } from '../../common/constants';

const Todos = () => {
	const input = useRef(null);
	const todos = useSelector(state => state.todos);
	const dispatch = useDispatch();

	const onKeydown = (e) => {
		if (e.key === 'Enter' && e.target.value) {
			dispatch(add(e.target.value));
			input.current.value = '';
		}
	}

	const toggleTodo = idx => {
		dispatch(toggle(idx));
	}

	return (
		<div className='todos-container'>
			<div className='todos-inner'>
				<div className='header'>
					<h1>Todos</h1>
					<Link to={ROUTES.SIGN_UP}>Sign Up</Link>
				</div>
				<ul>
					{todos.map((todo, idx) => (
						<li key={todo.key} className={classnames(todo.done && 'done')} onClick={() => toggleTodo(idx)}>{todo.label}</li>
					))}
				</ul>
				<input ref={input} onKeyDown={onKeydown} placeholder='+ Add Todo' />
			</div>
		</div>
	);
};

export default Todos;