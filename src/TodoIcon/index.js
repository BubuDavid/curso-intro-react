import React from 'react';
import { ReactComponent as CheckSVG } from './completeIcon.svg';
import { ReactComponent as DeleteSVG } from './deleteIcon.svg';
import './TodoIcon.css';


const iconTypes = {
	"check": color => (
		<CheckSVG className="Icon-svg Icon-svg--check" fill={color}/>
	),
	"delete": color => (
		<DeleteSVG className="Icon-svg Icon-svg--delete"/>
	)
}

function TodoIcon({ type, color, onClick }) {
	return (
		<span
			className={`Icon-container Icon-container--${type}`}
			onClick={onClick}
		>
			{iconTypes[type](color)}
		</span>
	);
}

export { TodoIcon };