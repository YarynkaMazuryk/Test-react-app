import {FETCH_USERS, ADD_USER} from './actions/actionsTypes'

const initialState = {
    renderedUser: [],
    allUser: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                renderedUser: action.payload,
                allUser: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                renderedUser: state.renderedUser.concat([action.payload]),
                allUser: state.renderedUser.concat([action.payload]),
            }
    }
    return state;
};

export default reducer;