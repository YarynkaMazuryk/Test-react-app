import {FETCH_USERS} from './actionsTypes';

export const fetchUsers = () => dispatch => {
    console.log('get users');
    fetch(`http://www.json-generator.com/api/json/get/cpTmnSrPCa?indent=2`)
        .then(result => result.json()
            .then(users => {
                dispatch({
                    type: FETCH_USERS,
                    payload: users
                })
            }));
};