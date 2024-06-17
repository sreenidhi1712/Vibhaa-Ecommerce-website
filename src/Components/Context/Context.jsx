import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
	
	const [isOpen, setIsOpen] = useState(false);
	const [Toggle,setToggle] = useState(true);
	const [cart,setCart] = useState([]);
	const [favourites,setFavourites] = useState([]);

	

	const contextValue = {
		isOpen,
		setIsOpen,
		Toggle,
		setToggle,
		cart,
		setCart,
		favourites,
		setFavourites
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;
