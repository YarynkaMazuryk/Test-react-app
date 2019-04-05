import React, { Component } from 'react';
import {connect} from 'react-redux';
import v4 from 'uuid/v4';

import './singUp.css';
import getError from "../../helpers/validationHelper";
import {addNewUser} from '../../store/actions/controlUsers'

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      about: '',
      isActive: true,
      _id: '',

      errorName: '*Please enter the name',
      errorEmail: '*Please enter the email',
      errorAbout: '*Please enter the description',
    }
  }

  componentWillMount() {
    this.setState({_id: v4()});
  }

  validateField(val, fieldName){
    let errorStateName = `error${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`;
    this.setState({
      [fieldName]: val,
      isActive: !this.state.isActive,
      [errorStateName]: getError(val, fieldName)});
  }

  getState(e) {
    e.preventDefault();
    const {errorName,errorEmail,errorAbout} = this.state;

    if (errorName === '' && errorEmail === '' && errorAbout === '') {
      this.props.addNewUser(this.state);
    }
  }

  render () {
    const {name, email, isActive, about, errorName, errorAbout, errorEmail} = this.state;
    return ( <div className='login'>
        <h3>Login form</h3>
        <form className='singUp' >
          <label>Name</label>
          <input className={errorName && 'error'} type="text" placeholder='Enter the name' value={name} onChange = {(e)=> this.validateField(e.target.value, "name")}/>
          <p className="errorMessage">{errorName}</p>
          <label>Email</label>
          <input className={errorEmail && 'error'} type="email" placeholder='Enter the email' value={email} onChange = {(e)=> this.validateField(e.target.value, "email")}/>
          <p className="errorMessage">{errorEmail}</p>
          <label>Description</label>
          <input className={errorAbout && 'error'} type="text" placeholder='Enter the description' value={about} onChange = {(e)=> this.validateField(e.target.value, "about")}/>
          <p className="errorMessage">{errorAbout}</p>
          <label>Active status</label>
          <input type="checkbox" name="active" id='checkbox' checked={isActive} onChange = {(e)=> this.validateField(e.target.checked, "isActive")}/>
          <input type="submit" id='submit' onClick = {(e) => this.getState(e)} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    renderedUser: state.renderedUser,
    allUser: state.allUser,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: (newUser) => dispatch(addNewUser(newUser))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);


