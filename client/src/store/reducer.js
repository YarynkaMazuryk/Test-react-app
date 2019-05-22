import * as types from './actions/actionsTypes';
import {updateObject} from '../helpers/updateObject';
import {findAndRemoveElement} from '../helpers/findAndRemoveElement'

const initialState = {
    renderedUser: [],
    allUser: [],
    showActiveUser: true,
    showInactiveUser: true,
    showAllUser: false,
    isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //fetch all users
        case types.FETCH_USERS_REQUEST:
            return updateObject (state, {isLoading: true});
        case types.FETCH_USERS_SUCCESS:
            return updateObject (state,
                {renderedUser: action.payload.users,
                              allUser: action.payload.users,
                              isLoading: false
                });
        case types.FETCH_USERS_ERROR:
            return updateObject (state,
                {
                    error: action.payload ? action.payload.error : "Something went wrong",
                    isLoading: false,
                    allUser: [],
                    renderedUser: []
                });
        //add new User
        case types.ADD_USER_REQUEST:
            return updateObject (state, {isLoading: true});
        case types.ADD_USER_SUCCESS:
            return updateObject (state,
                {renderedUser: state.renderedUser.concat([action.payload.newUser]),
                              allUser: state.allUser.concat([action.payload.newUser]),
                              isLoading: false});
        case types.ADD_USER_ERROR:
            return updateObject (state,
                { error: action.payload.error,
                               isLoading: false});
        //delete User
        case types.DELETE_USER_SUCCESS:
            return updateObject (state,
                {renderedUser: findAndRemoveElement(state.renderedUser, action.payload.id),
                    allUser: findAndRemoveElement(state.renderedUser, action.payload.id),
                    isLoading: false});
        case types.DELETE_USER_ERROR:
            return updateObject (state,
                { error: action.payload.error,
                    isLoading: false});


        case types.SHOW_USERS:
            return updateObject (state, {
                renderedUser: action.payload,
                showActiveUser: !action.typeUsers,
                showInactiveUser: action.typeUsers,
                showAllUser: true
            });
        case types.SHOW_ALL_USERS:
            return updateObject(state, {
                renderedUser: state.allUser,
                showAllUser: false,
                showActiveUser: true,
                showInactiveUser: true
            });
    }
    return state;
};

export default reducer;