import React, { PureComponent } from 'react';
import './singUp.css';
import UserCard from "../UserCard";

class SingUp extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: ''
    }
  }

  checkName(e) {
    e.preventDefault();
    const name = e.target.value;
    if (name.length === 4) {
      this.setState({name: name});
      e.target.classList.remove('error')
    } else  {
      e.target.classList.add('error')
    }
  }
  checkEmail(e) {
    e.preventDefault();
    const email = e.target.value;
    if (email.indexOf('@') !== -1) {
      this.setState({email: email});
      e.target.classList.remove('error');
    } else  {
      e.target.classList.add('error');
    }
  }
  render () {
    return ( <form className='singUp'>
        <input type="text" placeholder='Enter the name' onChange = {(e)=> this.checkName(e)}/>
        <input type="email" placeholder='Enter the email' onChange = {(e)=> this.checkEmail(e)}/>
        <input type="text" placeholder='Enter the description'/>
        <input type="file"/>
        <input type="text" placeholder = 'Enter your status'/>
        <input type="submit" id='submit'/>
      </form>
    )
  }
}

export default SingUp;