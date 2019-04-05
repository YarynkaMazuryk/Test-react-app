import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchUsers} from './store/actions/fetchUsers';
import UserList from "./components/UserList/UserList";
import SingUp from "./components/SingUp/SingUp";
import Loader from "./components/Loader/Loader";

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
  constructor (props) {
    super(props);
  }
  componentWillMount() {
      this.props.fetchUsers();
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
          { this.props.allUser.length > 0
            ? <Route path='/users' component={() => <UserList/>} />
            : <Route path='/users' component={Loader} />
          }
       </div>
     </Router>
    );
  }
}


const mapStateToProps = state => {
    return {
        renderedUser: state.renderedUser,
        allUser: state.allUser,
    };
};

 const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
 };

export default connect(mapStateToProps, mapDispatchToProps)(App);



