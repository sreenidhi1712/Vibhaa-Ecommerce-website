import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
	
	const [isOpen, setIsOpen] = useState(false);

	

	const contextValue = {
		isOpen,
		setIsOpen,
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;
