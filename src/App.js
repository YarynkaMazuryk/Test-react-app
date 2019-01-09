import React, { PureComponent } from 'react';
import UserCard from './UserCard'
import './App.css';

class App extends PureComponent {
  constructor () {
    super();
    this.users = [];
    this.state = {
      usersForRender: []
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
  showUsers(e) {
      if (e.currentTarget.className === 'activeUser'){
          const activeUsers =  this.users.filter(user => user.isActive === true);
          this.setState({usersForRender: activeUsers})
          console.log('active user');
          console.log(e.currentTarget);
          e.currentTarget.classList.add('notVisible');
      } else if (e.currentTarget.className === 'inactiveUser')  {
          const inactiveUsers = this.users.filter(user => user.isActive === false);
          this.setState({usersForRender: inactiveUsers})
          console.log('inactive user');
          e.currentTarget.classList.add('notVisible');
      } else {
          this.setState({usersForRender: this.users})
      }
  }
  render() {
    return (
        <React.Fragment>
            <div className='buttonContainer'>
                {()=> this.showButtons()}
                <button className='activeUser' onClick={(e)=>this.showUsers(e)}>Show active users</button>
                <button className='inactiveUser' onClick={(e)=>this.showUsers(e)}>Show inactive users</button>
                {/*<button className='allUser' onClick={(e)=>this.showUsers(e)}>Show all users</button>*/}
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
