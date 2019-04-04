import React, { Component } from 'react';
import styled from 'styled-components';

import UserCard from '../UserCard'
import './UserList.css';


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
    this.users = []
    this.state = {
      usersForRender: [],
      showActiveUser: true,
      showInactiveUser: true,
      allUser: false
    }
  }

  componentWillMount() {
    this.users = this.props.usersList;
    this.setState({usersForRender: this.props.usersList});
  }

  showUsers(showActive) {
      const activeUsers =  this.users.filter(user => user.isActive === showActive);
      this.setState({usersForRender: activeUsers, showActiveUser: !showActive, showInactiveUser: showActive,  allUser: true})
  }
  showAllUsers(){
      this.setState({usersForRender: this.users, showActiveUser: true, allUser: false, showInactiveUser: true })
  }

  render() {
    const {showActiveUser, showInactiveUser, allUser } = this.state;
    return (
        <React.Fragment>
            <div className='buttonContainer'>
                {showActiveUser && <Button  onClick={()=>this.showUsers(true)}>Show active users</Button> }
                {showInactiveUser && <Button onClick={()=>this.showUsers(false)}>Show inactive users</Button> }
                {allUser && <Button onClick={()=>this.showAllUsers()}>Show all users</Button>}
            </div>
            <div className='cardContainer'>
                {this.state.usersForRender.map(user => {
                    return <UserCard key={user._id} user={user}/>
                })}
            </div>
        </React.Fragment>
    );
  }
}

export default UserList;
