import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
	
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	

	const contextValue = {
		isOpen,
		setIsOpen,
		loading, 
		setLoading
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;
