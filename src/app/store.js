import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../features/Todos/Todos.reducer';

export default configureStore({
  reducer: {
    todos: todosSlice,
  },
});
