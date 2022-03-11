import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoLoadingElements } from '../TodoLoadingElements';

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal
	} = React.useContext(TodoContext);
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			
			<TodoList>
				{error && <p>Desesperate, hubo un error...</p>}
				{loading && <TodoLoadingElements />}
				{(!loading && !searchedTodos.length && !error) && <p>Crea tu primer TODO!</p>}
				{searchedTodos.map(todo => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							onComplete={() => completeTodo(todo.text)}
							onDelete={() => deleteTodo(todo.text)}
						/>
				))}
			</TodoList>

			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}

      <CreateTodoButton />
    </React.Fragment>
	)
}

export { AppUI };