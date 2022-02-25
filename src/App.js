import { useState } from 'react';
import './App.scss';

function App() {
	const [todo, setTodo] = useState('');
	// second state variable...

	return (
		<div className="App">
			<h1>Todo List ({todo})</h1>
			<div className="todoListArea">
				<input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} /> <button>Add Todo</button>
			</div>
		</div>
	);
}

export default App;