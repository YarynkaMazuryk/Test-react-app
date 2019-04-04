import {ADD_USER} from './actionsTypes';

export const addNewUser = (newUser) => {
    return {
        type: ADD_USER,
        payload: newUser
    }
}