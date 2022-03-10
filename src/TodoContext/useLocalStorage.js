import React from "react";

function useLocalStorage(itemName, initialValue) {
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	const [item, setItem] = React.useState(initialValue);

	React.useEffect(() => {
		setTimeout(() => {
			try {
				//throw new Error("Ooooooh noooo!");
				if (!localStorage.getItem(itemName)) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
				}
				let parsedItem = JSON.parse(localStorage.getItem(itemName));
				
				setItem(parsedItem);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		}, 5000);
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

export { useLocalStorage };