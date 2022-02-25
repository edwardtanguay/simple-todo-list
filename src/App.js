import { useState, useEffect, useRef } from 'react';
import './App.scss';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const inputBox = useRef(null);

	const handleAddTodo = (e) => {
		e.preventDefault();
		if (todo.trim() !== '') {
			todos.push(todo);
			localStorage.setItem('simpleTodoList_todos', JSON.stringify(todos));
			setTodos([...todos]);
			setTodo('');
			inputBox.current.focus();
		}
	}

	const handleClearTodos = () => {
		setTodos([]);
		localStorage.setItem('simpleTodoList_todos', JSON.stringify([]));
		setTodo('');
		inputBox.current.focus();
	}

	useEffect(() => {
		const _todos = JSON.parse(localStorage.getItem('simpleTodoList_todos'));
		setTodos(_todos === null ? [] : _todos);
	}, []);

	return (
		<div className="App">
			<h1>Todo List</h1>
			<div className="todoListArea">
				<form>
					<input autoFocus ref={inputBox}  type="text" onChange={(e) => setTodo(e.target.value)} value={todo} /> <button onClick={(e) => handleAddTodo(e)}>Add Todo</button>
					<button type="button" onClick={handleClearTodos}>Clear Todos</button>
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