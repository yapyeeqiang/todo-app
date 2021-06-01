import React, { useState } from "react";

function Todo({ text, todo, todos, setTodos }) {
	const [editMode, setEditMode] = useState(false);

	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	return (
		<div className="todo">
			{editMode ? (
				<li
					contentEditable="true"
					className={`editTodo__item ${todo.completed ? "completed" : ""}`}>
					{text
						.split("")
						.map((letter, index) =>
							index ? letter.toLowerCase() : letter.toUpperCase()
						)
						.join("")}
				</li>
			) : (
				<li className={`todo__item ${todo.completed ? "completed" : ""}`}>
					{text
						.split("")
						.map((letter, index) =>
							index ? letter.toLowerCase() : letter.toUpperCase()
						)
						.join("")}
				</li>
			)}
			<button onClick={() => setEditMode(!editMode)} className="edit__btn">
				<i class="fas fa-edit"></i>
			</button>
			<button onClick={completeHandler} className="complete__btn">
				<i className="fas fa-check"></i>
			</button>
			<button onClick={deleteHandler} className="trash__btn">
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
}

export default Todo;
