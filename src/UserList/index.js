import React, { Component } from 'react';

import UserCard from '../UserCard/index'
import './UserList.css';

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
                {showActiveUser && <button className='activeUser' onClick={()=>this.showUsers(true)}>Show active users</button> }
                {showInactiveUser && <button className='inactiveUser' onClick={()=>this.showUsers(false)}>Show inactive users</button> }
                {allUser && <button className='allUser' onClick={()=>this.showAllUsers()}>Show all users</button>}
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
