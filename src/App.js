import React from 'react';
import Todos from './features/Todos/Todos';
import './App.css';

import FirebaseContext from './Firebase/context';

function App() {
  return (
		<FirebaseContext.Provider value={null}>
   		<Todos />
		</FirebaseContext.Provider>
  );
}

export default App;
