import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from './actionsTypes';

export const fetchUsers = () => dispatch => {
    dispatch({
        type: FETCH_USERS_REQUEST
    });
    fetch(`http://localhost:3001/api/users/getUsers`)
        .then(result => result.json()
            .then(data => {
                if (data.success) {
                    dispatch({
                        type: FETCH_USERS_SUCCESS,
                        payload: data
                    })
                } else {
                    dispatch({
                        type: FETCH_USERS_ERROR,
                        payload: data
                    })
                }
            })
        )
        .catch(error =>  {
            console.error(error);
            dispatch({
                type: FETCH_USERS_ERROR,
            })
        });
};