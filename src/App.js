import React, { Component } from 'react';

import UserList from "./UserList";
import SingUp from "./SingUp";
import Loader from "./Loader";

// import {Router, Route, Link} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory();

class App extends Component {
  constructor (props) {
    super(props);
    this.users = []
    this.state = {
      usersList: []
    }
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
      <div>
        { this.state.usersList.length > 0
          ? <UserList usersList={this.state.usersList} />
          : <Loader/>
        }
        <SingUp addNewUser={user => this.addNewUser(user)} />
      </div>
    );
  }
}

export default App;



{/*<UserList usersList = {this.state.usersList}/>*/}
{/*<Router history={history}>*/}
{/*<div>*/}
{/*<nav>*/}
{/*<ul className='navigation'>*/}
{/*<li><Link to='/singUp'>Sing up</Link></li>*/}
{/*<li><Link to='/users'>User List</Link></li>*/}
{/*</ul>*/}
{/*</nav>*/}
{/*<Route path='/singUp' component={SingUp}/>*/}
{/*<Route path='/users' component={UserList}/>*/}
{/*</div>*/}
{/*</Router>*/}