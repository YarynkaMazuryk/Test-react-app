import React, { Component } from 'react';
import './singUp.css';

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      about: '',
      isActive: '',
      picture: '',

      errorName: '',
      errorEmail: '',
      errorDescription: '',
      errorStatus: '',

      isValid: false
    }
  }

  checkName(e) {
      e.preventDefault();
      const name = e.target.value;
      const regex = /^[a-zA-Z_ ]+$/;

      if (name.match(regex)) {
        this.setState({name: name, errorName: ''});
        e.target.classList.remove('error');
      } else if (name === ''){
        this.setState({errorName: '*Please enter the name'});
        e.target.classList.add('error');
      } else {
        this.setState({errorName: '*Please enter alphabet characters only'});
        e.target.classList.add('error');
      }
  }

  checkEmail(e) {
    e.preventDefault();
    const email = e.target.value;
    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (email.match(regex)) {
      this.setState({email: email, errorEmail: ''});
      e.target.classList.remove('error');
    } else  {
      this.setState({errorEmail: '*Please enter valid email-ID' });
      e.target.classList.add('error');
    }
  }

  checkDescription(e) {
    e.preventDefault();
    const about = e.target.value;
    if ( about.split(' ').length >= 3 ) {
      this.setState({about: about, errorDescription: ''});
      e.target.classList.remove('error');
    } else {
      this.setState({about: about, errorDescription: '*Enter at least 3 words'});
      e.target.classList.add('error');
    }
  }

  checkStatus(e) {
    e.preventDefault();
    const isActive = e.target.value;
    if (isActive === 'active' ) {
      this.setState({isActive: true, errorStatus: ''});
      e.target.classList.remove('error');
    } else if (isActive === 'not active' ) {
      this.setState({isActive: false, errorStatus: ''});
      e.target.classList.remove('error');
    } else  {
      this.setState({errorStatus: 'Status can be active or not active'});
      e.target.classList.add('error');
    }
  }

  getState(e) {
    e.preventDefault();
    this.state.isValid ? this.props.addNewUser(this.state) : console.log('Form is not valid');
  }

  render () {
    return ( <div className='login'>
        <h3>Login form</h3>
        <form className='singUp' >
          <label>Name</label>
          <input type="text" placeholder='Enter the name' onChange = {(e)=> this.checkName(e)}/>
          <div className="errorMessage">{this.state.errorName}</div>
          <label>Email</label>
          <input type="email" placeholder='Enter the email' onChange = {(e)=> this.checkEmail(e)}/>
          <div className="errorMessage">{this.state.errorEmail}</div>
          <label>Description</label>
          <input type="text" placeholder='Enter the description' onChange = {(e)=> this.checkDescription(e)}/>
          <div className="errorMessage">{this.state.errorDescription}</div>
          <label>Status</label>
          <input type="text" placeholder = 'Enter your status' onChange = {(e)=> this.checkStatus(e)}/>
          <div className="errorMessage">{ this.state.errorStatus}</div>
          <input type="submit" id='submit' onClick = {(e) => this.getState(e)}/>
        </form>
      </div>
    )
  }
}


export default SingUp;

{/*<input type="file" onChange = {(e)=> this.checkFile(e)}/>*/}
// checkFile(e) {
//   e.preventDefault();
//   const picture = e.target.value;
//   if (picture.indexOf('jpg') !== -1 || picture.indexOf('png') !== -1 ) {
//     this.setState({picture: picture});
//     e.target.classList.remove('error');
//   } else  {
//     e.target.classList.add('error');
//   }
// }
