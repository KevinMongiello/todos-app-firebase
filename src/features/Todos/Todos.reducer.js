import { createSlice } from '@reduxjs/toolkit';

const makeTodo = ({ label, done }) => ({ label, done, key: Math.random() });

const todosSlice = createSlice({
	name: 'todos',
	initialState: null,
	reducers: {
		add: (state, action) => [...state, makeTodo(action.payload)],
		setTodos: (_, action) => action.payload.map(makeTodo),
		remove: (state, action) => {
			const nextState = state;
			nextState.splice(action.payload, 1);
			return nextState;
		},
		toggle: (state, action) => {
			const nextState = [...state];
			const todo = nextState[action.payload]
			nextState[action.payload] = { ...todo, done: !todo.done };
			return nextState;
		}
	}
});

export const { add, remove, toggle, setTodos } = todosSlice.actions;
export default todosSlice.reducer;