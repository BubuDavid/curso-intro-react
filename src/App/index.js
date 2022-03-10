import React from "react";

import { AppUI } from "./AppUI";

// const defaultTodos = [
// 	{ text: 'Cortar cebolla', completed: false },
// 	{ text: 'Tomar curso de intro a React', completed: true },
// 	{ text: 'Llorar con la llorona', completed: false },
// ]

function useLocalStorage(itemName, initialValue) {
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	const [item, setItem] = React.useState(initialValue);

	React.useEffect(() => {
		setTimeout(() => {
			try {
				throw new Error("Ooooooh noooo!");
				if (!localStorage.getItem(itemName)) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
				}
				let parsedItem = JSON.parse(localStorage.getItem(itemName));
				
				setItem(parsedItem);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		}, 2000);
	}, []);


	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			setItem(newItem);
		} catch(error) {
			setError(error);
		}
	}

	return {
		item,
		saveItem,
		loading,
		error
	};
}

function App() {
	const {
		item: todos,
		saveItem: setTodos,
		loading,
		error
	} = useLocalStorage('TODOS_V1', []);

	const [searchValue, setSearchValue] = React.useState('');

	const completedTodos = todos.filter(todo => todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (searchValue.length < 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText)
		});
	}

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		setTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const newTodos = todos.filter(todo => todo.text !== text);
		setTodos(newTodos);
	};


  return (
		<AppUI
			loading={loading}
			error={error}
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
		/>
  );
}

export default App;
