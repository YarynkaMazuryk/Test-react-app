import {ADD_USER, SHOW_USERS, SHOW_ALL_USERS, FETCH_USERS} from './actionsTypes';

export const addNewUser = (data) => dispatch => {
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    fetch(`http://localhost:3001/api/putData`, {
        method: 'post',
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    })
        .then(result => result.json()
            .then(newUser => {
                dispatch({
                    type: ADD_USER,
                    payload: newUser
                })
            }));
};

export const showUsers = (allUsers, typeUsers) => {
    const activeUsers = allUsers.filter(user => user.status === typeUsers);
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