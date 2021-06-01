import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
	return (
		<div className="todo__container">
			<ul className="todo__list">
				{filteredTodos.map((todo) => (
					<Todo
						key={todo.id}
						todos={todos}
						setTodos={setTodos}
						todo={todo}
						text={todo.text}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
