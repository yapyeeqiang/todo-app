import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Quote from "./components/Quote";
import TodoList from "./components/TodoList";

function App() {
	// useState
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		getLocalTodos();
	}, []);

	// useEffect
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	// Functions
	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	// Save to Local Storage
	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	};

	return (
		<div className="app">
			<header>
				<h1>PAPA's Todo List</h1>
			</header>
			<Quote />
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList
				filteredTodos={filteredTodos}
				todos={todos}
				setTodos={setTodos}
			/>
		</div>
	);
}

export default App;
