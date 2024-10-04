import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch (action.type) {
        case "RED":
            return {...state, color: "red" };
        case "GREEN":
            return {...state, color: "green" };
        case "BLUE":
            return {...state, color: "blue" };
        default:
            return state;
        
    }
};

export const TitleColorProvider = ({ children }) => {
	const [state, dispatch] = useReducer(titleColorReducer, {
		color: "purple",
	});
    console.log("🚀 ~ TitleColorProvider ~ state:", state)

	return (
		
		<TitleColorContext.Provider value={{ ...state, dispatch }}>
			{children}
		</TitleColorContext.Provider>
	);
};
