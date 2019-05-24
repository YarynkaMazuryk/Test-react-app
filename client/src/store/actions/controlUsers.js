import * as types from './actionsTypes';

export const addNewUser = (data) => dispatch => {
    dispatch({
        type: types.ADD_USER_REQUEST,
    });
    const jsonData = JSON.stringify(data);
    fetch(`/api/users/putData`, {
        method: 'post',
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    })
        .then(result => result.json()
            .then(data => {
                if (data.success) {
                    dispatch({
                        type: types.ADD_USER_SUCCESS,
                        payload: data
                    })
                } else {
                    dispatch({
                        type: types.ADD_USER_ERROR,
                        payload: data
                    })
                }
            }));
};
export const addUserSuccess = (data) => {
    return {
        type: types.ADD_USER_SUCCESS,
        payload: data
    }
};
export const addUserError = (data) => {
    return {
        type: types.ADD_USER_ERROR,
        payload: data
    }
}
export const removeUser = (data) => dispatch => {
    console.log(data);
    const jsonData = JSON.stringify(data);
    fetch(`/api/users/deleteUser`, {
        method: 'delete',
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
         body: jsonData,
    })
        .then(result => result.json()
            .then(data => {
                if (data.success) {
                    dispatch({
                         type: types.DELETE_USER_SUCCESS,
                         payload: data
                    })
                } else {   }
            })
        )
};

export const showUsers = (allUsers, typeUsers) => {
    const activeUsers = allUsers.filter(user => user.status === typeUsers);
    return {
        type: types.SHOW_USERS,
        payload: activeUsers,
        typeUsers: typeUsers
    }
};

export const showAllUsers = () => {
    return {
        type: types.SHOW_ALL_USERS
    }
};