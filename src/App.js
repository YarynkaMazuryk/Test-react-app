import React, { Component } from 'react';

import UserList from "./components/UserList";
import SingUp from "./components/SingUp";
import Loader from "./components/Loader";

import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
  constructor (props) {
    super(props);
    this.users = []
  }
  state = {
      usersList: []
    }
  componentWillMount() {
    fetch(`http://www.json-generator.com/api/json/get/cpTmnSrPCa?indent=2`)
      .then(result => result.json()
        .then(data => {
          this.users = data;
          this.setState({usersList: data});
        }))
  }

  addNewUser(user) {
    this.users.push(user)
    this.setState({usersList: this.users });
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <nav>
            <ul className='navigation'>
            <li><Link to='/singUp'>Sing up</Link></li>
            <li><Link to='/users'>User List</Link></li>
            </ul>
          </nav>
          <Route path='/singUp'  component={() => <SingUp addNewUser={user => this.addNewUser(user)}/>} />
          { this.state.usersList.length > 0
            ? <Route path='/users' component={() => <UserList  usersList={this.state.usersList}/>} />
            : <Route path='/users' component={Loader} />
          }
       </div>
     </Router>
    );
  }
}

export default App;


