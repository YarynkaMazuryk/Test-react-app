import React, { PureComponent } from 'react';
import UserCard from './UserCard'

class App extends PureComponent {
  constructor () {
    super();
    this.state = {
      users: []
    }
      this.showActiveUsers = this.showActiveUsers.bind(this);
  }
  componentWillMount() {
      fetch(`http://www.json-generator.com/api/json/get/cpTmnSrPCa?indent=2`)
          .then(result => result.json()
              .then(data => {
                  this.setState({users: data})
                }))
  }
  render() {
    return (
        <React.Fragment>
            <button onClick = {this.showActiveUsers}>Show active users</button>
            <div className='cardContainer'>
                {this.state.users.map(user => {
                    return <UserCard key={user._id} user={user}/>
                })}
            </div>
        </React.Fragment>
    );
  }
}

export default App;
