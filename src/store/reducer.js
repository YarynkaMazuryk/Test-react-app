import {FETCH_USERS, ADD_USER, SHOW_USERS, SHOW_ALL_USERS} from './actions/actionsTypes'
import {updateObject} from './utility';

const initialState = {
    renderedUser: [],
    allUser: [],
    showActiveUser: true,
    showInactiveUser: true,
    showAllUser: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return updateObject (state, {renderedUser: action.payload, allUser: action.payload});
        case ADD_USER:
            return updateObject (state,
                {renderedUser: state.renderedUser.concat([action.payload]), allUser: state.allUser.concat([action.payload])});
        case SHOW_USERS:
            return updateObject (state, {
                ...state,
                renderedUser: action.payload,
                showActiveUser: !action.typeUsers,
                showInactiveUser: action.typeUsers,
                showAllUser: true
            });
        case SHOW_ALL_USERS:
            return updateObject(state, {
                ...state,
                renderedUser: state.allUser,
                showAllUser: false,
                showActiveUser: true,
                showInactiveUser: true
            });
    }
    return state;
};

export default reducer;