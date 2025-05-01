// ContactContext.js
import { createContext, useContext, useReducer } from "react";
import { contactReducer, initialState } from "./store"; // ruta correcta

const ContactContext = createContext();

export function ContactProvider({ children }) {
    const [state, dispatch] = useReducer(contactReducer, initialState);

    return (
        <ContactContext.Provider value={{ state, dispatch }}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContactContext() {
    return useContext(ContactContext);
}
