import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import UserCard from '../UserCard/UserCard'
import './UserList.css';
import {showUsers, showAllUsers} from '../../store/actions/controlUsers'

const Button = styled.button`
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px;
  margin-right: 10px;
`;

const UserList = (props) => {
    const {showActiveUser, showInactiveUser, showAllUser, showUsers, showAllUsers, allUser} = props;
    return (
        <React.Fragment>
            <div className='buttonContainer'>
                {showActiveUser && <Button  onClick={()=>showUsers(allUser,true)}>Show active users</Button> }
                {showInactiveUser && <Button onClick={()=>showUsers(allUser,false)}>Show inactive users</Button> }
                {showAllUser && <Button onClick={()=>showAllUsers()}>Show all users</Button>}
            </div>
            {
                allUser.length > 0
                    ? <div className='cardContainer'>
                        {props.renderedUser.map(user => {
                            return <UserCard key={user._id} user={user}/>
                        })}
                      </div>
                    : <p>No users yet</p>
            }

        </React.Fragment>
    );
  };

const mapStateToProps = state => {
    return {
        renderedUser: state.renderedUser,
        allUser: state.allUser,
        showActiveUser: state.showActiveUser,
        showInactiveUser: state.showInactiveUser,
        showAllUser: state.showAllUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUsers: (allUsers, typeUsers) => dispatch(showUsers(allUsers, typeUsers)),
        showAllUsers: () => dispatch(showAllUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
