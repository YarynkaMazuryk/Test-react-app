import React, {Component} from 'react';
import './userCard.css';
import {removeUser, updateUser} from "../../store/actions";
import {connect} from "react-redux";

class UserCard extends Component {
    state = {
        switchToEditCard: false,
        editName: '',
        editEmail: '',
        editAbout: '',
        editStatus: true,
        id: ''
    };

    componentWillMount() {
        const {user: {status, about, email, name, _id}} = this.props;
        this.setState({
            editName: name,
            editEmail: email,
            editAbout: about,
            editStatus: status,
            id: _id
        })
    }

    handleChange(val, fieldName) {
        this.setState({
            [fieldName]: val,
            editStatus: !this.state.editStatus,
        })
    };

    editUser(switchValue) {
        switchValue ? this.setState({switchToEditCard: true}) : this.setState({switchToEditCard: false});
    };

    saveUpdate(e) {
        e.preventDefault();
        const {editName, editEmail, editAbout, id, editStatus} = this.state;
        const {updateUser, error} = this.props;
        const update = {
            name: editName,
            email: editEmail,
            about: editAbout,
            status: editStatus,
        };
        updateUser(id, update);
        if (error) {
            this.setState({switchToEditCard: false});
        } else {
            console.log(error);
        }
    }

    render() {
        const {user, user: {status, about, email, name, _id}, removeUser} = this.props;
        const {switchToEditCard, editName, editEmail, editAbout, editStatus} = this.state;
        return (
            <div>
                {
                    !switchToEditCard ? <div className='userCard'>
                            <div className='headerCard'>
                                <p className={status ? 'active' : 'not-active'}></p>
                                <p>{name}</p>
                                <button className='editButton' onClick={() => this.editUser(true)}>Edit</button>
                                <p className='removeButton' onClick={() => removeUser({"id": _id, user})}>X</p>
                            </div>
                            <div className='mainContent'>
                                {about}
                            </div>
                            <div className='footerCard'>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                        </div>
                        : <React.Fragment>
                            <form className='headerCard'>
                                <input type='text'
                                       placeholder="User name"
                                       value={editName}
                                       onChange={(e) => this.handleChange(e.target.value, "editName")}></input>
                                <input type='email'
                                       placeholder="User email"
                                       value={editEmail}
                                       onChange={(e) => this.handleChange(e.target.value, "editEmail")}></input>
                                <input type='text'
                                       placeholder="User description"
                                       value={editAbout}
                                       onChange={(e) => this.handleChange(e.target.value, "editAbout")}></input>
                                <input type="checkbox"
                                       name="active"
                                       id='checkbox'
                                       checked={editStatus}
                                       value={editStatus}
                                       onChange={(e) => this.handleChange(e.target.value, "editStatus")}/>
                                <input type='submit' value="Save" onClick={(e) => this.saveUpdate(e)}/>
                            </form>
                            <button onClick={() => this.editUser(false)}>Go back</button>
                        </React.Fragment>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeUser: (data) => dispatch(removeUser(data)),
        updateUser: (id, data) => dispatch(updateUser(id, data))
    }
};

export default connect(null, mapDispatchToProps)(UserCard);
