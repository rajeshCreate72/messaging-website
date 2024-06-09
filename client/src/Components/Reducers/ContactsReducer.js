const initialState = {
    contactToChat: null,
}

function ContactsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONTACT_TO_CHAT': {
            return {
                ...state,    
               contactToChat: action.contact,
            };
        }
        default:
            return state;
    }
}

export default ContactsReducer;