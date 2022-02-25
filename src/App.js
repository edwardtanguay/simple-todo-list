import { useState } from 'react';
import './App.scss';

const _todos = JSON.parse(localStorage.getItem('simpleTodoList_todos'));

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState(_todos);

	const handleAddTodo = (e) => {
		e.preventDefault();
		todos.push(todo);
		localStorage.setItem('simpleTodoList_todos', JSON.stringify(todos));
		setTodos([...todos]);
		setTodo('');
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