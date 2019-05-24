import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';

import UserList from "./components/UserList/UserList";
import SingUp from "./components/SingUp/SingUp";

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
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
          <Route path='/singUp'  component={() => <SingUp history={history} />} />
          <Route path='/users' component={() => <UserList/>} />
       </div>
     </Router>
    );
  }
}

export default App;



