import React, { Component } from 'react';
import {connect} from 'react-redux';

import './singUp.css';
import getError from "../../helpers/validationHelper";
import {addUserSuccess, addUserError} from '../../store/actions/controlUsers'


class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            about: '',
            status: true,
            _id: '',

            errorName: '*Please enter the name',
            errorEmail: '*Please enter the email',
            errorAbout: '*Please enter the description',
        }
    }

    validateField(val, fieldName){
        let errorStateName = `error${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`;
        this.setState({
            [fieldName]: val,
            status: !this.state.status,
            [errorStateName]: getError(val, fieldName)});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {errorName,errorEmail,errorAbout, name, email, about, status} = this.state;
        const {addUserSuccess, addUserError, history} = this.props;
        if (errorName === '' && errorEmail === '' && errorAbout === '') {
            //add new user
            const jsonData = JSON.stringify({"name": name, "email": email, "about": about, "status": status});
            fetch(`/api/users/putData`, {
                method: 'post',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: jsonData,
            })
                .then(result => result.json()
                    .then(data => {
                        if (data.success) {
                            addUserSuccess(data);
                            history.push('/users');
                        } else {
                            addUserError(data);
                        }
                    }));
        }
    }

    render () {
        const {name, email, status, about, errorName, errorAbout, errorEmail} = this.state;
        const {error} = this.props;
        return (
            <React.Fragment>
                {error ? <p>{error}</p>
                    :<div className='login'>
                        <h3>Login form</h3>
                        <form className='singUp' onSubmit={(e) => this.handleSubmit(e)} >
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
                            <input type="checkbox" name="active" id='checkbox' checked={status} value={status} onChange = {(e)=> this.validateField(e.target.checked, "isActive")}/>
                            <input type="submit" id='submit'/>
                        </form>
                    </div>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        renderedUser: state.renderedUser,
        allUser: state.allUser,
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUserSuccess: (data) => dispatch(addUserSuccess(data)),
        addUserError: (data) => dispatch(addUserError(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);
