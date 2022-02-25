import { useState } from 'react';
import './App.scss';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState(['get milk', 'do report']);

	return (
		<div className="App">
			<h1>Todo List ({todo})</h1>
			<div className="todoListArea">
				<input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} /> <button>Add Todo</button>
				<hr />
				<ul>
					{todos.map((todo, i) => {
						return (
							<li key={i}>{todo}</li>
						)
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;