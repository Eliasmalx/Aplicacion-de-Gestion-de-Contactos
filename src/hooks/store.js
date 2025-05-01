export const initialState = {
    contacts: []
};

export function contactReducer(state, action) {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case "REMOVE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter((contact, index) => index !== action.payload)
            };
        case "SET_CONTACTS":
            return {
                ...state,
                contacts: action.payload
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}
