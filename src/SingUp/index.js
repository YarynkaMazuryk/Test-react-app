import React, { PureComponent } from 'react';
import './singUp.css';
import UserCard from "../UserCard";

class SingUp extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  checkName(e) {
    console.log(e.target.value);
    e.preventDefault();
    const name = e.target.value;
    if (name) {

    }
    this.setState({name: name});
  }
  render () {
    return ( <form className='singUp'>
        <input type="text" placeholder='Enter the name' onChange = {(e)=> this.checkName(e)}/>
        {/*<input type="email" placeholder='Enter the email'/>*/}
        {/*<input type="text" placeholder='Enter the description'/>*/}
        {/*<input type="file"/>*/}
        {/*<input type="text" placeholder = 'Enter your status'/>*/}
        <input type="submit" id='submit'/>
      </form>
    )
  }
}

export default SingUp;