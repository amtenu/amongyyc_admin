import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer"
const INITIAL_STATE = {
    darkMode: false
}

// createContext is a function that takes in an object and returns a context object
export const DarkModeContext = createContext(INITIAL_STATE)
 

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)
    
    return (
        <DarkModeContext.Provider value={{ darkMode:state.darkMode,dispatch }}>
            {children}
        </DarkModeContext.Provider>
    )
}
