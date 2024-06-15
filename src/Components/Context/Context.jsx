import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
	
	const [isOpen, setIsOpen] = useState(false);
	const [Toggle,setToggle] = useState(true)

	

	const contextValue = {
		isOpen,
		setIsOpen,
		Toggle,
		setToggle
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;
