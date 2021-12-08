const initialState = [
    {
        id: 0,
        name: "Harsh Sharma",
        number: 1234566777,
        email: "harsh@gmail.com",
    },
    {
        id: 1,
        name: "kitta Sharma",
        number: 9283739492,
        email: "kitta@gmail.com",
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact => contact.id !== action.payload);
            state = filterContacts;
            return state;
        default:
            return state;
    }
};

export default contactReducer;