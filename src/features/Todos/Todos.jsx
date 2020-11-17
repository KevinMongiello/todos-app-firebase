import React, { useRef } from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { add, toggle } from './Todos.reducer';

import './Todos.css'; 

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
				<h1>Todos</h1>
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