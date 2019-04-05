import React, { Component } from 'react';
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

class UserList extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
        <React.Fragment>
            <div className='buttonContainer'>
                {this.props.showActiveUser && <Button  onClick={()=>this.props.showUsers(this.props.allUser,true)}>Show active users</Button> }
                {this.props.showInactiveUser && <Button onClick={()=>this.props.showUsers(this.props.allUser,false)}>Show inactive users</Button> }
                {this.props.showAllUser && <Button onClick={()=>this.props.showAllUsers()}>Show all users</Button>}
            </div>
            <div className='cardContainer'>
                {this.props.renderedUser.map(user => {
                    return <UserCard key={user._id} user={user}/>
                })}
            </div>
        </React.Fragment>
    );
  }
}

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
