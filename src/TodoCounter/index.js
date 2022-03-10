import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
	const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">Has completado {completedTodos || 0} de {totalTodos || 0} TODOs</h2>
  );
}

export { TodoCounter };