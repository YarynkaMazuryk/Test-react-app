import {
    FETCH_USERS_SUCCESS,
    ADD_USER,
    SHOW_USERS,
    SHOW_ALL_USERS,
    FETCH_USERS_ERROR,
    FETCH_USERS_REQUEST
} from './actions/actionsTypes'
import {updateObject} from '../helpers/updateObject';

const initialState = {
    renderedUser: [],
    allUser: [],
    showActiveUser: true,
    showInactiveUser: true,
    showAllUser: false,
    isLoading: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return updateObject (state, {isLoading: true});
        case FETCH_USERS_SUCCESS:
            return updateObject (state,
                {renderedUser: action.payload.users,
                              allUser: action.payload.users,
                              isLoading: false
                });

        case FETCH_USERS_ERROR:
            return updateObject (state,
                {
                    error: action.payload ? action.payload.error : "Something went wrong",
                    isLoading: false,
                    allUser: [],
                    renderedUser: []
                });

        case ADD_USER:
            console.log(action.payload);
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