import fire from "../../Firebase/config";
import { setTodos } from './Todos.reducer';

export const fetchTodos = username => async (dispatch) => {
	const snapshot = await fire
		.database()
		.ref(`user/${username}`)
		.once('value');

	if (snapshot && snapshot.val()) {
		dispatch(setTodos(snapshot.val().todos));
	};
}