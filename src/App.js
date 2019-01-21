import React, { Component } from 'react';
import UserCard from './UserCard'
import SingUp from './SingUp'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.users = [];
    this.state = {
      usersForRender: [],
      showActiveUser: true,
      showInactiveUser: true,
      allUser: false
    }
  }
  componentWillMount() {
      fetch(`http://www.json-generator.com/api/json/get/cpTmnSrPCa?indent=2`)
          .then(result => result.json()
              .then(data => {
                  this.users = data;
                  this.setState({usersForRender: data})
              }))
  }
  showUsers(showActive) {
      const activeUsers =  this.users.filter(user => user.isActive === showActive);
      this.setState({usersForRender: activeUsers, showActiveUser: !showActive, showInactiveUser: showActive,  allUser: true})
  }
  showAllUsers(){
      this.setState({usersForRender: this.users, showActiveUser: true, allUser: false, showInactiveUser: true })
  }
  addNewUser(user) {
    this.users.push(user);
    this.setState({usersForRender: this.users});
  }
  render() {
    const {showActiveUser, showInactiveUser, allUser } = this.state;
    return (
        <React.Fragment>
          {/*make destruction*/}
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
          <SingUp addNewUser={user => this.addNewUser(user)} />
        </React.Fragment>
    );
  }
}

export default App;
