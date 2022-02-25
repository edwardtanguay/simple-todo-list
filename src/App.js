import { useState } from 'react';
import './App.scss';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const handleAddTodo = (e) => {
		console.log('nnn');
	}

	return (
		<div className="App">
			<h1>Todo List</h1>
			<div className="todoListArea">
				<input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} /> <button onClick={(e) => handleAddTodo(e)}>Add Todo</button>
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