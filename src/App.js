import React, { PureComponent } from 'react';
import UserCard from './UserCard'
import './App.css';

class App extends PureComponent {
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
  render() {
    return (
        <React.Fragment>
            <div className='buttonContainer'>
                {this.state.showActiveUser && <button className='activeUser' onClick={()=>this.showUsers(true)}>Show active users</button> }
                {this.state.showInactiveUser && <button className='inactiveUser' onClick={()=>this.showUsers(false)}>Show inactive users</button> }
                {this.state.allUser && <button className='allUser' onClick={()=>this.showAllUsers()}>Show all users</button>}
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

export default App;
