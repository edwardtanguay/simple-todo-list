import { useState } from 'react';
import './App.scss';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const handleAddTodo = (e) => {
		e.preventDefault();
		todos.push(todo);
		setTodos([...todos]);
	}

	return (
		<div className="App">
			<h1>Todo List</h1>
			<div className="todoListArea">
				<form>
					<input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} /> <button onClick={(e) => handleAddTodo(e)}>Add Todo</button>
					<hr />
					<ul>
						{todos.map((todo, i) => {
							return (
								<li key={i}>{todo}</li>
							)
						})}
					</ul>
				</form>
			</div>
		</div>
	);
}

export default App;