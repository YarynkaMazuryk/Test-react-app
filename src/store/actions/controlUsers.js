import {ADD_USER, SHOW_USERS, SHOW_ALL_USERS} from './actionsTypes';

export const addNewUser = (newUser) => {
    return {
        type: ADD_USER,
        payload: newUser
    }
};

export const showUsers = (allUsers, typeUsers) => {
    const activeUsers = allUsers.filter(user => user.isActive === typeUsers);
    return {
        type: SHOW_USERS,
        payload: activeUsers,
        typeUsers: typeUsers
    }
};

export const showAllUsers = () => {
    return {
        type: SHOW_ALL_USERS
    }
};