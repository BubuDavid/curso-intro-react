import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton(props) {
	const { openModal, setOpenModal } = React.useContext(TodoContext);

	let classNameButton = "CreateTodoButton";
	classNameButton += openModal ? " CloseTodoButton": "";
  return (
		<button
			className={classNameButton}
			onClick={() => setOpenModal(!openModal)}
		>
			+
		</button>
  );
}

export { CreateTodoButton };