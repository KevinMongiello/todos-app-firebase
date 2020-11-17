import { createSlice } from '@reduxjs/toolkit';

const makeTodo = label => ({ label, done: false, key: Math.random() });

const todosSlice = createSlice({
	name: 'todos',
	initialState: [makeTodo('test')],
	reducers: {
		add: (state, action) => console.log(action) || [...state, makeTodo(action.payload)],
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

export const { add, remove, toggle } = todosSlice.actions;
export default todosSlice.reducer;